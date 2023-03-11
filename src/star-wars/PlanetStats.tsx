import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
} from '@chakra-ui/react';

import { formatLargeNum } from '../formatting';

function StatSingle({
  label,
  helpText,
  value,
  percentile,
}: {
  label: string;
  helpText: string;
  value: number;
  percentile: null | string;
}) {
  return (
    <Stat>
      <StatLabel>{label}</StatLabel>
      {percentile === null ? (
        <StatHelpText>{value}</StatHelpText>
      ) : (
        <>
          <StatNumber>{formatLargeNum(value)}</StatNumber>
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
