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
import * as S from './style';


/** 회원 가입 */
const SignUp = () => {
  return (
    <S.SignUpBox>
      <div>
        <S.SignUpHeaderBox>
          <Image src={mainLogo} alt="main-logo" width={67.5} height={65} />
          <p>스톡원큐 회원가입</p>
        </S.SignUpHeaderBox>
      </div>
      <S.SignUpForm>
        <div>
          <S.InputRow1Box>
            <S.SignUpInputBox>
              <S.SignUpLabel>이름</S.SignUpLabel>
              <S.SignUpInput width="18.3rem" type="text" />
            </S.SignUpInputBox>
            <S.SignUpInputBox>
              <S.SignUpLabel>생년월일</S.SignUpLabel>
              <S.BirthInputBox>
                <S.SignUpInput width="9.1rem" type="text" placeholder="YYYY" />
                <S.SignUpInput width="7.1rem" type="text" placeholder="MM" />
                <S.SignUpInput width="7.1rem" type="text" placeholder="DD" />
              </S.BirthInputBox>
            </S.SignUpInputBox>
          </S.InputRow1Box>
          <S.InputRow2Box>
            <S.SignUpLabel>E-mail</S.SignUpLabel>
            <S.EmailInputBox>
              <S.SignUpInput width="18.3rem" type="text" />
              <p>@</p>
              <S.SignUpInput width="18.3rem" type="text" />
              <S.EmailSelectBox>
                <option>naver.com</option>
                <option>google.com</option>
                <option>khu.ac.kr</option>
              </S.EmailSelectBox>
            </S.EmailInputBox>
          </S.InputRow2Box>
          <S.InputRow2Box>
            <S.SignUpLabel>전화번호</S.SignUpLabel>
            <S.DigitInputBox>
              <S.SignUpInput width="7.1rem" type="text" placeholder="010" />
              <p>-</p>
              <S.SignUpInput width="9.2rem" type="text" placeholder="0000" />
              <p>-</p>
              <S.SignUpInput width="9.2rem" type="text" placeholder="0000" />
            </S.DigitInputBox>
          </S.InputRow2Box>
          <S.InputRow2Box>
            <S.IDInputBox>
              <S.SignUpLabel>아이디</S.SignUpLabel>
              <p>6-20자 영문, 숫자</p>
            </S.IDInputBox>
            <S.SignUpInput width="27.4rem" type="text" />
          </S.InputRow2Box>
          <S.InputRow2Box>
            <S.PwInputBox>
              <S.SignUpLabel>비밀번호</S.SignUpLabel>
              <p>6-20자 영문, 숫자, 특수문자 사용</p>
            </S.PwInputBox>
            <S.SignUpInput width="27.4rem" type="password" />
          </S.InputRow2Box>
          <S.InputRow2Box>
            <S.SignUpLabel>비밀번호 확인</S.SignUpLabel>
            <S.SignUpInput width="27.4rem" type="password" />
          </S.InputRow2Box>
          <S.InputRow3Box>
            <S.SignUpLabel>사용자 권한</S.SignUpLabel>
            <S.AuthBox>
              <S.AuthImgBox>
                <Image src={presidentActive} alt="select_user_type_icon" width={29} height={40} />
                <p>사장님</p>
              </S.AuthImgBox>
              <S.AuthImgBox>
                <Image src={employeeActive} alt="select_user_type_icon" width={29} height={40} />
                <p>아르바이트 생</p>
              </S.AuthImgBox>
              <S.AuthImgBox>
                <Image src={supervisorActive} alt="select_user_type_icon" width={29} height={40} />
                <p>슈퍼바이저</p>
              </S.AuthImgBox>
            </S.AuthBox>
          </S.InputRow3Box>
          <S.InputRow2Box>
            <S.SignUpLabel>매장 정보</S.SignUpLabel>
            <S.SignUpInput width="27.4rem" type="text" />
          </S.InputRow2Box>
          <S.InputRow2Box>
            <S.SignUpLabel>주소</S.SignUpLabel>
            <S.AddrInputBox>
              <S.SignUpInput width="16.2rem" placeholderLocation="left" type="text" placeholder="우편번호" />
              <button>주소검색</button>
            </S.AddrInputBox>
            <S.SignUpInput width="34.5rem" placeholderLocation="left" type="text" placeholder="기본주소" />
            <S.SignUpInput width="34.5rem" placeholderLocation="left" type="text" placeholder="상세주소" />
          </S.InputRow2Box>
        </div>
        <S.SignUpBtnBox>
          <CancelBtn width="20.2rem" height="11rem" font="2.4rem" label="회원가입" disabled={false} />
          <RejectBtn width="20.2rem" height="11rem" font="2.4rem" label="취소" />
        </S.SignUpBtnBox>
      </S.SignUpForm>
    </S.SignUpBox>
  );
};

export default SignUp;