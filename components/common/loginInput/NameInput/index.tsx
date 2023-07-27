import * as S from '../style';

/** 이름 입력창 */
const NameInput = () => {
  return (
    <S.SignUpInputBox>
      <S.SignUpLabel htmlFor="name">이름</S.SignUpLabel>
      <S.SignUpInput width="18.3rem" type="text" id="name" />
    </S.SignUpInputBox>
  );
};

export default NameInput;