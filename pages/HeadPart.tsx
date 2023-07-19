import Head from 'next/head';

/** 헤드 부분 */
const HeadPart = () => {
  return (
    <Head>
      <title>스톡원큐 - 재고 관리 및 다양한 기능을 한 번에</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="StockOneQ Web Page - A service that allows you to manage all your inventory in the store at once" />
      <link rel="icon" href="/favicon/favicon.png" />
      <link rel="apple-touch-icon" href="favicon/favicon-apple.png" />
      <link rel="manifest" href="manifest.webmanifest" />
    </Head>
  );
};

export default HeadPart;