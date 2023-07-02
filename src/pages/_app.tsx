import type { AppProps, AppType } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from "next-auth/react"
import { Session } from 'next-auth';

const RPApp = ({ Component, pageProps } : AppProps<{ session: Session }>) => {
  return <SessionProvider session={pageProps.session}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </SessionProvider>;
};

export default RPApp;
