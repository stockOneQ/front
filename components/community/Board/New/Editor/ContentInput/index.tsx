import { SetStateAction, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { postContentState } from "recoil/states";

import * as S from "./style";

const EditorContentInput = () => {
  const [content, setContent] = useRecoilState(postContentState);

  return (
    <S.Box>
      <S.Text>내용</S.Text>
      <S.Input
        value={content}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setContent(e.target.value)
        }
        maxLength={5000}
      ></S.Input>
    </S.Box>
  );
};

export default EditorContentInput;
