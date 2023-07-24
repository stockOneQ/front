import * as S from "./style";
import Image from "next/image";

import ViewsIcon from "public/assets/icons/views.png";
import LikeIcon from "public/assets/icons/like.png";

type IPostContentType = {
  title: string;
  content: string;
  views: number;
  likes: number;
};

const PostContentBox = ({ title, content, views, likes }: IPostContentType) => {
  return (
    <S.Box>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.ActionBox>
          <S.ActionContainer color="#F2B2CF">
            <Image alt="조회수" src={ViewsIcon} />
            <span>{views}</span>
          </S.ActionContainer>
          <S.ActionContainer color="#7BAED7">
            <Image alt="좋아요" src={LikeIcon} />
            <span>{likes}</span>
          </S.ActionContainer>
        </S.ActionBox>
      </S.Header>
      <S.Content>{content}</S.Content>
    </S.Box>
  );
};

export default PostContentBox;
