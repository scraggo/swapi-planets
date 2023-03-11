import { Link } from 'react-router-dom';
import { usePlanets } from './planet-hooks';

export default function Planets() {
  const { data: planets, error, isLoading } = usePlanets();

  if (error) {
    console.error(error);
    return <div>There was an error fetching. See console for details.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (planets) {
    debugger;
  }
  return (
    <div>
      {planets ? <span> There are {planets.length} planet(s).</span> : null}

      {planets
        ? planets.slice(0, 4)?.map((planet: any) => {
            debugger;
            return (
              <div key={planet.name}>
                {JSON.stringify(planet.value)}
                <Link to={`/planets/${planet.name.toLowerCase()}`}>
                  {planet.name}
                </Link>
                <hr />
              </div>
            );
          })
        : null}
    </div>
  );
}
