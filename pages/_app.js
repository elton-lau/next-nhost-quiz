import '../styles/globals.css'
import { NhostNextProvider, NhostClient } from '@nhost/nextjs'
import { NhostApolloProvider } from '@nhost/react-apollo'
import { MantineProvider } from '@mantine/core';

const nhost = new NhostClient({
  backendUrl: process.env.NEXT_PUBLIC_NHOST_BACKEND
})


function MyApp({ Component, pageProps }) {

  return <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
    <NhostApolloProvider nhost={nhost}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </NhostApolloProvider>
  </NhostNextProvider>
}

export default MyApp

