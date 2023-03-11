import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Planet from './star-wars/Planet';
import Planets from './star-wars/Planets';

export default function Example() {
  return (
    /* Routes nest inside one another. Nested route paths build upon
    parent route paths, and nested route elements render inside
    parent route elements. See the note about <Outlet> below. */
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/planets" replace={true} />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planets/:name" element={<Planet />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/planets/Tatooine">About Planet 1</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <p>Page not found</p>
      <p>
        <Link to="/">Go back home</Link>
      </p>
    </div>
  );
}
