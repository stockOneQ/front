//com/my-page/MyinforMmation/index
import mainLogo from 'public/assets/icons/login/mainLogo.svg';
import React, { useEffect } from 'react';
import Image from 'next/image';
import CancelBtn from 'components/common/button/CancelBtn';
import RejectBtn from 'components/common/button/RejectBtn';
import * as S from 'components/common/loginInput/style';
import * as SS from './style';
import { API } from 'pages/api/api';
import { useState } from 'react';
import axios from 'axios';

interface UserInfo {
  id: number;
  email: string;
  loginId: string;
  name: string;
  birth: string;
  phoneNumber: string;
  role: string;
  storeName: string;
  storeCode: string;
  storeAddress: string;
  companyName: string | null;
}

const MyInforPage = () => {
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');

  const [phonePrefix, setPhonePrefix] = useState('');
  const [phoneFirstPart, setPhoneFirstPart] = useState('');
  const [phoneSecondPart, setPhoneSecondPart] = useState('');

  const [emailFirstPart, setEmailFirstPart] = useState('');
  const [emailSecondPart, setEmailSecondPart] = useState('');
  const [emailThirdPart, setEmailThirdPart] = useState('');

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [storeName, setStoreName] = useState('');
  const [storeSector, setStoreSector] = useState('');
  const [storeAddress, setStoreAddress] = useState('');

  const [fetchedUserInfo, setFetchedUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    API.get('/api/user/information')
      .then(response => {
        console.log(response);
        const userInfoFromAPI: UserInfo = response.data;
        setFetchedUserInfo(userInfoFromAPI);
      })
      .catch(error => {
        console.error('Error fetching user information:', error);
      });
  }, []);

  return (
    <SS.SignUpBox>
      <SS.SignUpHeaderBox>
        <Image src={mainLogo} alt="main-logo" width={67.5} height={65} />
        <p>스톡원큐 회원정보</p>
      </SS.SignUpHeaderBox>
      <SS.SignUpForm>
        <div>
          <S.InputRow1Box>
            <S.SignUpInputBox>
              <S.SignUpLabel>이름</S.SignUpLabel>
              <S.SignUpInput
                value={fetchedUserInfo?.name || name}
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
                  value={
                    fetchedUserInfo?.birth
                      ? fetchedUserInfo.birth.split('-')[0] // Extract year from birth
                      : birthYear
                  }
                  width="9.1rem"
                  type="text"
                  id="birthYear"
                  placeholder="YYYY"
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setBirthYear((e.target as HTMLInputElement).value)
                  }
                />
                <S.SignUpInput
                  width="7.1rem"
                  type="text"
                  placeholder="MM"
                  value={
                    fetchedUserInfo?.birth
                      ? fetchedUserInfo.birth.split('-')[1] // Extract month from birth
                      : birthMonth
                  }
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setBirthMonth((e.target as HTMLInputElement).value)
                  }
                />
                <S.SignUpInput
                  width="7.1rem"
                  type="text"
                  placeholder="DD"
                  value={
                    fetchedUserInfo?.birth
                      ? fetchedUserInfo.birth.split('-')[2] // Extract day from birth
                      : birthDay
                  }
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
                value={
                  fetchedUserInfo?.email
                    ? fetchedUserInfo.email.split('@')[0]
                    : ''
                }
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setEmailFirstPart((e.target as HTMLInputElement).value)
                }
              />
              <p>@</p>
              <S.SignUpInput
                width="18.3rem"
                type="text"
                placeholder="domain"
                value={
                  fetchedUserInfo?.email
                    ? fetchedUserInfo.email.split('@')[1].split('.')[0]
                    : emailSecondPart
                }
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setEmailSecondPart((e.target as HTMLInputElement).value)
                }
              />
              <S.SignUpInput
                width="18.3rem"
                type="text"
                placeholder="com"
                value={
                  fetchedUserInfo?.email
                    ? fetchedUserInfo.email.split('@')[1].split('.')[1]
                    : emailThirdPart
                }
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
                value={
                  fetchedUserInfo?.phoneNumber
                    ? fetchedUserInfo.phoneNumber.split('-')[0]
                    : ''
                }
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setPhonePrefix((e.target as HTMLInputElement).value)
                }
              />
              <S.SignUpInput
                width="9.2rem"
                type="text"
                placeholder="0000"
                value={
                  fetchedUserInfo?.phoneNumber
                    ? fetchedUserInfo.phoneNumber.split('-')[1]
                    : phoneFirstPart
                }
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setPhoneFirstPart((e.target as HTMLInputElement).value)
                }
              />
              <S.SignUpInput
                width="9.2rem"
                type="text"
                placeholder="0000"
                value={
                  fetchedUserInfo?.phoneNumber
                    ? fetchedUserInfo.phoneNumber.split('-')[2]
                    : phoneSecondPart
                }
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setPhoneSecondPart((e.target as HTMLInputElement).value)
                }
              />
            </SS.DigitInputBox>
          </S.InputRow2Box>

          <S.SignUpInputBox>
            <S.SignUpLabel>아이디</S.SignUpLabel>
            <S.SignUpInput
              value={fetchedUserInfo?.loginId || ''}
              width="18.3rem"
              type="text"
              id="name"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setLoginId((e.target as HTMLInputElement).value)
              }
            />
          </S.SignUpInputBox>

          <S.InputRow2Box>
            <S.SignUpLabel>매장 정보</S.SignUpLabel>
            <S.SignUpInput
              value={fetchedUserInfo?.storeName || ''}
              width="27.4rem"
              type="text"
              id="store"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setStoreName((e.target as HTMLInputElement).value)
              }
            />

            <S.SignUpLabel>매장 분류</S.SignUpLabel>
            <S.SignUpInput
              value={fetchedUserInfo?.storeCode || ''}
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
                width="27.4rem"
                placeholderLocation="left"
                value={fetchedUserInfo?.storeAddress || ''}
                type="text"
                id="addr"
                placeholder="우편번호"
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setStoreAddress((e.target as HTMLInputElement).value)
                }
              />
              <button>주소검색</button>
            </SS.AddrInputBox>
          </S.InputRow2Box>
        </div>
      </SS.SignUpForm>
    </SS.SignUpBox>
  );
};

export default MyInforPage;
