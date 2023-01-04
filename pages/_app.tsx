import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import GlobalStyles from '../styles/GlobalStyles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={cache}>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <GlobalStyles />
        <Component {...pageProps} />
      </SWRConfig>
    </CacheProvider>
  );
};

export default App;
