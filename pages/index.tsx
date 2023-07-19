<<<<<<< HEAD
import MainPage from 'components/main/index';
import React, { useEffect } from 'react';
import { authState } from '../recoil/states';
import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
import Cookies from 'js-cookie';
import { API } from './api/api';
import { useRecoilValue } from 'recoil';
=======
import HeadPart from './HeadPart';

>>>>>>> 4a75e27 (Revert "fix(global) : 배경화면 경로 설정")
const Home = () => {
  // 브라우저에 알림 권한을 요청합니다.

  return (
    <>
<<<<<<< HEAD
      <MainPage />
=======
      <HeadPart />
      <h1>hi</h1>
>>>>>>> 4a75e27 (Revert "fix(global) : 배경화면 경로 설정")
    </>
  )
}

export default Home;