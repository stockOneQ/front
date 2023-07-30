import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import * as S from "./style";
import ControlBar from "./ControlBar";
import PostListBox from "./PostListBox";
import HeadingText from "components/common/HeadingText";

import RightArrowSVG from "public/assets/icons/community/rightArrow.svg";
import WriteSVG from "public/assets/icons/community/write.svg";

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
        <S.MyPostButtonContainer onClick={handleMyPostsClick}>
          <span>내가 쓴 글</span>
          <Image src={RightArrowSVG} alt="MyPosts" />
        </S.MyPostButtonContainer>
        <ControlBar />
        <S.WriteButtonContainer>
          <Link href="/community/board/new">
            <Image alt="게시글 등록" src={WriteSVG} />
          </Link>
        </S.WriteButtonContainer>
      </S.HeaderSection>
      <PostListBox />
    </S.Box>
  );
};

export default Board;
