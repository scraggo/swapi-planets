import { Container, extendTheme, ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Routes from './Routes';

const colors = {
  // brand: {
  //   900: '#1a365d',
  //   800: '#153e75',
  //   700: '#2a69ac',
  // },
};

const styles = {
  global: {
    // styles for the `body`
    body: {
      bg: 'black', // gray.400
      color: 'white',
    },
    // styles for the `a`
    a: {
      color: 'gray.100',
      _hover: {
        textDecoration: 'underline',
      },
    },
  },
};

const theme = extendTheme({ colors, styles });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Container maxWidth="1200px">
          <Routes />
        </Container>
      </div>
    </ChakraProvider>
  );
}

export default App;
