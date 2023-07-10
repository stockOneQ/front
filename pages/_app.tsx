import { Inter } from 'next/font/google';
import AppLayout from 'components/common/AppLayout';
import Globals from 'styles/Globals';

const inter = Inter({ subsets: ['latin'] });

type AppProps = {
  Component: React.ElementType;
}; 

function App({ Component }: AppProps) {
  return (
    <main className={inter.className}>
      <AppLayout>
        <Component />
        <Globals />
      </AppLayout>
    </main>
  );
}
 
export default App;


