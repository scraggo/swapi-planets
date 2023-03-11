import { useLocation } from 'react-router-dom';
import { Center, Heading, Flex, Wrap, WrapItem } from '@chakra-ui/react';
// import { Stack, HStack, VStack } from '@chakra-ui/react'
// import { Flex,  } from '@chakra-ui/react'
import './Planet.css';

import { usePlanet } from './planet-hooks';
import { getPercentiles } from './planet-percentiles';
import PlanetStats from './PlanetStats';
import { PlanetData, PlanetFilms, PlanetResidents } from './PlanetTable';
import PlanetVisual from './PlanetVisual';

const Unexpected = () => (
  <div>Something unexpected happened. See console for details.</div>
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
    return <div>Loading...</div>;
  }

  if (!planet) {
    return <Unexpected />;
  }

  if (planet) {
    debugger;
  }

  const { climate, diameter, name, films, population, residents } = planet;
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
              diameterPercentile={diameterPercentile}
              populationPercentile={populationPercentile}
            />
          </div>
        </Flex>
      </Center>
      <PlanetFilms films={films} name={name} />
      <PlanetResidents residents={residents} name={name} />
    </div>
  );
}
