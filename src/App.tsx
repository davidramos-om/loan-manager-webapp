import { ChakraProvider } from '@chakra-ui/react'

import theme from './theme';
import './App.css'
import { CallToActionWithAnnotation } from './components/WelcomeCardCTA';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <CallToActionWithAnnotation />
    </ChakraProvider>
  )
}

export default App
