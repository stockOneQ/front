import CancelBtn from 'components/common/button/CancelBtn';
import BirthInput from 'components/common/loginInput/BirthInput';
import NameInput from 'components/common/loginInput/NameInput';
import IDInput from 'components/common/loginInput/IDInput';
import * as S from '../style';
import * as SS from './style';

/** 비밀번호 찾기 */
const FindingID = () => {

  return (
    <>
      <SS.FindingPWForm>
        <S.FindingInputBox>
          <NameInput />
          <BirthInput />
          <IDInput />
        </S.FindingInputBox>
        <S.FindingButtonBox>
          <CancelBtn label="비밀번호 찾기" disabled={false} width="20.2rem" height="8.5rem" font="2.2rem" />
        </S.FindingButtonBox>
      </SS.FindingPWForm>
    </>
  );
};

export default FindingID;