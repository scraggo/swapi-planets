// import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';

// import { swapiGetPlanets } from './planet-requests';
import { swapiGetPlanets, swapiGetPlanet } from './planet-requests';

export function usePlanets() {
  return useSWRImmutable('PLANETS', swapiGetPlanets);
}
export function usePlanet(name: string) {
  return useSWRImmutable(name, swapiGetPlanet);
}
// export function usePlanets() {
//   return useSWRImmutable('planets', swapiGetPlanets);
// }

// /**
//  * @param {string|undefined} owner
//  * @param {string} repo
//  */
// export function useCommits(owner, repo) {
//   return useSWR(
//     [owner, repo],
//     ([owner, repo]) => octoGetRecentCommits(owner, repo),
//     {
//       revalidateIfStale: false,
//       revalidateOnFocus: false,
//       revalidateOnReconnect: true,
//       refreshInterval: 1000 * 60 * 60, // 1 hour
//     }
//   );
// }
