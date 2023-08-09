import Image from 'next/image';
import * as S from './style';
import ProfileImg from 'public/assets/imgs/community/profileImage.png';
import { formatCreatedDateToString } from 'utils/date';

type IPostInfoType = {
  writer: string;
  createdDate: string;
};

const WriterInfoBox = ({ writer, createdDate }: IPostInfoType) => {
  return (
    <S.Box>
      <S.Container>
        <Image src={ProfileImg} alt="profile" />
        <S.Info>
          <h1>{writer} 사장님</h1>
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
export default WriterInfoBox;
