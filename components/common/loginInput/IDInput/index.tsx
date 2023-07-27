import * as S from '../style';
import * as SS from './style';

/** ID 입력창 */
const IDInput = () => {
  return (
    <S.InputRow2Box>
      <SS.IDInputBox>
        <S.SignUpLabel htmlFor="id">아이디</S.SignUpLabel>
        <p>6-20자 영문, 숫자</p>
      </SS.IDInputBox>
      <S.SignUpInput width="27.4rem" type="text" id="id" />
    </S.InputRow2Box>
  );
};

export default IDInput;