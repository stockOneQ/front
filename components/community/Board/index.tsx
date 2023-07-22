import PageTitleContainer from "components/common/PageTitleContainer";
import ControlBar from "./ControlBar";
import PostListBox from "./PostListBox";

import * as B from "./style";
import { styled } from "styled-components";

/* 커뮤니티 - 게시판 메인 페이지 */
const Board = () => {
  return (
    <B.Box>
      <B.Header>
        <PageTitleContainer title="전체글" />
        <ControlBar />
      </B.Header>
      <PostListBox />
    </B.Box>
  );
};


export default Board;
