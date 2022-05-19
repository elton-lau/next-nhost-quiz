import '../styles/globals.css'
import { NhostNextProvider, NhostClient } from '@nhost/nextjs'
import { NhostApolloProvider } from '@nhost/react-apollo'
import { MantineProvider } from '@mantine/core';
import AppContainer from '@/components/AppContainer';

const nhost = new NhostClient({
  backendUrl: process.env.NEXT_PUBLIC_NHOST_BACKEND
})


function MyApp({ Component, pageProps }) {

  return <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
    <NhostApolloProvider nhost={nhost}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </MantineProvider>
    </NhostApolloProvider>
  </NhostNextProvider>
}

export default MyApp

