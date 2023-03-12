import { formatPercentile } from '../formatting';

export const maxPopulation = 1000000000000;
export const maxDiameter = 118000;

const roundIfNumber = (str: string, max: number) => {
  const numValue = Number(str);

  if (Number.isNaN(numValue)) {
    return null;
  }

  if (numValue / max < 0.0001) {
    return '0';
  }

  return formatPercentile((numValue / max) * 100);
};

export const getPercentiles = (diameter: string, population: string) => {
  return {
    diameter: roundIfNumber(diameter, maxDiameter),
    population: roundIfNumber(population, maxPopulation),
  };
};
