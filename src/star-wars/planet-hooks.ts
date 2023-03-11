// import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';

import { swapiGetPlanets, swapiGetPlanet } from './planet-requests';

export function usePlanets() {
  return useSWRImmutable('PLANETS', swapiGetPlanets);
}
export function usePlanet(name: string) {
  return useSWRImmutable(name, swapiGetPlanet);
}
