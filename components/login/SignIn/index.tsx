import Image from 'next/image';
import mainLogo from 'public/assets/icons/login/mainLogo.svg';
import { useEffect, useState } from 'react';
import * as S from './style';
import { useRouter } from 'next/router';
import { API } from 'pages/api/api';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import {
  loginIdState,
  nameState,
  storeIdState,
  userIdState,
  authState,
} from 'recoil/states';

interface ISignInProps {
  onSignUpClick: () => void;
}
const SignIn = ({ onSignUpClick }: ISignInProps) => {
  const [isTyped, setIsTyped] = useState(false);
  const [enteredID, setEnteredID] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [, setRefCookie] = useCookies(['refreshToken']);
  const [, setAccCookie] = useCookies(['accessToken']);
  const [storeId, setStoreId] = useRecoilState(storeIdState);
  const [userId, setUserId] = useRecoilState(userIdState);
  const [auth, setAuthStatus] = useRecoilState(authState);

  const setLoginId = useSetRecoilState(loginIdState);
  const setName = useSetRecoilState(nameState);

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
    baseURL: process.env.NEXT_PUBLIC_API_URL, // 8080 포트의 주소로 설정
    headers: {
      'Content-Type': 'application/json',
      // 다른 헤더 설정
    },
  });

  const handleSetStore = async () => {
    API.get('/api/product')
      .then(response => {
        setUserId(response.data.userId);
        setStoreId(response.data.storeId);
      })
      .catch(error => {
        console.log(error);
      });
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
        setAuthStatus(true);
        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
        console.log('Login successful', response.data);
        setAccCookie('accessToken', accessToken);
        setRefCookie('refreshToken', refreshToken);

        router.push('/home/frozen'); // '/' 페이지로 이동
      } catch (error) {
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
