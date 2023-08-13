<<<<<<< HEAD
import { Dispatch, SetStateAction } from 'react';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import logo from 'public/favicon/favicon-192.png';
import headerNavArrow from 'public/assets/icons/header/headerNavArrow.svg';
import * as H from './style';
import { API } from 'pages/api/api';
=======
import Link from 'next/link';
import Image from 'next/image';
import logo from 'public/favicon/favicon-192.png';
import headerNavArrow from 'public/assets/icons/header/headerNavArrow.svg';
import * as H from './style';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
>>>>>>> ff4bb25 (Merge branch develop into main)

interface IHeaderProps {
  setSideBarIdx: Dispatch<SetStateAction<number>>;
}

const Header = ({ setSideBarIdx }: IHeaderProps) => {
  const router = useRouter();
  const currentPath = router.pathname;

<<<<<<< HEAD
  const [, , removeRefCookie] = useCookies(['refreshToken']);
  const [, , removeAccCookie] = useCookies(['accessToken']);
  const [, , removeFcmCookie] = useCookies(['fcmToken']);

  const [, , removeLogInUserIdCookie] = useCookies(['logInUserId']);
  const [, , removeLogInUserNameCookie] = useCookies(['logInUserName']);

  const handleLogout = async () => {
    try {
      const res = await API.post('/api/auth/logout');
      if (res.status === 204) {
        console.log('로그아웃 성공');

        /** 토큰 삭제 */
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        Cookies.remove('fcmToken');

        removeAccCookie('accessToken');
        removeRefCookie('refreshToken');
        removeFcmCookie('fcmToken');

        /** 로그인 사용자 정보 삭제 */
        removeLogInUserIdCookie('logInUserId');
        removeLogInUserNameCookie('logInUserName');

        router.push('/login');
      }
    } catch (error) {
      console.error('로그아웃 에러', error);
    }
  };

=======
>>>>>>> ff4bb25 (Merge branch develop into main)
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
<<<<<<< HEAD
              href="/community/friends/search"
=======
              href="/community/friends"
>>>>>>> ff4bb25 (Merge branch develop into main)
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
<<<<<<< HEAD
          <button onClick={handleLogout}>로그아웃</button>
=======
          <Link
            href="/login"
            onClick={() => {
              setSideBarIdx(0);
            }}
          >
            <p>로그아웃</p>
          </Link>
>>>>>>> ff4bb25 (Merge branch develop into main)
        </H.Login>
      </H.NavBar>
    </H.Header>
  );
};

export default Header;
