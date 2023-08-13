import Image from 'next/image';
import friendProfile from 'public/assets/imgs/community/friendProfile.png';
import * as S from './style';

interface IFriendInfoProps {
  name: string;
<<<<<<< HEAD
  storeName: string;
  phoneNumber: string;
=======
  location: string;
  phone: string;
>>>>>>> ff4bb25 (Merge branch develop into main)
  width: number;
  imgMarginRight: string;
}

/** 친구 프로필 */
<<<<<<< HEAD
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
=======
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
>>>>>>> ff4bb25 (Merge branch develop into main)
      </div>
    </S.FriendInfoBox>
  );
};

<<<<<<< HEAD
export default FriendInfo;
=======
export default FriendInfo;
>>>>>>> ff4bb25 (Merge branch develop into main)
