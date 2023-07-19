import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google';
import Globals from 'styles/Globals';

const inter = Inter({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
      <Globals />
    </main>
  )
}

export default App;
