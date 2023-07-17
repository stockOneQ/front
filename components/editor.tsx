import styled from "styled-components";

import TitleInput from "./editorTitleInput";
import ContentInput from "./editorContentInput";

const Editor = () => {
  return (
    <Box>
      <TitleInput />
      <ContentInput />
    </Box>
  );
};

const Box = styled.div`
  width: 1115px;
  height: 673px;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 11px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
`;

export default Editor;
