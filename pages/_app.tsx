import { Inter } from 'next/font/google';
import type { AppProps } from 'next/app'
import AppLayout from 'components/common/AppLayout';
import Globals from 'styles/Globals';

const inter = Inter({ subsets: ['latin'] });
 

const App = ({ Component, pageProps }: AppProps) => {
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


