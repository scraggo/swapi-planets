import { useLocation } from 'react-router-dom';
import { Center, Heading, Flex, Link } from '@chakra-ui/react';

import Spinner from '../Spinner';
import { usePlanet } from './planet-hooks';
import { getPercentiles } from './planet-percentiles';
import PlanetStats from './PlanetStats';
import { PlanetData, PlanetFilms, PlanetResidents } from './PlanetTable';
import PlanetVisual from './PlanetVisual';
import { IFilm, IPeople } from './types';

import './Planet.css';

const Unexpected = () => (
  <div className="planet-page">
    <span>An error occurred. See console.</span>
  </div>
);

export default function Planet() {
  const { pathname } = useLocation();
  const nameFromPath = pathname.replace('/planets/', '');
  // debugger;
  const { data: planet, error, isLoading } = usePlanet(nameFromPath);

  if (error) {
    console.error(error);
    return <Unexpected />;
  }

  if (isLoading) {
    return (
      <div className="planet-page">
        <Spinner />
      </div>
    );
  }

  if (!planet) {
    return <Unexpected />;
  }

  const { climate, diameter, name, films, population, residents, url } = planet;
  const { diameter: diameterPercentile, population: populationPercentile } =
    getPercentiles(diameter, population);

  return (
    <div className="planet-page">
      <Center>
        <Flex
          justifyContent="space-between"
          flexWrap="wrap"
          width="100%"
          maxWidth={900}
        >
          <div className="planet-main-info">
            <Heading as="h2" size="2xl" noOfLines={1} textAlign="center">
              {name}
            </Heading>
            <div>
              <PlanetVisual climate={climate} />
              <Link
                color="gray.300"
                display="block"
                fontSize="x-small"
                href={url}
                isExternal
                marginTop={4}
                textAlign="center"
              >
                View in SWAPI
              </Link>
            </div>
          </div>
          <div className="planet-secondary-info">
            <PlanetStats
              diameter={diameter}
              diameterPercentile={diameterPercentile}
              population={population}
              populationPercentile={populationPercentile}
            />
            <PlanetData
              {...planet}
              // diameterPercentile={diameterPercentile}
              // populationPercentile={populationPercentile}
            />
          </div>
        </Flex>
      </Center>
      <PlanetFilms films={films as IFilm[]} name={name} />
      <PlanetResidents residents={residents as IPeople[]} name={name} />
    </div>
  );
}
