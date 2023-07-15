import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import logo from "public/favicon/favicon-192.png";
import * as H from "./HeaderModule";

const Header = () => {
  const [click, setClick] = useState("home");

  return (
    <H.Header>
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
      <H.NavBar>
        <H.NavList>
          <H.NavItem className={click === "home" ? "active" : ""}>
            <Link href="/" onClick={() => setClick("home")}>
              Home
            </Link>
          </H.NavItem>
          <H.NavItem className={click === "community" ? "active" : ""}>
            <Link
              href="/community/friends"
              onClick={() => setClick("community")}
            >
              Community
            </Link>
          </H.NavItem>
          <H.NavItem className={click === "connect" ? "active" : ""}>
            <Link href="/connect/data" onClick={() => setClick("connect")}>
              Connect
            </Link>
          </H.NavItem>
          <H.NavItem className={click === "myPage" ? "active" : ""}>
            <Link href="/myPage" onClick={() => setClick("myPage")}>
              My Page
            </Link>
          </H.NavItem>
          <H.NavItem className={click === "logout" ? "active" : ""}>
            <Link href="/login" onClick={() => setClick("logout")}>
              로그아웃
            </Link>
          </H.NavItem>
        </H.NavList>
      </H.NavBar>
    </H.Header>
  );
};

export default Header;
