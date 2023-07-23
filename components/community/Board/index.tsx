import HeadingText from "components/common/HeadingText";
import ControlBar from "./ControlBar";
import PostListBox from "./PostListBox";

import * as S from "./style";

/* 커뮤니티 - 게시판 메인 페이지 */
const Board = () => {
  return (
    <S.Box>
      <S.HeaderSection>
        <HeadingText>전체글</HeadingText>
        <ControlBar />
      </S.HeaderSection>
      <PostListBox />
    </S.Box>
  );
};

export default Board;
