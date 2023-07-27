import CancelBtn from 'components/common/button/CancelBtn';
import BirthInput from 'components/common/loginInput/BirthInput';
import DigitInput from 'components/common/loginInput/DigitInput';
import NameInput from 'components/common/loginInput/NameInput';
import styled from 'styled-components';

const FindingIDByBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  p { 
    width: 50%;
    text-align: center;
    padding: .9rem 0;
    border-bottom: 1px solid currentColor;

    color: #979797;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: normal;
  }

  .selected {
    color: var(--color-black);
    border-bottom-width: 3px;
  }
`

const FindingIDInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  margin-bottom: 4.5rem;
  padding: 4.7rem 4.5rem 0;
`

const FindingIDButtonBox = styled.div`
  text-align: center;
`

/** 아이디 찾기 */
const FindingID = () => {
  return (
    <>
      <FindingIDByBox>
        <p className="selected">휴대폰으로 찾기</p>
        <p>이메일로 찾기</p>
      </FindingIDByBox>
      <form>
        <FindingIDInputBox>
          <NameInput />
          <BirthInput />
          <DigitInput />
        </FindingIDInputBox>
        {/* label, disabled, width, height, font */}
        <FindingIDButtonBox>
          <CancelBtn label="아이디 찾기" disabled={false} width="20.2rem" height="8.5rem" font="2.2rem" />
        </FindingIDButtonBox>
      </form>
    </>
  );
};

export default FindingID;