import Image from 'next/image';
import * as S from './style';
import { formatCreatedDateToString } from 'utils/date';
import ProfileImg from 'public/assets/imgs/community/profileImage.png';

type IPostInfoType = {
  writerName: string;
  createdDate: string;
};

const PostInfo = ({ writerName, createdDate }: IPostInfoType) => {
  return (
    <S.Box>
      <S.Container>
        {/** 게시글 작성자의 프로필 사진 받아오기 */}
        <Image src={ProfileImg} alt="profile" />
        <S.Info>
          <h1>{writerName} 사장님</h1>
          <span>
            {createdDate && createdDate.length === 13
              ? createdDate
              : formatCreatedDateToString(createdDate)}
          </span>
        </S.Info>
      </S.Container>
    </S.Box>
  );
};
export default PostInfo;
