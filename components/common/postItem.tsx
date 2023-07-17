import Image from "next/image";
import { styled } from "styled-components";

import ViewsIcon from "../../public/assets/icons/views.png";
import LikeIcon from "../../public/assets/icons/like.png";
import CommentIcon from "../../public/assets/icons/comment.png";

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
    <Box>
      <PostDetailSection>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </PostDetailSection>
      <PostInfoSection>
        <InfoBox>
          <Image alt="조회수" src={ViewsIcon}></Image>
          <span>{views}</span>
        </InfoBox>
        <InfoBox>
          <Image alt="댓글" src={CommentIcon}></Image>
          <span>{commentCount}</span>
        </InfoBox>
        <InfoBox>
          <Image alt="좋아요" src={LikeIcon}></Image>
          <span>{likes}</span>
        </InfoBox>
      </PostInfoSection>
    </Box>
  );
};

const Box = styled.div`
  width: 1114px;
  height: 216px;

  padding: 32px 50px;

  background: rgba(255, 255, 255, 0.2);
  mix-blend-mode: normal;
  box-shadow: 0px 11px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PostDetailSection = styled.div``;

const Title = styled.div`
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;
  margin-bottom: 12px;
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #979797;
`;

const PostInfoSection = styled.div`
  display: flex;
  gap: 32px;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  color: #979797;
`;

export default PostItem;
