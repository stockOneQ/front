import Image from "next/image";

import ViewsIcon from "public/assets/icons/views.png";
import LikeIcon from "public/assets/icons/like.png";
import CommentIcon from "public/assets/icons/comment.png";

import * as S from "./style";

const PostItem = ({
  title,
  content,
  views,
  commentCount,
  likes,
}: {
  title: string;
  content: string;
  views: number;
  commentCount: number;
  likes: number;
}) => {
  return (
    <S.Box>
      <S.PostDetailSection>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
      </S.PostDetailSection>
      <S.PostInfoSection>
        <S.InfoBox>
          <Image alt="조회수" src={ViewsIcon} />
          <span>{views}</span>
        </S.InfoBox>
        <S.InfoBox>
          <Image alt="댓글" src={CommentIcon} />
        </S.InfoBox>
        <S.InfoBox>
          <Image alt="좋아요" src={LikeIcon} />
          <span>{likes}</span>
        </S.InfoBox>
      </S.PostInfoSection>
    </S.Box>
  );
};

export default PostItem;
