//comp/main/Frozen/index.tsx
import styled from 'styled-components';
import Ingredients from '../Ingredients/index';
import { useRecoilValue } from 'recoil';
import { mainPostListState } from '../../../recoil/states';
<<<<<<< HEAD
import { initializeApp } from 'firebase/app';
import {
  getMessaging,
  onMessage,
  getToken,
  Messaging,
} from 'firebase/messaging';
import Cookies from 'js-cookie';
import { API } from '../../../pages/api/api';
import { useEffect, useState } from 'react';
import mainLogo from 'public/assets/icons/login/mainLogo.svg';
import cafe from 'public/assets/imgs/cafe.jpg';
=======
>>>>>>> ff4bb25 (Merge branch develop into main)

const MainSection = styled.section`
  gap: 7.1rem;
`;
const FrozenPageComp = () => {
<<<<<<< HEAD
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
      if (payload?.notification?.title && payload?.notification?.body) {
        // payload에 알림 데이터가 있는 경우
        const title = payload.notification.title;
        const body = payload.notification.body;

        // 알림 띄우기 등의 작업 수행
        if (Notification.permission === 'granted') {
          const options = {
            body: body,
            image: mainLogo, // 알림에 표시될 아이콘 이미지 경로
            icon: mainLogo,
          };
          new Notification(title, options);
        } else {
          console.log('Notification permission is not granted.');
        }
      } else {
        // 알림 데이터가 없는 경우
        console.log('Received payload without notification data:', payload);
      }
    });
  };

  const sendFCMTokenToServer = async (fcmToken: string) => {
    try {
      // API를 호출하여 FCM 토큰을 서버로 전송
      const response = await API.post('/api/auth/fcm', { fcmToken });
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

=======
>>>>>>> ff4bb25 (Merge branch develop into main)
  const postList = useRecoilValue(mainPostListState);
  const productsToShow = postList.filter(
    product => product.storageMethod === '냉동',
  );

  return (
    <MainSection>
<<<<<<< HEAD
      <Ingredients storageMethodFilter="냉동" />
=======
      <Ingredients productsToShow={productsToShow} storageMethodFilter="냉동" />
>>>>>>> ff4bb25 (Merge branch develop into main)
    </MainSection>
  );
};

export default FrozenPageComp;
