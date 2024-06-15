/* 
  Converts all images to webp and creates 64px variants
*/

import fs from 'node:fs';
import path from 'node:path';

import clone from 'clone';
import isImage from 'is-image';
import klaw from 'klaw';
import sharp from 'sharp';

const cwd = process.cwd();

const imageDir = path.join(path.resolve(cwd, 'public'), 'images');
const heightmapDir = path.join(imageDir, 'heightmaps');
const webpDir = path.join(imageDir, 'webp');
const mapsDir = path.join(webpDir, 'maps');

if (fs.existsSync(webpDir))
  fs.rmSync(webpDir, {
    recursive: true,
  });
fs.mkdirSync(webpDir);

for await (const file of klaw(imageDir)) {
  if (file.path.includes(webpDir)) continue;
  if (file.path.includes(heightmapDir)) continue;
  if (!isImage(file.path)) continue;

  const relativeName = file.path.split(imageDir)[1].trim(1);
  const targetDir = path.join(
    webpDir,
    relativeName.split(path.sep).slice(0, -1).join(path.sep),
  );
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  // expect no periods in filename besides ext seperator
  const fileName = path.basename(file.path).split('.')[0];

  const webp = sharp(file.path).webp({ quality: 100, effort: 6 });
  const { width, height } = await webp.metadata();

  const target = Math.max(width, height);
  webp.resize(target, target, {
    fit: sharp.fit.contain,
  });

  if (targetDir === mapsDir)
    clone(webp)
      .resize(64)
      .toBuffer()
      .then((imageBuffer) =>
        fs.writeFileSync(
          path.join(mapsDir, `${fileName}_small.webp`),
          imageBuffer,
        ),
      )
      .catch((error) => {
        throw new Error(
          `Failed to generate 64px image for ${fileName}\n${error}`,
        );
      });

  webp
    .toBuffer()
    .then((imageBuffer) =>
      fs.writeFileSync(path.join(targetDir, `${fileName}.webp`), imageBuffer),
    )
    .catch((error) => {
      throw new Error(
        `Failed to generate large webp image for ${fileName}\n${error}`,
      );
    });
}
