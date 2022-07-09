import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@400;700&display=swap');
        </style>
      </Head>
      <GlobalStyle /> <Component {...pageProps} />
    </>
  );
}

export default MyApp;
