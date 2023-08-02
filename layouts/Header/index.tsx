import Link from "next/link";
import Image from "next/image";
import logo from "public/favicon/favicon-192.png";
import * as H from "./style";
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

interface IHeaderProps {
  setSideBarIdx: Dispatch<SetStateAction<number>>;
}

const Header = ({ setSideBarIdx }: IHeaderProps) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <H.Header>
      <H.LogoBox>
        <Link href="/home/frozen" aria-label="메인페이지로 이동">
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
          <H.NavItem className={(currentPath.startsWith('/home') || currentPath === '/') ? 'active' : ''}>
            <Link href="/home/frozen" onClick={() => { setSideBarIdx(0)} }>
              Home
            </Link>
          </H.NavItem>
          <H.NavItem className={currentPath.startsWith('/community') ? 'active' : ''}>
            <Link href="/community/friends" onClick={() => { setSideBarIdx(0)} }>
              Community
            </Link>
          </H.NavItem>
          <H.NavItem className={currentPath.startsWith('/connect') ? 'active' : ''}>
            <Link href="/connect/data" onClick={() => { setSideBarIdx(0)} }>
              Connect
            </Link>
          </H.NavItem>
          <H.NavItem className={currentPath.startsWith('/my-page') ? 'active' : ''}>
            <Link href="/my-page/edit" onClick={() => { setSideBarIdx(0)} }>
              My Page
            </Link>
          </H.NavItem>
          <H.NavItem className={currentPath.startsWith('/login') ? 'active' : ''}>
            <Link href="/login" onClick={() => { setSideBarIdx(0)} }>
              로그아웃
            </Link>
          </H.NavItem>
        </H.NavList>
      </H.NavBar>
    </H.Header>
  );
};

export default Header;