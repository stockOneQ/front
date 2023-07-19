import { SetStateAction, useState } from "react";
import { useRecoilState } from "recoil";
import { postTitleState } from "recoil/states";
import styled from "styled-components";

const EditorTitleInput = () => {
  const [titleInput, setTitleInput] = useRecoilState(postTitleState);

  return (
    <Box>
      <Text>제목</Text>
      <Input
        value={titleInput}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setTitleInput(e.target.value)
        }
      />
    </Box>
  );
};
const Box = styled.div`
  display: flex;
  align-items: center;

  padding-bottom: 45px;

  gap: 25px;
`;

const Text = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 984px;
  height: 66px;
  font-size: 18px;

  padding-left: 16px;

  background: #ffffff;
  border: 1px solid #f7f7f9;
  border-radius: 30px;
`;

export default EditorTitleInput;
