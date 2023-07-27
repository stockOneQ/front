import CancelBtn from 'components/common/button/CancelBtn';
import BirthInput from 'components/common/loginInput/BirthInput';
import DigitInput from 'components/common/loginInput/DigitInput';
import NameInput from 'components/common/loginInput/NameInput';
import { useState } from 'react';
import * as S from './style';

/** 아이디 찾기 */
const FindingID = () => {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <>
      <S.FindingIDByBox>
        <p className={isSelected === 0 ? 'selected' : ''} onClick={() => { setIsSelected(0)} }>휴대폰으로 찾기</p>
        <p className={isSelected === 1 ? 'selected' : ''} onClick={() => { setIsSelected(1)} }>이메일로 찾기</p>
      </S.FindingIDByBox>
      <form>
        <S.FindingIDInputBox>
          <NameInput />
          <BirthInput />
          <DigitInput />
        </S.FindingIDInputBox>
        {/* label, disabled, width, height, font */}
        <S.FindingIDButtonBox>
          <CancelBtn label="아이디 찾기" disabled={false} width="20.2rem" height="8.5rem" font="2.2rem" />
        </S.FindingIDButtonBox>
      </form>
    </>
  );
};

export default FindingID;