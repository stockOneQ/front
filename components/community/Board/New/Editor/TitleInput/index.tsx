import { useRecoilState } from 'recoil';
import { postTitleState } from 'recoil/states';
import * as S from './style';

const EditorTitleInput = () => {
  const [titleInput, setTitleInput] = useRecoilState(postTitleState);

  return (
    <S.Box>
      <S.TextContainer>
        <S.Text>제목</S.Text>
      </S.TextContainer>
      <S.Input
        value={titleInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitleInput(e.target.value)
        }
        maxLength={37}
      />
    </S.Box>
  );
};

export default EditorTitleInput;
