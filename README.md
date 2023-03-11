# swapi-draft

star wars api code challenge

## setup

node 16

## todo

- handle missing stats
- kebab case planet for slug, if needed
- design palette https://duckduckgo.com/?t=ffab&q=star+wars+design+palette&atb=v174-1&iax=images&ia=images
- cleanup debuggers, unused code
- choose hosting

## done

- add design system - chakra
- choose api calls
- add react router, `:person`
- add swr
- get max population: 1000000000000
- get max diameter: 118000

```js
// max population
planets
  .map(({ population }) => {
    const num = Number(population);
    if (Number.isNaN(num)) return 0;
    return num;
  })
  .sort((a, b) => b - a);

// max diameter
planets
  .map(({ diameter }) => {
    const num = Number(diameter);
    if (Number.isNaN(num)) return 0;
    return num;
  })
  .sort((a, b) => b - a);
```
