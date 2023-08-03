import Image from 'next/image';
import * as S from './style';
import ViewsSVG from 'public/assets/icons/community/views.svg';
import LikesSVG from 'public/assets/icons/community/likes.svg';

type IPostContentType = {
  title: string;
  content: string;
  views: number;
  likes: number;
};

const PostContentBox = ({ title, content, views, likes }: IPostContentType) => {
  return (
    <S.Box>
      <S.HeaderSection>
        <S.Title>{title}</S.Title>
        <S.InteractionSection>
          <S.Container color="#F2B2CF">
            <Image alt="views" src={ViewsSVG} />
            <span>{views}</span>
          </S.Container>
          {/** 좋아요 버튼으로 구현하기 */}
          <S.Container color="#7BAED7">
            <Image alt="likes" src={LikesSVG} />
            <span>{likes}</span>
          </S.Container>
        </S.InteractionSection>
      </S.HeaderSection>
      <S.Content>{content}</S.Content>
    </S.Box>
  );
};

export default PostContentBox;
