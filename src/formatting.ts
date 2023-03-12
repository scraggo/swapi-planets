import numeral from 'numeral';

// 1230974	'0.0a'	1.2m
export const formatLargeNum = (num: string | number) => {
  if (Number.isNaN(Number(num))) {
    return num;
  }
  return numeral(num).format('0.0a').replace('.0', '');
};

// 20.1234	'0.00'	20.123
export const formatPercentile = (num: number) => {
  const format = num < 1 ? '.00' : '0.00';
  return numeral(num).format(format);
};

export const kebabToWords = (str: string) =>
  str.toLowerCase().replace('-', ' ');

export const kebabCase = (str: string) =>
  str.toLowerCase().replaceAll(' ', '-');

export const pluralText = (num: number, singular: string, plural: string) =>
  num === 1 ? singular : plural;
