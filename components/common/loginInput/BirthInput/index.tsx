import * as S from '../style';
import * as SS from './style';

/** 생년월일 입력창 */
const BirthInput = () => {
  return (
    <S.SignUpInputBox>
      <S.SignUpLabel htmlFor="birth">생년월일</S.SignUpLabel>
      <SS.BirthInputBox>
<<<<<<< HEAD
        <S.SignUpInput
          width="9.1rem"
          type="text"
          id="birth"
          placeholder="YYYY"
        />
=======
        <S.SignUpInput width="9.1rem" type="text" id="birth" placeholder="YYYY" />
>>>>>>> ff4bb25 (Merge branch develop into main)
        <S.SignUpInput width="7.1rem" type="text" placeholder="MM" />
        <S.SignUpInput width="7.1rem" type="text" placeholder="DD" />
      </SS.BirthInputBox>
    </S.SignUpInputBox>
  );
};

<<<<<<< HEAD
export default BirthInput;
=======
export default BirthInput;
>>>>>>> ff4bb25 (Merge branch develop into main)
