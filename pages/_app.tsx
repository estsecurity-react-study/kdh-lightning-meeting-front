import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import { Noto_Sans_KR } from '@next/font/google';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import 'twin.macro';

import GlobalStyles from '../styles/GlobalStyles';

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '700', '900'],
  subsets: ['korean', 'latin'],
  variable: '--font-noto-sans-kr',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <CacheProvider value={cache}>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <GlobalStyles />
          <div className={`${notoSansKr.variable}`} tw="font-sans">
            <Component {...pageProps} />
          </div>
        </SWRConfig>
      </CacheProvider>
    </>
  );
};

export default App;
