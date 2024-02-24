import { ChakraProvider } from '@chakra-ui/react'

import Router from './routes';
import theme from './theme';
import './App.css'
import DisableTouchHighlight from './components/DisableTouchHighlight';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <DisableTouchHighlight />
      <Router />
    </ChakraProvider>
  )
}

export default App
