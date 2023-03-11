import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  // StatArrow,
  StatGroup,
} from '@chakra-ui/react';

import { formatNumber } from '../formatting';

export default function PlanetStats(props: any) {
  const { diameter, diameterPercentile, population, populationPercentile } =
    props;

  return (
    <StatGroup>
      <Stat>
        <StatLabel>Diameter</StatLabel>
        <StatNumber>{formatNumber(diameter)}</StatNumber>
        <StatHelpText>
          {diameterPercentile}% compared to largest planet
        </StatHelpText>
      </Stat>

      <Stat>
        <StatLabel>Population</StatLabel>
        <StatNumber>{formatNumber(population)}</StatNumber>
        <StatHelpText>
          {populationPercentile}% compared to most densely populated planet
        </StatHelpText>
      </Stat>
    </StatGroup>
  );
}
