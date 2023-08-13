import { useRecoilState } from 'recoil';
import { postContentState } from 'recoil/states';

import * as S from './style';

const EditorContentInput = () => {
  const [contentInput, setContentInput] = useRecoilState(postContentState);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentInput(e.target.value);
  };

  return (
    <S.Box>
<<<<<<< HEAD
      <S.TextContainer>
        <S.Text>내용</S.Text>
      </S.TextContainer>

      <S.Container>
        <S.Input value={contentInput} onChange={handleInput} maxLength={5000} />
      </S.Container>
=======
      <S.Text>내용</S.Text>
      <S.Input
        value={contentInput}
        onChange={handleInput}
        maxLength={5000}
      ></S.Input>
>>>>>>> ff4bb25 (Merge branch develop into main)
    </S.Box>
  );
};

export default EditorContentInput;
