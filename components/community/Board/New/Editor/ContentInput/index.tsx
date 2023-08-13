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
      <S.Text>내용</S.Text>
      <S.Input
        value={contentInput}
        onChange={handleInput}
        maxLength={5000}
      ></S.Input>
    </S.Box>
  );
};

export default EditorContentInput;
