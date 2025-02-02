import { calculateMapSize } from '@/utils/math';

export interface Heightmap {
  0: number;
  255: number;
}

export interface GameMap {
  heightmap?: Heightmap;
  image: string;
  inRotation?: boolean;
  name: string;
  size: number;
}

/* eslint sort-keys-fix/sort-keys-fix: "error" */
export const gameMaps: Record<string, GameMap> = {
  arctic_airbase: {
    heightmap: {
      0: 0,
      255: 566.8941650390625,
    },
    image: 'arctic_airbase',
    inRotation: true,
    name: 'Arctic Airbase',
    size: 449 * 9,
  },

  chernobyl: {
    heightmap: {
      0: 0,
      255: 408.0989990234375,
    },
    image: 'chernobyl',
    inRotation: true,
    name: 'Chernobyl',
    size: calculateMapSize(165),
  },

  chernobyl_v2: {
    heightmap: {
      0: 0,
      255: 408.0989990234375,
    },
    image: 'chernobyl_v2',
    inRotation: true,
    name: 'Chernobyl V2',
    size: calculateMapSize(165),
  },

  cloudy_valley: {
    heightmap: {
      0: 0,
      255: 318.92401123046875,
    },
    image: 'cloudy_valley',
    inRotation: true,
    // gup map
    name: 'Cloudy Valley',
    size: calculateMapSize(116),
  },

  dustbowl: {
    heightmap: {
      0: 0,
      255: 360.703125,
    },
    image: 'dustbowl',
    inRotation: true,
    name: 'Dustbowl',
    size: 382 * 9,
  },

  dustbowl_ii: {
    heightmap: {
      0: 0,
      255: 505.26953125,
    },
    image: 'dustbowl_ii',
    inRotation: true,
    name: 'Dustbowl II',
    size: calculateMapSize(250),
  },

  gensokyo: {
    image: 'gensokyo',
    name: 'Gensokyo',
    size: calculateMapSize(122),
  },

  japan: {
    image: 'japan',
    name: 'Japan',
    size: calculateMapSize(122),
  },

  muddy_fields: {
    heightmap: {
      0: 0,
      255: 226.43841552734375,
    },
    image: 'muddy_fields',
    inRotation: true,
    // ukropg
    name: 'Muddy Fields',
    size: calculateMapSize(240),
  },

  normandy: {
    heightmap: {
      0: 0,
      255: 116.07926940917969,
    },
    image: 'normandy_bocage',
    inRotation: true,
    name: 'Normandy Bocage',
    size: 664 * 9,
  },

  powerplant: {
    heightmap: {
      0: 0,
      255: 476.80126953125,
    },
    image: 'powerplant',
    inRotation: true,
    name: 'Powerplant',
    size: calculateMapSize(160),
  },

  radar_station: {
    heightmap: {
      0: 0,
      255: 311.19268798828125,
    },
    image: 'radar_station',
    inRotation: true,
    name: 'Radar Station',
    size: 708 * 9,
  },

  reactor: {
    image: 'reactor',
    name: 'Reactor (old)',
    size: calculateMapSize(207),
  },

  roinburg: {
    heightmap: {
      0: 0,
      255: 227.86021423339844,
    },
    image: 'roinburg',
    inRotation: true,
    name: 'Roinburg',
    size: calculateMapSize(142),
  },

  sandy_place: {
    heightmap: {
      0: 0,
      255: 119.748046875,
    },
    image: 'sandy_place',
    name: 'Sandy Place',
    size: calculateMapSize(361),
  },

  snow_tundra: {
    image: 'snow_tundra',
    name: 'Snow Tundra',
    size: calculateMapSize(160),
  },

  sokolokva: {
    heightmap: {
      0: 0,
      255: 96.25390625,
    },
    image: 'sokolokva',
    inRotation: true,
    name: 'Sokolokva',
    size: 556 * 9,
  },

  testing: {
    image: 'testing',
    name: 'TESTING',
    size: 1113 * 9,
  },

  villers_sommeil: {
    heightmap: {
      0: 0,
      255: 104.35908508300781,
    },
    image: 'villers_sommeil',
    inRotation: true,
    // france
    name: 'Villers-Sommeil',
    size: 333 * 9,
  },

  zone_11: {
    heightmap: {
      0: 0,
      // 1 digit removed due to possible precision loss (250.13919067382812)
      255: 250.1391906738281,
    },
    image: 'zone_11',
    name: 'Zone 11',
    size: calculateMapSize(324),
  },
} satisfies Record<string, GameMap>;

export type MapId = keyof typeof gameMaps;

export const defaultMapId: MapId = 'muddy_fields';
