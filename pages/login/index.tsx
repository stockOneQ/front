import SignIn from 'components/login/SignIn';
import Header from '../../layouts/Header';
import AgreementTerms from 'components/login/signUp/AgreementTerms';
import SignUp from 'components/login/signUp/SignUp';
import FindingInfo from 'components/login/FindingInfo';
import React, { useState } from 'react';

const LoginPage = () => {
  const [showSignUp, setShowSignUp] = useState(false); // 회원가입 화면을 보여줄지 여부를 상태로 관리합니다.

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  return (
    <>
      {showSignUp ? (
        <SignUp onSuccess={() => setShowSignUp(false)} />
      ) : (
        <SignIn onSignUpClick={handleSignUpClick} />
      )}
    </>
  );
};

export default LoginPage;
