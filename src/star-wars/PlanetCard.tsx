import { Link } from 'react-router-dom';
import { Heading, LinkBox, LinkOverlay } from '@chakra-ui/react';

import { kebabCase } from '../formatting';
import PlanetVisual from './PlanetVisual';

const getPlanetLink = (name: string) => `/planets/${kebabCase(name)}`;

export default function PlanetCard({ planet }: any) {
  const { name, population, climate, terrain } = planet;
  debugger;
  return (
    // <div className="planet-card" key={name}>
    <LinkBox
      as="article"
      p="5"
      // borderWidth="1px"
      rounded="md"
      className="planet-card"
      key={name}
    >
      <LinkOverlay as={Link} to={getPlanetLink(name)}>
        <PlanetVisual climate={climate} />
      </LinkOverlay>
      <div className="planet-card-content">
        <Heading as="h3" size="2xl" noOfLines={1} textAlign="center">
          <LinkOverlay as={Link} to={getPlanetLink(name)}>
            {name}
          </LinkOverlay>
        </Heading>
      </div>
      <ul>
        <li>Climate: {climate}</li>
        <li>Population: {population}</li>
        <li>Terrain: {terrain}</li>
      </ul>
    </LinkBox>
    // </div>
  );
}
