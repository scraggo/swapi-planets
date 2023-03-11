import { get } from '../requests';
import {
  PLANET_ENDPOINT,
  populate,
  searchParams,
  swapiGetAll,
} from './swapi-requests';
import { IPlanet } from './types';
// import { planetMock } from './planet-mock';

export const swapiGetPlanets = (): Promise<IPlanet[]> =>
  swapiGetAll(PLANET_ENDPOINT);

const relationships = ['films', 'residents'];

export const swapiGetPlanet = async (name: string): Promise<IPlanet> => {
  // return planetMock;
  // debugger;
  const { results } = await get(searchParams(PLANET_ENDPOINT, name));

  if (results.length === 0) {
    throw new Error(`Didn't find planet: ${name}`);
  }

  const [planet] = results;

  // request films and residents in parallel
  const populatedRelationships = await Promise.all(
    relationships.map((endpoint) => populate(planet[endpoint]))
  );

  relationships.forEach((rel, i) => {
    planet[rel] = populatedRelationships[i];
  });

  return planet;
};
