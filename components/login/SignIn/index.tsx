import Image from 'next/image';
import mainLogo from 'public/assets/icons/login/mainLogo.svg';
import { useEffect, useState } from 'react';
import * as S from './style';
import { useRouter } from 'next/router';
import { API } from 'pages/api/api';
import Cookies from 'js-cookie';
import axios from 'axios';

interface ISignInProps {
  onSignUpClick: () => void;
}
const SignIn = ({ onSignUpClick }: ISignInProps) => {
  const [isTyped, setIsTyped] = useState(false);
  const [enteredID, setEnteredID] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const idChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setEnteredID(value);
  };
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setEnteredPassword(value);
  };

  useEffect(() => {
    if (enteredID !== '' && enteredPassword !== '') {
      setIsTyped(true);
    } else {
      setIsTyped(false);
    }

    console.log(isTyped);
  }, [enteredID, enteredPassword]);

  const router = useRouter();

  const apiInstance = axios.create({
    baseURL: 'http://localhost:8080', // 8080 포트의 주소로 설정
    headers: {
      'Content-Type': 'application/json',
      // 다른 헤더 설정
    },
  });

  const handleLogout = async () => {
    try {
      // 로그아웃 API 호출
      const response = await API.post('/api/auth/logout');
      if (response.status === 204) {
        // 로그아웃 성공 시 다음 동작 수행
        console.log('로그아웃 성공');
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        Cookies.remove('fcmToken');
        // 여기에 추가적인 로직을 넣을 수 있습니다.
      }
    } catch (error) {
      console.error('로그아웃 에러', error);
    }
  };

  const handleLogin = async () => {
    if (enteredID && enteredPassword) {
      try {
        const loginData = {
          loginId: enteredID,
          password: enteredPassword,
        };

        const response = await apiInstance.post(
          '/api/auth/login',
          JSON.stringify(loginData),
        );
        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
        console.log('Login successful', response.data);
        alert('로그인 성공');

        // localStorage.setItem('accessToken', accessToken);
        // localStorage.setItem('refreshToken', refreshToken);

        Cookies.set('accessToken', accessToken);
        Cookies.set('refreshToken', refreshToken);

        router.push('/home/frozen'); // '/' 페이지로 이동
      } catch (error) {
        // 에러 처리 로직을 작성하면 됩니다.
        console.error('Login error', error);
      }
    }
  };
  return (
    <S.SignInSection>
      <S.SignInHeaderBox>
        <Image src={mainLogo} alt="main-logo" width={63.6} height={61} />
        <p>로그인</p>
      </S.SignInHeaderBox>
      <S.SignInBodyBox>
        <S.SignInInputBox>
          <input type="text" placeholder="아이디" onChange={idChangeHandler} />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={passwordChangeHandler}
          />
        </S.SignInInputBox>
        <S.SignInButton
          isTyped={isTyped}
          disabled={!isTyped}
          onClick={handleLogin}
        >
          로그인
        </S.SignInButton>
        <S.SignInButton
          isTyped={isTyped}
          disabled={!isTyped}
          onClick={handleLogout}
        >
          로그아웃
        </S.SignInButton>
      </S.SignInBodyBox>
      <S.SignInFooterBox>
        <button>아이디 찾기</button>
        <div>&nbsp;</div>
        <button>비밀번호 찾기</button>
        <div>&nbsp;</div>
        <button onClick={onSignUpClick} type="button">
          회원가입
        </button>
      </S.SignInFooterBox>
    </S.SignInSection>
  );
};

export default SignIn;
