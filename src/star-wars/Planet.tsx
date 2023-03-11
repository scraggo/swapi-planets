import { useLocation } from 'react-router-dom';
import { usePlanet } from './planet-hooks';
import PlanetVisual from './PlanetVisual';

export default function Planet() {
  const { pathname } = useLocation();
  const name = pathname.replace('/planets/', '');
  // debugger;
  const { data: planet, error, isLoading } = usePlanet(name);

  if (error) {
    console.error(error);
    return <div>There was an error fetching. See console for details.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (planet) {
    debugger;
  }
  return (
    <div>
      {planet ? (
        <div>
          <PlanetVisual climate={planet.climate} />
          <span>
            Name: {planet.name} - There are {planet.films.length} films(s).
            There are {planet.residents.length} residents(s).
          </span>
        </div>
      ) : null}
      {/* {planets.map((planet: any) => (
        <div>
          JSON.stringify(planet.value)
          <hr />
        </div>
      ))} */}
    </div>
  );
}
