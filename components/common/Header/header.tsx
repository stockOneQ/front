import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
//import {NavWrapper, LogoBox, NavUl, NavLi, LogoImage} from './headerModule';이거 왜 못불러올까요,,
import logo from "../../../public/favicon/favicon-192.png";
import menuIcon from "../../../assets/imgs/menu.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { InnerNavBar } from "./innerNavBar";

import * as H from "./headerModule";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [currentPath, setCurrentPath] = useState("");
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
    setCurrentPath(router.pathname);

    // routeChangeComplete 이벤트를 구독하여 activeLink 상태를 업데이트
    router.events.on("routeChangeComplete", handleRouteChange);
    // 컴포넌트가 언마운트될 때 routeChangeComplete 이벤트 구독을 해제, 불필요한 이벤트 구독이 남아있지 않도록
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
      <H.NavWrapper>
        <H.LogoBox>
          <Link href="/" aria-label="메인페이지로 이동">
            <Image
              role="main-link"
              src={logo}
              alt="스톡원큐 로고"
              width={50}
              height={50}
            />
          </Link>
        </H.LogoBox>
        <H.MenuBar>
          <H.NavList>
            <H.NavItem className={activeLink === "home" ? "active" : ""}>
              <Link href="/">Home</Link>
            </H.NavItem>
            <H.NavItem className={activeLink === "community" ? "active" : ""}>
              <Link href="/community">Community</Link>
            </H.NavItem>
            <H.NavItem className={activeLink === "connect" ? "active" : ""}>
              <Link href="/connect">Connect</Link>
            </H.NavItem>
            <H.NavItem className={activeLink === "myPage" ? "active" : ""}>
              <Link href="/myPage">My Page</Link>
            </H.NavItem>
            <H.NavItem className={activeLink === "logout" ? "active" : ""}>
              <Link href="/login">Logout</Link>
            </H.NavItem>
          </H.NavList>
        </H.MenuBar>
      </H.NavWrapper>
      <InnerNavBar
        navItems={[
          { label: "냉동", url: "/community" },
          { label: "냉장", url: "/" },
          { label: "상온", url: "/" },
        ]}
        currentPath={currentPath}
      />
    </>
  );
};

export default Header;
