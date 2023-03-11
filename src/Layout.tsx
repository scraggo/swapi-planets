import { Link, Outlet } from 'react-router-dom';
import logo1 from './star-wars/logo-yellow-1.jpg';
import logo2 from './star-wars/logo-yellow-2.jpg';
import { Text } from '@chakra-ui/react';

export default function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <Link to="/">
          <Text as="b" paddingRight={2}>
            THE PLANETS OF
          </Text>
          <img src={logo1} alt="logo 1" />
          <img src={logo2} alt="logo 2" />
        </Link>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
