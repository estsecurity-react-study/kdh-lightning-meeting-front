import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Script from 'next/script';

import GlobalStyles from '../styles/GlobalStyles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Script
        id="showConsole"
        dangerouslySetInnerHTML={{
          __html: `
var cssRule = "font-size:2em;";
var cssLogo1 = "color:#56d748;" + "font-size: 60px;" + "font-weight: bold;" + "letter-space:-1px;" + "font-family:'Circular-Loom'";
var cssLogo2 = "color:#black;" + "font-size: 60px;" + "font-weight: bold;" + "letter-space:-1px;" + "font-family:'Circular-Loom'";
if (window.console != undefined) {
  setTimeout(
    console.log.bind(console, "%cA%clyac", cssLogo1, cssLogo2),
    0
  );
  setTimeout(
    console.log.bind(
      console,
      "%c 1,200만명이 선택한 국민백신",
      cssRule
    ),
    0
  );
}
        `,
        }}
      />

      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default App;
