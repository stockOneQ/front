import HeadingText from "components/common/HeadingText";
import ControlBar from "./ControlBar";
import PostListBox from "./PostListBox";

import * as B from "./style";

/* 커뮤니티 - 게시판 메인 페이지 */
const Board = () => {
  return (
    <B.Box>
      <B.HeaderSection>
        <HeadingText>전체글</HeadingText>
        <ControlBar />
      </B.HeaderSection>
      <PostListBox />
    </B.Box>
  );
};

export default Board;
