import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  // StatArrow,
  StatGroup,
} from '@chakra-ui/react';

import { formatNumber } from '../formatting';

function StatSingle({
  label,
  helpText,
  value,
  percentile,
}: {
  label: string;
  helpText: string;
  value: number;
  percentile: number | string;
}) {
  return (
    <Stat>
      <StatLabel>{label}</StatLabel>
      {typeof percentile === 'string' ? (
        <StatHelpText>{percentile}</StatHelpText>
      ) : (
        <>
          <StatNumber>{formatNumber(value)}</StatNumber>
          <StatHelpText>
            {percentile}% {helpText}
          </StatHelpText>
        </>
      )}
    </Stat>
  );
}

export default function PlanetStats(props: any) {
  const { diameter, diameterPercentile, population, populationPercentile } =
    props;

  return (
    <StatGroup>
      <StatSingle
        label="Diameter"
        helpText="compared to largest planet"
        value={diameter}
        percentile={diameterPercentile}
      />
      <StatSingle
        label="Population"
        helpText="compared to most densely populated planet"
        value={population}
        percentile={populationPercentile}
      />
    </StatGroup>
  );
}
