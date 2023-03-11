import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import NoMatch from './NoMatch';
import Planet from './star-wars/Planet';
import Planets from './star-wars/Planets';

export default function AppRoutes() {
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
