import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
//import {NavWrapper, LogoBox, NavUl, NavLi, LogoImage} from './headerModule';이거 왜 못불러올까요,,
import logo from "../../../public/favicon/favicon-192.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // URL에서 현재 경로
      const route = url === "/" ? "home" : url.split("/").slice(-1)[0];
      // 현재 경로에 기반하여 activeLink 상태를 업데이트
      setActiveLink(route);
    };

    // 페이지 로드 시에 activeLink 상태를 초기화
    setActiveLink(router.pathname === "/" ? "home" : router.pathname.split("/").slice(-1)[0]);

    // routeChangeComplete 이벤트를 구독하여 activeLink 상태를 업데이트
    router.events.on("routeChangeComplete", handleRouteChange);
    // 컴포넌트가 언마운트될 때 routeChangeComplete 이벤트 구독을 해제,  불필요한 이벤트 구독이 남아있지 않도록
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

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
        <link rel="manifest" href="manifest.webmanifest" />
      </Head>
      <nav className="nav_bar">
        <div className="logo_box">
          <a href="/" aria-label="메인페이지로 이동">
            <Image
              role="main-link"
              src={logo}
              alt="스톡원큐 로고"
              width={50}
              height={50}
            />
          </a>
        </div>
        <div className="menu_bar">
          <ul className="nav_ul">
            <li
              onClick={() => setActiveLink("home")}
              className={activeLink === "home" ? "active" : ""}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => setActiveLink("community")}
              className={activeLink === "community" ? "active" : ""}
            >
              <Link href="/community">Community</Link>
            </li>
            <li
              onClick={() => setActiveLink("connect")}
              className={activeLink === "connect" ? "active" : ""}
            >
              <Link href="/connect">Connect</Link>
            </li>
            <li
              onClick={() => setActiveLink("myPage")}
              className={activeLink === "myPage" ? "active" : ""}
            >
              <Link href="/myPage">MyPage</Link>
            </li>
            <li
              onClick={() => setActiveLink("logout")}
              className={activeLink === "logout" ? "active" : ""}
            >
              <Link href="/login">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        .nav_bar {
          display: flex;
          width: 100vw;
          height: 15vh;
          min-height: 50px;
          position: relative;
        }

        .menu_bar {
          width: 85%;
          padding-left: 3%;
        }

        .nav_ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          transform: translateY(-50%);
          position: absolute;
          width: 80%;
          top: 50%;
        }

        .nav_ul li {
          font-size: 18px;
          font-weight: 600;
          color: #979797;
          flex: 0 0 20%;
        }

        .nav_ul li.active {
          color: #000000;
          /* Add any other styles you want to apply to the active link */
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