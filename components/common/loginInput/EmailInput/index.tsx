import * as S from '../style';
import * as SS from './style';

/** 이메일 입력창 */
const EmailInput = () => {
  return (
    <S.InputRow2Box>
      <S.SignUpLabel htmlFor="email">E-mail</S.SignUpLabel>
      <SS.EmailInputBox>
        <S.SignUpInput width="18.3rem" type="text" id="email" />
        <p>@</p>
        <S.SignUpInput width="18.3rem" type="text" />
        <SS.EmailSelectBox>
          <option>naver.com</option>
          <option>google.com</option>
          <option>khu.ac.kr</option>
        </SS.EmailSelectBox>
      </SS.EmailInputBox>
    </S.InputRow2Box>
  );
};

export default EmailInput;