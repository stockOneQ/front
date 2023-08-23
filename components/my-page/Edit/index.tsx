//com/my-page/Edit/index
import React, { useState } from 'react';
import Image from 'next/image';
import mainLogo from 'public/assets/icons/login/mainLogo.svg';
import * as S from './style';
import router, { useRouter } from 'next/router';
import SignUp from 'components/login/signUp/SignUp';
import MyInforPage from '../Myinformation';

const MypageEdit = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleSearchButtonClick = () => {
    // MyinforPage 컴포넌트를 렌더링하는 로직 추가
    setShowSignup(true);
  };

  return (
    <>
      {showSignup ? (
        <MyInforPage />
      ) : (
        <S.EditSection>
          <Image src={mainLogo} alt="main-logo" width={67.5} height={65} />
          <S.EditUser>스톡원큐 회원정보</S.EditUser>
          <S.Address>
            <S.RainbowInput placeholder="비밀번호 입력" />
            <S.SearchButton onClick={handleSearchButtonClick}>
              확인
            </S.SearchButton>
          </S.Address>
        </S.EditSection>
      )}
    </>
  );
};

export default MypageEdit;
