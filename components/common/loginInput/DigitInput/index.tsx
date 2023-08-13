import * as S from '../style';
import * as SS from './style';

/** 전화번호 입력창 */
const DigitInput = () => {
  return (
    <S.InputRow2Box>
      <S.SignUpLabel htmlFor="digit">전화번호</S.SignUpLabel>
      <SS.DigitInputBox>
<<<<<<< HEAD
        <S.SignUpInput
          width="7.1rem"
          type="text"
          id="digit"
          placeholder="010"
        />
=======
        <S.SignUpInput width="7.1rem" type="text" id="digit" placeholder="010" />
>>>>>>> ff4bb25 (Merge branch develop into main)
        <p>-</p>
        <S.SignUpInput width="9.2rem" type="text" placeholder="0000" />
        <p>-</p>
        <S.SignUpInput width="9.2rem" type="text" placeholder="0000" />
      </SS.DigitInputBox>
    </S.InputRow2Box>
<<<<<<< HEAD
  );
};

export default DigitInput;
=======
)};

export default DigitInput;
>>>>>>> ff4bb25 (Merge branch develop into main)
