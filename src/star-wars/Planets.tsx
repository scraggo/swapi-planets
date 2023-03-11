import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  Center,
  Heading,
  Flex,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import Spinner from '../Spinner';
import { usePlanets } from './planet-hooks';
import PlanetCard from './PlanetCard';

import './Planets.css';

const Unexpected = () => (
  <div className="planet-page">
    <span>An error occurred. See console.</span>
  </div>
);

export default function Planets() {
  const { data: planets, error, isLoading } = usePlanets();

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

  if (!planets) {
    return <Unexpected />;
  }

  if (planets) {
    debugger;
  }

  return (
    <div className="planets-page">
      <Text size="xs" textAlign="center">
        {planets.length} planets found.
      </Text>

      <Center className="planets-wrapper">
        {planets.map((planet: any) => {
          const { name, population, climate } = planet;
          return <PlanetCard key={name} planet={planet} />;
        })}
      </Center>
    </div>
  );
}
