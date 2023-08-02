import Image from "next/image";
import * as S from "./style";
import ViewsSVG from "public/assets/icons/views.svg";
import LikesSVG from "public/assets/icons/likes.svg";

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
            <Image alt="views" src={ViewsSVG} />
            <span>{views}</span>
          </S.ActionContainer>
          <S.ActionContainer color="#7BAED7">
            <Image alt="likes" src={LikesSVG} />
            <span>{likes}</span>
          </S.ActionContainer>
        </S.ActionBox>
      </S.Header>
      <S.Content>{content}</S.Content>
    </S.Box>
  );
};

export default PostContentBox;
