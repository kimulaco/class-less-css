import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { AppHeader } from '../components/layout/AppHeader/'
import { AppMain } from '../components/layout/AppMain/'
import theme from '../theme'
import '../styles/variables.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <RecoilRoot>
        <AppHeader />
        <AppMain>
          <Component {...pageProps} />
        </AppMain>
      </RecoilRoot>
    </ChakraProvider>
  )
}

export default App
