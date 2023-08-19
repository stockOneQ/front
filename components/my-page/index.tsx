// import React, { useState } from 'react';
// import Image from 'next/image';
// import mainLogo from 'public/assets/icons/login/mainLogo.svg';
// import * as S from './style';
// import SignUp from 'components/login/signUp/SignUp';

// const MypageEdit = () => {
//   const [showSignup, setShowSignup] = useState(false);

//   const handleSearchButtonClick = () => {
//     setShowSignup(!showSignup);
//   };

//   return (
//     <>
//       {showSignup ? (
//         <SignUp />
//       ) : (
//         <S.EditSection>
//           <Image src={mainLogo} alt="main-logo" width={67.5} height={65} />
//           <S.EditUser>스톡원큐 회원정보</S.EditUser>
//           <S.Address>
//             <S.RainbowInput placeholder="비밀번호 입력" />
//             <S.SearchButton onClick={handleSearchButtonClick}>
//               확인
//             </S.SearchButton>
//           </S.Address>
//         </S.EditSection>
//       )}
//     </>
//   );
// };

// export default MypageEdit;
