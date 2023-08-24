import { Roboto } from 'next/font/google';
import type { AppProps } from 'next/app';
import AppLayout from 'layouts/AppLayout';
import Globals from 'styles/Globals';
import Login from './login';
import Head from 'next/head';
import { CookiesProvider } from 'react-cookie';

import { RecoilRoot } from 'recoil';
import AgreementPage from './login/agreement';
import SignUpPage from './login/sign-up';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>스톡원큐 - 재고 관리 및 다양한 기능을 한 번에</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="StockOneQ Web Page - A service that allows you to manage all your inventory in the store at once"
        />
        <link rel="icon" href="/favicon/favicon.png" />
        <link rel="apple-touch-icon" href="favicon/favicon-apple.png" />
        <link rel="/manifest" href="manifest.webmanifest" />
      </Head>
      <RecoilRoot>
        <CookiesProvider>
          {Component === Login ||
          Component === AgreementPage ||
          Component === SignUpPage ? (
            <main className={roboto.className}>
              <Component {...pageProps} />
              <Globals />
            </main>
          ) : (
            <main className={roboto.className}>
              <Globals />
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            </main>
          )}
        </CookiesProvider>
      </RecoilRoot>
    </>
  );
};

export default App;
