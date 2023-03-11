import {
  // ExternalLinkIcon,
  Link,
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

const keys = [
  'rotation_period',
  'orbital_period',
  // 'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  // 'population',
];

export function PlanetData(props: any) {
  // const {
  //   rotation_period,
  //   orbital_period,
  //   // diameter,
  //   // diameterPercentile,
  //   climate,
  //   gravity,
  //   terrain,
  //   surface_water,
  //   // population,
  //   // populationPercentile,
  // } = props;

  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <TableCaption
          color="inherit"
          fontSize="md"
          textAlign="left"
          placement="top"
        >
          Stats:
        </TableCaption>
        <Tbody>
          {keys.map((key) => {
            return (
              <Tr key={key}>
                <Td textAlign="right" width={42}>
                  {key.replace('_', ' ')}:
                </Td>
                <Td>{props[key]}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export function PlanetFilms(props: any) {
  const { films, name } = props;

  return (
    <TableContainer>
      <Table variant="unstyled" size="sm">
        <TableCaption fontSize="md" textAlign="left" placement="top">
          {name} appears in {films.length} films:
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Release Date</Th>
            <Th>Director</Th>
            <Th>Producer</Th>
          </Tr>
        </Thead>
        <Tbody>
          {films.map((film: any) => {
            const { title, director, producer, release_date, url } = film;

            return (
              <Tr key={url}>
                <Td>
                  <Link href={url} isExternal>
                    {title}
                  </Link>
                </Td>
                <Td>{release_date}</Td>
                <Td>{director}</Td>
                <Td>{producer}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export function PlanetResidents(props: any) {
  const { name, residents } = props;

  return (
    <TableContainer>
      <Table variant="unstyled" size="sm">
        <TableCaption fontSize="md" textAlign="left" placement="top">
          There are {residents.length} residents of {name}:
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Height</Th>
            <Th>Mass</Th>
            <Th>Hair Color</Th>
            <Th>Skin Color</Th>
            <Th>Eye Color</Th>
            <Th>Birth Year</Th>
            <Th>Gender</Th>
            <Th>Homeworld</Th>
          </Tr>
        </Thead>
        <Tbody>
          {residents.map((resident: any) => {
            const {
              name: residentName,
              height,
              mass,
              hair_color,
              skin_color,
              eye_color,
              birth_year,
              gender,
              homeworld,
              url,
            } = resident;

            return (
              <Tr key={url}>
                <Td>
                  <Link href={url} isExternal>
                    {residentName}
                  </Link>
                </Td>
                <Td>{height}</Td>
                <Td>{mass}</Td>
                <Td>{hair_color}</Td>
                <Td>{skin_color}</Td>
                <Td>{eye_color}</Td>
                <Td>{birth_year}</Td>
                <Td>{gender}</Td>
                <Td>
                  <Link href={homeworld} isExternal>
                    {homeworld}
                  </Link>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
