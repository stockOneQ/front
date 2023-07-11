import { Inter } from 'next/font/google';
import type { AppProps } from 'next/app';
import AppLayout from 'components/common/AppLayout';
import Globals from 'styles/Globals';
import Login from './login/Login';

const inter = Inter({ subsets: ['latin'] });
 

const App = ({ Component, pageProps }: AppProps) => {
  if (Component === Login) {
    return (
      <main className={inter.className}>
        <Component {...pageProps}/>
        <Globals />
      </main>
    );
  }

  return (
    <main className={inter.className}>
      <AppLayout>
        <Component {...pageProps}/>
        <Globals />
      </AppLayout>
     
    </main>
  )
}

 
export default App;


