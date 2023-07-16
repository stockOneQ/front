import { SetStateAction, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { postContentState } from "recoil/states";
import { styled } from "styled-components";

const EditorContentInput = () => {
  const [content, setContent] = useRecoilState(postContentState);

  return (
    <Box>
      <Header>내용</Header>
      <ContentInput
        value={content}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setContent(e.target.value)
        }
      ></ContentInput>
    </Box>
  );
};

const Box = styled.div``;

const Header = styled.div`
  padding-left: 12px;
  background: #f7f7f9;
  color: #000000;

  font-weight: 600;
  font-size: 18px;
  line-height: 21px;

  display: flex;
  align-items: center;

  height: 45px;
`;

const ContentInput = styled.textarea`
  resize: none;

  width: 1075px;
  height: 477px;
  border-radius: 0px 0px 30px 30px;
  font-size: 18px;
  padding: 12px;
`;

export default EditorContentInput;
