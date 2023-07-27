import * as S from '../style';

/** 이름 입력창 */
const NameInput = () => {
  return (
    <S.SignUpInputBox>
      <S.SignUpLabel>이름</S.SignUpLabel>
      <S.SignUpInput width="18.3rem" type="text" />
    </S.SignUpInputBox>
  );
};

export default NameInput;