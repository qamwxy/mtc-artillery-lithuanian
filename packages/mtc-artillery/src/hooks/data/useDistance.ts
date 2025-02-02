import useGameMap from '@/hooks/data/useGameMap';
import { useDataStore } from '@/stores/data';
import { calculateDistance, studsToMeters } from '@/utils/math';

export default function useDistance(): number {
  const map = useGameMap();

  const gun = useDataStore((s) => s.getGun());
  const target = useDataStore((s) => s.getTarget());

  const distance = studsToMeters(
    calculateDistance(gun.x, gun.y, target.x, target.y) * map.size,
  );

  return distance;
}
