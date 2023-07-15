import Link from "next/link";
import Image from "next/image";
import logo from "public/favicon/favicon-192.png";
import * as H from './HeaderModule';

const Header = ({ activeLink }) => {
  return (
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
  );
};

export default Header;
