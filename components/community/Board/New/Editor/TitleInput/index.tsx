import { SetStateAction, useState } from "react";
import { useRecoilState } from "recoil";
import { postTitleState } from "recoil/states";
import * as S from "./style";

const EditorTitleInput = () => {
  const [titleInput, setTitleInput] = useRecoilState(postTitleState);

  return (
    <S.Box>
      <S.Text>제목</S.Text>
      <S.Input
        value={titleInput}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setTitleInput(e.target.value)
        }
      />
    </S.Box>
  );
};

export default EditorTitleInput;
