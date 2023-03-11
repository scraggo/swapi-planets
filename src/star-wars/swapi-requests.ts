import { get } from '../requests';
import { kebabToWords } from '../formatting';

export const PLANET_ENDPOINT = 'planets';
export const FILM_ENDPOINT = 'films';

export const searchParams = (endpoint: string, term: string) =>
  `${endpoint}/?search=${kebabToWords(term)}`;

// count: 60
// next: "https://swapi.dev/api/planets/?page=2"
// previous: null
// ​results: Array(10)

export const swapiGetAll = async (endpoint: string) => {
  const pages = [];

  let res = await get(endpoint);
  pages.push(res.results);

  // while (res.next) {
  //   res = await get(res.next);
  //   pages.push(res.results);
  // }

  return pages.flat();
};

export const populate = (endpoints: string[]) =>
  Promise.all(endpoints.map((url) => get(url)));
