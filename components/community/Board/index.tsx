import HeadingText from "components/common/HeadingText";
import ControlBar from "./ControlBar";
import PostListBox from "./PostListBox";

import RightArrow from "public/assets/icons/rightArrow.png";
import Image from "next/image";

import * as S from "./style";
import { useRouter } from "next/router";

/* 커뮤니티 - 게시판 메인 페이지 */
const Board = () => {
  const router = useRouter();

  const handleMyPostsClick = () => {
    router.push("/community/board/myPosts");
  };

  return (
    <S.Box>
      <S.HeaderSection>
        <HeadingText>전체글</HeadingText>
        <ControlBar />
      </S.HeaderSection>
      <S.MyPostSection onClick={handleMyPostsClick}>
        <span>내가 쓴 글</span>
        <Image src={RightArrow} alt="goMyPosts" />
      </S.MyPostSection>
      <PostListBox />
    </S.Box>
  );
};

export default Board;
