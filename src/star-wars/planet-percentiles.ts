import { formatPercentile } from '../formatting';

export const maxPopulation = 1000000000000;
export const maxDiameter = 118000;

const roundIfNumber = (str: string, max: number) => {
  const numValue = Number(str);

  return Number.isNaN(numValue)
    ? null
    : formatPercentile((numValue / max) * 100);
};

export const getPercentiles = (diameter: string, population: string) => {
  return {
    diameter: roundIfNumber(diameter, maxDiameter),
    population: roundIfNumber(population, maxPopulation),
  };
};
