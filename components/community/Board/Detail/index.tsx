import { useRouter } from "next/router";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { postCommentListState } from "recoil/states";

import PostInfoBox from "./PostInfoBox";
import PostContentBox from "./PostContentBox";
import PostCommentListBox from "./PostCommentListBox";
import PostCommentInputBox from "./PostCommentInputBox";

import * as S from "./style";
import { getStringDate } from "utils/date";

import CloseSVG from "public/assets/icons/close.svg";
import CommentsSVG from "public/assets/icons/comments.svg";

type IPostType = {
  postData: {
    id: string;
    writer: string;
    uploadTime: string;
    title: string;
    content: string;
    views: number;
    commentCount: number;
    likes: number;
  };
};

const Detail = ({ postData }: IPostType) => {
  console.log(postData);
  const { writer, uploadTime, title, content, views, likes } = postData || {};
  const router = useRouter();

  const postCommentList = useRecoilValue(postCommentListState);

  const handleClose = () => {
    router.push("/community/board");
  };

  return (
    <S.Box>
      <S.CloseButtonContainer onClick={handleClose}>
        <Image src={CloseSVG} alt="close" />
      </S.CloseButtonContainer>

      <S.PostContainer>
        <PostInfoBox writer={writer} date={getStringDate(uploadTime)} />
        <PostContentBox
          title={title}
          content={content}
          views={views}
          likes={likes}
        />
      </S.PostContainer>

      <PostCommentInputBox />

      <S.CommentListContainer>
        <S.CommentCountContainer>
          <Image src={CommentsSVG} alt="comment" />
          <span>댓글 {postCommentList.length}</span>
        </S.CommentCountContainer>
        <PostCommentListBox />
      </S.CommentListContainer>
    </S.Box>
  );
};

export default Detail;
