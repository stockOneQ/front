import mainLogo from 'public/assets/icons/login/mainLogo.svg';
import Image from 'next/image';
import presidentActive from 'public/assets/icons/login/presidentActive.svg';
import presidentInactive from 'public/assets/icons/login/presidentInactive.svg';
import employeeActive from 'public/assets/icons/login/employeeActive.svg';
import employeeInactive from 'public/assets/icons/login/employeeInactive.svg';
import supervisorActive from 'public/assets/icons/login/supervisorActive.svg';
import supervisorInactive from 'public/assets/icons/login/supervisorInactive.svg';
import CancelBtn from 'components/common/button/CancelBtn';
import RejectBtn from 'components/common/button/RejectBtn';
import NameInput from 'components/common/loginInput/NameInput';
import BirthInput from 'components/common/loginInput/BirthInput';
import EmailInput from 'components/common/loginInput/EmailInput';
import DigitInput from 'components/common/loginInput/DigitInput';
import IDInput from 'components/common/loginInput/IDInput';
import * as S from 'components/common/loginInput/style';
import * as SS from './style';
import { API } from 'pages/api/api';
import { useState } from 'react';
import axios from 'axios';

interface ISignUpProps {
  onSuccess: () => void;
}
const SignUp = ({ onSuccess }: ISignUpProps) => {
  const [name, setName] = useState('이가영');
  const [birthYear, setBirthYear] = useState('2001');
  const [birthMonth, setBirthMonth] = useState('01');
  const [birthDay, setBirthDay] = useState('01');

  const [phonePrefix, setPhonePrefix] = useState('010');
  const [phoneFirstPart, setPhoneFirstPart] = useState('4708');
  const [phoneSecondPart, setPhoneSecondPart] = useState('7703');

  const [emailFirstPart, setEmailFirstPart] = useState('LKY062');
  const [emailSecondPart, setEmailSecondPart] = useState('naver');
  const [emailThirdPart, setEmailThirdPart] = useState('com');

  const [loginId, setLoginId] = useState('lky062');
  const [password, setPassword] = useState('abc123!');
  const [storeName, setStoreName] = useState('스타벅스광화문');
  const [storeSector, setStoreSector] = useState('카페');
  const [storeAddress, setStoreAddress] = useState('서울시중구');

  const apiInstance = axios.create({
    baseURL: 'http://localhost:8080', // 8080 포트의 주소로 설정
    headers: {
      'Content-Type': 'application/json',
      // 다른 헤더 설정
    },
  });

  const handleSignUp = async () => {
    const userData = {
      name: name,
      birth: `${birthYear}-${birthMonth}-${birthDay}`,
      email: `${emailFirstPart}@${emailSecondPart}.${emailThirdPart}`,
      loginId: loginId,
      password: password,
      phoneNumber: `${phonePrefix}${phoneFirstPart}${phoneSecondPart}`,
      storeName: storeName,
      storeSector: storeSector,
      storeAddress: storeAddress,
    };
    try {
      const response = await apiInstance.post(
        '/api/user/sign-up/manager',
        JSON.stringify(userData),
      );
      if (response.status === 200) {
        // 성공적으로 회원 가입을 처리한 경우에 대한 로직을 여기에 작성합니다.
        alert('회원가입성공');
        onSuccess();
        console.log('회원 가입 성공');
      } else {
        // 실패한 경우에 대한 로직을 여기에 작성합니다.
        console.error('회원 가입 실패');
      }
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
    }
  };

  return (
    <SS.SignUpBox>
      <SS.SignUpHeaderBox>
        <Image src={mainLogo} alt="main-logo" width={67.5} height={65} />
        <p>스톡원큐 회원가입</p>
      </SS.SignUpHeaderBox>
      <SS.SignUpForm>
        <div>
          <S.InputRow1Box>
            <S.SignUpInputBox>
              <S.SignUpLabel>이름</S.SignUpLabel>
              <S.SignUpInput
                value={name}
                width="18.3rem"
                type="text"
                id="name"
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setName((e.target as HTMLInputElement).value)
                }
              />
            </S.SignUpInputBox>
            <S.SignUpInputBox>
              <S.SignUpLabel>생년월일</S.SignUpLabel>
              <SS.BirthInputBox>
                <S.SignUpInput
                  width="9.1rem"
                  type="text"
                  id="birthYear"
                  placeholder="YYYY"
                  value={birthYear}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setBirthYear((e.target as HTMLInputElement).value)
                  }
                />
                <S.SignUpInput
                  width="7.1rem"
                  type="text"
                  placeholder="MM"
                  value={birthMonth}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setBirthMonth((e.target as HTMLInputElement).value)
                  }
                />
                <S.SignUpInput
                  width="7.1rem"
                  type="text"
                  placeholder="DD"
                  value={birthDay}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setBirthDay((e.target as HTMLInputElement).value)
                  }
                />
              </SS.BirthInputBox>
            </S.SignUpInputBox>
          </S.InputRow1Box>

          <S.InputRow2Box>
            <S.SignUpLabel>E-mail</S.SignUpLabel>
            <SS.EmailInputBox>
              <S.SignUpInput
                width="18.3rem"
                type="text"
                placeholder="example"
                value={emailFirstPart}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setEmailFirstPart((e.target as HTMLInputElement).value)
                }
              />
              <p>@</p>
              <S.SignUpInput
                width="18.3rem"
                type="text"
                placeholder="domain"
                value={emailSecondPart}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setEmailSecondPart((e.target as HTMLInputElement).value)
                }
              />
              <S.SignUpInput
                width="18.3rem"
                type="text"
                placeholder="com"
                value={emailThirdPart}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setEmailThirdPart((e.target as HTMLInputElement).value)
                }
              />
            </SS.EmailInputBox>
          </S.InputRow2Box>

          <S.InputRow2Box>
            <S.SignUpLabel>전화번호</S.SignUpLabel>
            <SS.DigitInputBox>
              <S.SignUpInput
                width="7.1rem"
                type="text"
                id="digitPrefix"
                placeholder="010"
                value={phonePrefix}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setPhonePrefix((e.target as HTMLInputElement).value)
                }
              />
              <S.SignUpInput
                width="9.2rem"
                type="text"
                placeholder="0000"
                value={phoneFirstPart}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setPhoneFirstPart((e.target as HTMLInputElement).value)
                }
              />
              <S.SignUpInput
                width="9.2rem"
                type="text"
                placeholder="0000"
                value={phoneSecondPart}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setPhoneSecondPart((e.target as HTMLInputElement).value)
                }
              />
            </SS.DigitInputBox>
          </S.InputRow2Box>

          <S.SignUpInputBox>
            <S.SignUpLabel>아이디</S.SignUpLabel>
            <S.SignUpInput
              value={loginId}
              width="18.3rem"
              type="text"
              id="name"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setLoginId((e.target as HTMLInputElement).value)
              }
            />
          </S.SignUpInputBox>
          <S.SignUpInputBox>
            <S.SignUpLabel>비밀번호</S.SignUpLabel>
            <S.SignUpInput
              value={password}
              width="18.3rem"
              type="text"
              id="name"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setPassword((e.target as HTMLInputElement).value)
              }
            />
          </S.SignUpInputBox>
          {/* <S.InputRow2Box>
            <SS.PwInputBox>
              <S.SignUpLabel htmlFor="password">비밀번호</S.SignUpLabel>
              <p>6-20자 영문, 숫자, 특수문자 사용</p>
            </SS.PwInputBox>
            <S.SignUpInput width="27.4rem" type="password" id="password" />
          </S.InputRow2Box> */}
          {/* <S.InputRow2Box>
            <S.SignUpLabel htmlFor="passwordCheck">비밀번호 확인</S.SignUpLabel>
            <S.SignUpInput width="27.4rem" type="password" id="passwordCheck" />
          </S.InputRow2Box> */}
          {/* <S.InputRow3Box>
            <S.SignUpLabel>사용자 권한</S.SignUpLabel>
            <SS.AuthBox>
              <SS.AuthImgBox>
                <Image
                  src={presidentActive}
                  alt="select_user_type_icon"
                  width={29}
                  height={40}
                />
                <p>사장님</p>
              </SS.AuthImgBox>
              <SS.AuthImgBox>
                <Image
                  src={employeeActive}
                  alt="select_user_type_icon"
                  width={29}
                  height={40}
                />
                <p>아르바이트 생</p>
              </SS.AuthImgBox>
              <SS.AuthImgBox>
                <Image
                  src={supervisorActive}
                  alt="select_user_type_icon"
                  width={29}
                  height={40}
                />
                <p>슈퍼바이저</p>
              </SS.AuthImgBox>
            </SS.AuthBox>
          </S.InputRow3Box> */}
          <S.InputRow2Box>
            <S.SignUpLabel>매장 정보</S.SignUpLabel>
            <S.SignUpInput
              value={storeName}
              width="27.4rem"
              type="text"
              id="store"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setStoreName((e.target as HTMLInputElement).value)
              }
            />
          </S.InputRow2Box>
          <S.InputRow2Box>
            <S.SignUpLabel>매장 분류</S.SignUpLabel>
            <S.SignUpInput
              value={storeSector}
              width="27.4rem"
              type="text"
              id="store"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setStoreSector((e.target as HTMLInputElement).value)
              }
            />
          </S.InputRow2Box>
          <S.InputRow2Box>
            <S.SignUpLabel>주소</S.SignUpLabel>
            <SS.AddrInputBox>
              <S.SignUpInput
                width="16.2rem"
                placeholderLocation="left"
                value={storeAddress}
                type="text"
                id="addr"
                placeholder="우편번호"
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setStoreAddress((e.target as HTMLInputElement).value)
                }
              />
              <button>주소검색</button>
            </SS.AddrInputBox>
            {/* <S.SignUpInput
              width="34.5rem"
              placeholderLocation="left"
              type="text"
              placeholder="기본주소"
            />
            <S.SignUpInput
              width="34.5rem"
              placeholderLocation="left"
              type="text"
              placeholder="상세주소"
            /> */}
          </S.InputRow2Box>
        </div>
        <SS.SignUpBtnBox>
          <CancelBtn
            width="20.2rem"
            height="11rem"
            font="2.4rem"
            label="회원가입"
            disabled={false}
            onClick={handleSignUp}
          />
          <RejectBtn
            width="20.2rem"
            height="11rem"
            font="2.4rem"
            label="취소"
          />
        </SS.SignUpBtnBox>
      </SS.SignUpForm>
    </SS.SignUpBox>
  );
};

export default SignUp;
