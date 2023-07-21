import Image from 'next/image';
import friendProfile from 'public/assets/imgs/community/friendProfile.png';
import * as S from './style';

interface IFriendInfoProps {
  name: string;
  location: string;
  phone: string;
  width: number;
  imgMarginRight: string;
}

/** 친구 프로필 */
const FriendInfo = ({ name, location, phone, width, imgMarginRight }: IFriendInfoProps) => {
  return (
    <S.FriendInfoBox imgMarginRight={imgMarginRight}>
      <Image src={friendProfile} alt="my_profile" width={width} height={width} placeholder="blur" />
      <div>
        <S.FriendInfoTextBox>
          <p>{name}</p>
          <p>{location}</p>
        </S.FriendInfoTextBox>
        <S.FriendPhoneText>{phone}</S.FriendPhoneText>
      </div>
    </S.FriendInfoBox>
  );
};

export default FriendInfo;