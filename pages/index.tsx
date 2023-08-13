import MainPage from 'components/main/index';
import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
import Cookies from 'js-cookie';
import { API } from './api/api';
const Home = () => {
  // 브라우저에 알림 권한을 요청합니다.
  const onMessageFCM = async () => {
    // 브라우저에 알림 권한을 요청합니다.
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') return;

    const firebaseApp = initializeApp({
      apiKey: 'AIzaSyDJrLnEK1zsvrbwvP9LsTQVO7qRd_3KP6w',
      authDomain: 'stockoneq-fcm.firebaseapp.com',
      projectId: 'stockoneq-fcm',
      storageBucket: 'stockoneq-fcm.appspot.com',
      messagingSenderId: '935948153821',
      appId: '1:935948153821:web:fb6cad88cf6ac72849bc34',
    });

    const messaging = getMessaging(firebaseApp);

    // 이곳 vapidKey 값으로 아까 토큰에서 사용한다고 했던 인증서 키 값을 넣어주세요.
    getToken(messaging, {
      vapidKey:
        'BGzi_RmmFYTwxC4-WqN5JLBw2wWnZrbNXCJLizy6Sh6kd_Pz7FYIDs6NBI26De0aDanU2_Wxpq87EGjmx-9XXns',
    })
      .then(currentToken => {
        if (currentToken) {
          // 정상적으로 토큰이 발급되면 콘솔에 출력합니다.
          console.log(currentToken); //이것도 쿠키에 저장
          Cookies.set('fcmToken', currentToken);

          sendFCMTokenToServer(currentToken);
        } else {
          console.log(
            'No registration token available. Request permission to generate one.',
          );
        }
      })
      .catch(err => {
        console.log('An error occurred while retrieving token. ', err);
      });

    // 메세지가 수신되면 역시 콘솔에 출력합니다.
    onMessage(messaging, payload => {
      console.log('Message received. ', payload);
    });
  };

  const sendFCMTokenToServer = async fcmToken => {
    try {
      // API를 호출하여 FCM 토큰을 서버로 전송
      const response = await API.post('/api/auth/fcm', { fcmToken });
      if (response.status === 200) {
        console.log('FCM 토큰 전송 성공');
      }
      if (response.status === 200) {
        console.log('FCM 토큰 전송 성공');
      }
    } catch (error) {
      console.error('FCM 토큰 전송 에러', error);
    }
  };

  useEffect(() => {
    onMessageFCM();
  }, []);

  return (
    <>
      <MainPage />
    </>
  );
};

export default Home;
