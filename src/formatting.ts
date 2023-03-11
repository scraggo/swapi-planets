// export const titlecase = (str: string) => {
//   const firstUpper = str[0].toUpperCase();
//   const lower = str.slice(1).toLowerCase();
//   return `${firstUpper}${lower}`;
// };

// console.assert(titlecase('hello') === 'Hello');
// console.assert(titlecase('heLLo') === 'Hello');

export const formatNumber = (num: number) =>
  new Intl.NumberFormat('en-US').format(num);
