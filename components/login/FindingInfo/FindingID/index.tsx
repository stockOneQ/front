import CancelBtn from 'components/common/button/CancelBtn';
import BirthInput from 'components/common/loginInput/BirthInput';
import DigitInput from 'components/common/loginInput/DigitInput';
import NameInput from 'components/common/loginInput/NameInput';
import { useState } from 'react';
import * as S from '../style';
import EmailInput from 'components/common/loginInput/EmailInput';

/** 아이디 찾기 */
const FindingID = () => {
  const [isByDigit, setIsByDigit] = useState(true);

  return (
    <>
      <S.FindingByBox>
        <p className={isByDigit ? 'selected' : ''} onClick={() => { setIsByDigit(true)} }>휴대폰으로 찾기</p>
        <p className={!isByDigit ? 'selected' : ''} onClick={() => { setIsByDigit(false)} }>이메일로 찾기</p>
      </S.FindingByBox>
      <form>
        <S.FindingInputBox>
          <NameInput />
          <BirthInput />
          {isByDigit && <DigitInput />}
          {!isByDigit && <EmailInput />}
        </S.FindingInputBox>
        <S.FindingButtonBox>
          <CancelBtn label="아이디 찾기" disabled={false} width="20.2rem" height="8.5rem" font="2.2rem" />
        </S.FindingButtonBox>
      </form>
    </>
  );
};

export default FindingID;