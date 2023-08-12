import Image from 'next/image';

import * as S from './style';
import profileImage from 'public/assets/imgs/community/profileImage.png';

type ICommentType = {
  writerName: string;
  content: string;
  date: string;
};

const PostCommentItemBox = ({ writerName, content, date }: ICommentType) => {
  return (
    <S.Box>
      <Image src={profileImage} alt="profile" />
      <S.Container>
        <S.ContentContainer>
          <h1>{writerName} 사장님</h1>
          <span>{content}</span>
        </S.ContentContainer>
        <S.Date>{date}</S.Date>
      </S.Container>
    </S.Box>
  );
};

export default PostCommentItemBox;
