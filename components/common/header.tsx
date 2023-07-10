import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
//import {NavWrapper, LogoBox, NavUl, NavLi, LogoImage} from './headerModule';이거 왜 못불러올까요,,
import logo from "../../public/favicon/favicon-192.png";

const Header = () => {

  return (
    <>
      <Head>
        <title>스톡원큐 - 재고 관리 및 다양한 기능을 한 번에</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="StockOneQ Web Page - A service that allows you to manage all your inventory in the store at once" />
        <link rel="icon" href="/favicon/favicon.png" />
        <link rel="apple-touch-icon" href="favicon/favicon-apple.png" />
        <link rel="manifest" href="manifest.webmanifest" />
      </Head>
      <nav className='nav_bar'>
        <div className='logo_box'>
          <Link href="/" aria-label="메인페이지로 이동">
            <Image role='main-link' src={logo} alt="스톡원큐 로고" width={50} height={50}></Image>
          </Link>
        </div>
        <ul className='nav_ul'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/community/Community">Community</Link></li>
          <li><Link href="/connect/Connect">Connect</Link></li>
          <li><Link href="/mypage/Mypage">MyPage</Link></li>
          <li><Link href="/mypage/Mypage">logout</Link></li>
          {/* <li><a>sign in</a></li> */}
        </ul>
      </nav>
      <style jsx>{`
        .nav_bar {
          display: flex;
          width: 100vw;
          height: 15vh;
          min-height: 50px;
          position: relative;
        }

        .nav_ul {
          display: flex;
          top: 50%;
          height: 18px;
          transform: translateY(-50%);
          position: absolute;
          display: flex;
        }

        .nav_bar li {
          font-size: 18px;
          font-weight: 600;
          top: 40%;
          margin-left: 70%;
          color: #979797;
        }

        .nav_bar li:first-child {
          margin-left: 100%;
        }


        .logo_box {
          width: 15vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .logo_box img {
          margin-left: 17vw;
          border-radius: 100px;
          user-select: none;
        }
      `}</style>
    </>
  );
};

export default Header;