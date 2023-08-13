import Image from 'next/image';
import mainLogo from 'public/assets/icons/login/mainLogo.svg';
import { useEffect, useState } from 'react';
import * as S from './style';

/** 로그인 초기 화면 */
const SignIn = () => {
  const [isTyped, setIsTyped] = useState(false);
  const [enteredID, setEnteredID] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const idChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEnteredID(e.target.value);
  }
  const passwordChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEnteredPassword(e.target.value);
  }

  useEffect(() => {
    if (enteredID !== '' && enteredPassword !== '') {
      setIsTyped(true);
    } else {
      setIsTyped(false);
    }
    
    console.log(isTyped);
    
  }, [enteredID, enteredPassword])

  return (
    <S.SignInSection>
      <S.SignInHeaderBox>
        <Image src={mainLogo} alt="main-logo" width={63.6} height={61} />
        <p>로그인</p>
      </S.SignInHeaderBox>
      <S.SignInBodyBox>
        <S.SignInInputBox>
          <input type="text" placeholder="아이디"  onChange={idChangeHandler} />
          <input type="password" placeholder="비밀번호" onChange={passwordChangeHandler} />
        </S.SignInInputBox>
        <S.SignInButton isTyped={isTyped} disabled={!isTyped} onClick={() => {console.log(123123);
        }}>로그인</S.SignInButton>
      </S.SignInBodyBox>
      <S.SignInFooterBox>
        <button>아이디 찾기</button>
        <div>&nbsp;</div>
        <button>비밀번호 찾기</button>
        <div>&nbsp;</div>
        <button>회원가입</button>
      </S.SignInFooterBox>
    </S.SignInSection>
  );
};

export default SignIn;