import Image from "next/image";
import * as S from "./style";
import ProfileImg from "public/assets/imgs/community/profileImage.png";

type IPostInfoType = {
  writer: string;
  date: string;
};

const PostInfoBox = ({ writer, date }: IPostInfoType) => {
  return (
    <S.Box>
      <S.Container>
        <Image src={ProfileImg} alt="profile" />
        <S.Info>
          <h1>{writer} 사장님</h1>
          <span>{date}</span>
        </S.Info>
      </S.Container>
    </S.Box>
  );
};
export default PostInfoBox;
