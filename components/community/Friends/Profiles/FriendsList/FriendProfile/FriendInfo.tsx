import Image from 'next/image';
import friendProfile from 'public/assets/imgs/community/friendProfile.png';
import * as S from './style';

interface IFriendInfoProps {
  name: string;
  storeName: string;
  phoneNumber: string;
  width: number;
  imgMarginRight: string;
}

/** 친구 프로필 */
const FriendInfo = ({
  name,
  storeName,
  phoneNumber,
  width,
  imgMarginRight,
}: IFriendInfoProps) => {
  return (
    <S.FriendInfoBox imgMarginRight={imgMarginRight}>
      <Image
        src={friendProfile}
        alt="my_profile"
        width={width}
        height={width}
        placeholder="blur"
      />
      <div>
        <S.FriendInfoTextBox>
          <p>{name}</p>
          <p>{storeName}</p>
        </S.FriendInfoTextBox>
        <S.FriendPhoneText>{phoneNumber}</S.FriendPhoneText>
      </div>
    </S.FriendInfoBox>
  );
};

export default FriendInfo;
