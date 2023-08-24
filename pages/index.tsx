import MainPage from 'components/main/index';
import React, { useEffect } from 'react';
import { authState } from '../recoil/states';
import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
import Cookies from 'js-cookie';
import { API } from './api/api';
import { useRecoilValue } from 'recoil';
const Home = () => {
  // 브라우저에 알림 권한을 요청합니다.

  return (
    <>
      <MainPage />
    </>
  );
};

export default Home;
