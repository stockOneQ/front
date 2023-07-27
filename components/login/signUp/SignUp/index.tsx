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


/** 회원 가입 */
const SignUp = () => {
  return (
    <SS.SignUpBox>
      <div>
        <SS.SignUpHeaderBox>
          <Image src={mainLogo} alt="main-logo" width={67.5} height={65} />
          <p>스톡원큐 회원가입</p>
        </SS.SignUpHeaderBox>
      </div>
      <SS.SignUpForm>
        <div>
          <S.InputRow1Box>
            <NameInput />
            <BirthInput />
          </S.InputRow1Box>
          <EmailInput />
          <DigitInput />
          <IDInput />
          <S.InputRow2Box>
            <SS.PwInputBox>
              <S.SignUpLabel htmlFor="password">비밀번호</S.SignUpLabel>
              <p>6-20자 영문, 숫자, 특수문자 사용</p>
            </SS.PwInputBox>
            <S.SignUpInput width="27.4rem" type="password" id="password" />
          </S.InputRow2Box>
          <S.InputRow2Box>
            <S.SignUpLabel htmlFor="passwordCheck">비밀번호 확인</S.SignUpLabel>
            <S.SignUpInput width="27.4rem" type="password" id="passwordCheck" />
          </S.InputRow2Box>
          <S.InputRow3Box>
            <S.SignUpLabel>사용자 권한</S.SignUpLabel>
            <SS.AuthBox>
              <SS.AuthImgBox>
                <Image src={presidentActive} alt="select_user_type_icon" width={29} height={40} />
                <p>사장님</p>
              </SS.AuthImgBox>
              <SS.AuthImgBox>
                <Image src={employeeActive} alt="select_user_type_icon" width={29} height={40} />
                <p>아르바이트 생</p>
              </SS.AuthImgBox>
              <SS.AuthImgBox>
                <Image src={supervisorActive} alt="select_user_type_icon" width={29} height={40} />
                <p>슈퍼바이저</p>
              </SS.AuthImgBox>
            </SS.AuthBox>
          </S.InputRow3Box>
          <S.InputRow2Box>
            <S.SignUpLabel htmlFor="store">매장 정보</S.SignUpLabel>
            <S.SignUpInput width="27.4rem" type="text" id="store" />
          </S.InputRow2Box>
          <S.InputRow2Box>
            <S.SignUpLabel htmlFor="addr">주소</S.SignUpLabel>
            <SS.AddrInputBox>
              <S.SignUpInput width="16.2rem" placeholderLocation="left" type="text" id="addr" placeholder="우편번호" />
              <button>주소검색</button>
            </SS.AddrInputBox>
            <S.SignUpInput width="34.5rem" placeholderLocation="left" type="text" placeholder="기본주소" />
            <S.SignUpInput width="34.5rem" placeholderLocation="left" type="text" placeholder="상세주소" />
          </S.InputRow2Box>
        </div>
        <SS.SignUpBtnBox>
          <CancelBtn width="20.2rem" height="11rem" font="2.4rem" label="회원가입" disabled={false} />
          <RejectBtn width="20.2rem" height="11rem" font="2.4rem" label="취소" />
        </SS.SignUpBtnBox>
      </SS.SignUpForm>
    </SS.SignUpBox>
  );
};

export default SignUp;