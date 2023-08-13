import { useRecoilState } from 'recoil';
import { postContentState } from 'recoil/states';

import * as S from './style';
import useScroll from 'hooks/useScroll';

const EditorContentInput = () => {
  const [contentInput, setContentInput] = useRecoilState(postContentState);

  const { hideScroll, scrollHandler } = useScroll();

  console.log('ghahahha', hideScroll);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentInput(e.target.value);
  };

  return (
    <S.Box>
      <S.Text>내용</S.Text>
      <S.Input
        hideScroll={hideScroll}
        value={contentInput}
        onChange={handleInput}
        onScroll={scrollHandler}
        maxLength={5000}
      />
    </S.Box>
  );
};

export default EditorContentInput;
