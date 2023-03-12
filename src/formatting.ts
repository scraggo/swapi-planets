import numeral from 'numeral';

// 1230974	'0.0a'	1.2m
export const formatLargeNum = (num: string | number) => {
  if (Number.isNaN(num)) {
    return num;
  }
  return numeral(num).format('0.0a');
};

// 20.1234	'0.00'	20.123
export const formatPercentile = (num: number) => numeral(num).format('0.00');

export const formatNumber = (num: number) =>
  new Intl.NumberFormat('en-US').format(num);

export const kebabToWords = (str: string) =>
  str.toLowerCase().replace('-', ' ');

export const kebabCase = (str: string) =>
  str.toLowerCase().replaceAll(' ', '-');

export const pluralText = (num: number, singular: string, plural: string) =>
  num === 1 ? singular : plural;
