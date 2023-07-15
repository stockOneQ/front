import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import AppLayout from "layouts/AppLayout";
import Globals from "styles/Globals";
import Login from "./login";

const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return Component === Login ? (
    <main className={inter.className}>
      <Component {...pageProps} />
      <Globals />
    </main>
  ) : (
    <main className={inter.className}>
      <Globals />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </main>
  );
};

export default App;
