import Link from 'next/link';
import Image from 'next/image';
import logo from 'public/favicon/favicon-192.png';
import headerNavArrow from 'public/assets/icons/header/headerNavArrow.svg';
import * as H from './style';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

import { API } from 'pages/api/api';

interface IHeaderProps {
  setSideBarIdx: Dispatch<SetStateAction<number>>;
}

const Header = ({ setSideBarIdx }: IHeaderProps) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [, , removeRefCookie] = useCookies(['refreshToken']);
  const [accCookies, , removeAccCookie] = useCookies(['accessToken']);
  const [, , removeFcmCookie] = useCookies(['fcmToken']);

  const handleLogin = () => {
    router.push('/login');
  };

  const handleLogout = async () => {
    try {
      const res = await API.post('/api/auth/logout');
      if (res.status === 204) {
        // 로그아웃 성공 시 다음 동작 수행
        console.log('로그아웃 성공');

        let accessToken = Cookies.get('accessToken');
        let refreshToken = Cookies.get('refreshToken');
        let fcmToken = Cookies.get('fcmToken');

        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        Cookies.remove('fcmToken');

        removeAccCookie('accessToken');
        removeRefCookie('refreshToken');
        removeFcmCookie('fcmToken');

        router.push('/login');
      }
    } catch (error) {
      console.error('로그아웃 에러', error);
    }
  };

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
          <H.NavItem
            className={
              currentPath.startsWith('/home') || currentPath === '/'
                ? 'active'
                : ''
            }
          >
            <Link
              href="/home/frozen"
              onClick={() => {
                setSideBarIdx(0);
              }}
            >
              <p>Home</p>
              <H.NavArrowBox>
                <Image
                  src={headerNavArrow}
                  alt="header-hover-arrow-icon"
                  width={9.5}
                  height={9.8}
                />
              </H.NavArrowBox>
            </Link>
          </H.NavItem>
          <H.NavItem
            className={currentPath.startsWith('/community') ? 'active' : ''}
          >
            <Link
              href="/community/friends/search"
              onClick={() => {
                setSideBarIdx(0);
              }}
            >
              <p>Community</p>
              <H.NavArrowBox>
                <Image
                  src={headerNavArrow}
                  alt="header-hover-arrow-icon"
                  width={9.5}
                  height={9.8}
                />
              </H.NavArrowBox>
            </Link>
          </H.NavItem>
          <H.NavItem
            className={currentPath.startsWith('/connect') ? 'active' : ''}
          >
            <Link
              href="/connect/data"
              onClick={() => {
                setSideBarIdx(0);
              }}
            >
              <p>Connect</p>
              <H.NavArrowBox>
                <Image
                  src={headerNavArrow}
                  alt="header-hover-arrow-icon"
                  width={9.5}
                  height={9.8}
                />
              </H.NavArrowBox>
            </Link>
          </H.NavItem>
          <H.NavItem
            className={currentPath.startsWith('/my-page') ? 'active' : ''}
          >
            <Link
              href="/my-page/edit"
              onClick={() => {
                setSideBarIdx(0);
              }}
            >
              <p>My Page</p>
              <H.NavArrowBox>
                <Image
                  src={headerNavArrow}
                  alt="header-hover-arrow-icon"
                  width={9.5}
                  height={9.8}
                />
              </H.NavArrowBox>
            </Link>
          </H.NavItem>
        </H.NavList>

        <H.Login className={currentPath.startsWith('/login') ? 'active' : ''}>
          <button onClick={accCookies ? handleLogout : handleLogin}>
            {accCookies !== undefined ? '로그아웃' : '로그인'}
          </button>
        </H.Login>
      </H.NavBar>
    </H.Header>
  );
};

export default Header;
