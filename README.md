# The Planets of Star Wars

- Deployed: <https://swapi-planets.netlify.app/>
- Repo: <https://github.com/scraggo/swapi-planets>

## The result

Using CRA, TypeScript, axios, SWR, and ChakraUI, I fulfilled these requirements:

- Show all the **Planet** entries on the `/` route (which automatically reroutes to `/planets`)
- In a new page, show details of a Planet entry
  - the route is `/planets/:name`
  - The relationships I chose were **films** and **residents** (people).

The considerations and features I added to the requirements were:

- The site is mobile-responsive.
- One can navigate to the planet page (`/planets/:name`) directly. One can certainly navigate to it from the home page, but they don't have to!
- There are no images for swapi resources. I wanted to have a visual for each planet so the entire site wasn't just boring text. The visual I chose to create was in 2 parts: 1 - a generic planet image and 2 - an overlaid donut chart to give the color based on the climate of the planet. I achieved this by hand-mapping the climates of all the planets to colors provided by ChakraUI. Having an actual image for each planet would've been ideal, but that seemed like a non-essential and time-consuming problem to solve.
- When looking at the info of a single planet, I wanted to give a sense of how a planet compared to other planets. I chose to compare the planet's `diameter` and `population` to the correlating maximums. I handled the (annoying) cases where those were "unknown".
  - Relatedly, I created utils and used a library to format numbers so they're condensed and readable. Numbers like `1000000000000` are unpleasant to read and create unpredictable DOM element widths.
- To speed things up and avoid needless API calls:
  - Each API request is cached with `swr`. I used the `immutable` setting because it's highly unlikely that new Star Wars data would be added before a user reloaded or re-visited the page. (This is easily changed by tweaking the cache settings.)
  - The relationships data is loaded on-demand. If I were to request the films and residents for each planet on homepage load, it would take `NumberOfPlanets * (NumberOfFilms + NumberOfResidents)` time instead of simply `NumberOfPlanets` time. There are 60 planets, and guesstimated average of 4 relationships, which I didn't needlessly lazy-load.
- The color scheme is heavily Star Wars. The `nav` colors are Star Wars yellow, the background is black, the foreground is white to give you a feeling of being in space.
- I added a header logo that can always navigate to the homepage.
- I added a spinner while requests were loading.

A bit on the codebase:

- I used `hooks` exclusively (no class components.)
- I utilized TS types as much as reasonably possible.
- The codebase is coarsely organized by domain - general stuff is in `src` while the swapi-specific stuff is in the `src/star-wars` directory. I would create more directories if the app got bigger, `components`, `utils`, etc.

## Challenges

- Data schemas and validation: Having "unknown" in a lot of places, even the "title", was often surprising and needed to be accounted for.
- I chose not to use the SWAPI JS/TS wrappers. I used `axios` to call the API directly. I tried `swapi-ts` because it had types, but I kept getting random errors and it didn't make what I was trying to do easy. These wrappers weren't up-to-snuff anyways - no unit tests and bad docs.
- ChakraUI - I used this challenge as an excuse to use this library. There were some definite surprises with it, but it made certain things easier.
- I wanted to spend more time designing and styling the app. There can always be more touches added!

## Running the app

- use node 16
- `npm i`
- `npm start` - local dev
- `npm build` - create production deploy
- Use Netlify for deployments
