import React from 'react';

import { maps } from '@/config/maps';
import { useDataStore } from '@/stores/data';

import type { PropsWithChildren } from 'react';

export const heightmapCanvasId = 'heightmap-provider';

export default function HeightmapProvider({ children }: PropsWithChildren) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const mapIndex = useDataStore((s) => s.mapIndex);
  const map = maps[mapIndex];

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!map.heightmap) return;

    const context = canvas.getContext('2d')!;

    context.clearRect(0, 0, canvas.width, canvas.height);

    const image = new Image();

    function onImageLoad() {
      context.drawImage(image, 0, 0);
    }

    image.addEventListener('load', onImageLoad);

    image.src = `/images/webp/heightmaps/${map.image}.webp`;

    return () => {
      image.removeEventListener('load', onImageLoad);
    };
  }, [map]);

  return (
    <>
      <canvas
        ref={canvasRef}
        id={heightmapCanvasId}
        width={map.heightmap?.width ?? 0}
        height={map.heightmap?.height ?? 0}
        style={{ display: 'none' }}
      />

      {children}
    </>
  );
}
