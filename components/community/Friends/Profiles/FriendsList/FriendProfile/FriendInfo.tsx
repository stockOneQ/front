import Image from 'next/image';
import friendProfile from 'public/assets/imgs/community/friendProfile.png';
import * as S from './style';

interface IFriendInfoProps {
  width: number;
  imgMarginRight: string;
}

/** 친구 프로필 */
const FriendInfo = ({ width, imgMarginRight }: IFriendInfoProps) => {
  return (
    <S.FriendInfoBox imgMarginRight={imgMarginRight}>
      <Image src={friendProfile} alt="my_profile" width={width} height={width} placeholder="blur" />
      <div>
        <S.FriendInfoTextBox>
          <p>김아리</p>
          <p>이디아 상앙점</p>
        </S.FriendInfoTextBox>
        <S.FriendPhoneText>010-0000-0000</S.FriendPhoneText>
      </div>
    </S.FriendInfoBox>
  );
};

export default FriendInfo;