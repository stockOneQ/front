import profileImg from 'public/assets/imgs/community/myProfile.png';
import Image from 'next/image';
import * as S from './style';

interface IConnectionProfileProps {
  id: number;
  name: string;
  location: string;
  digit: string;
}

/** 슈퍼바이저 프로필 */
const ConnectionProfile = ({
  id,
  name,
  location,
  digit,
}: IConnectionProfileProps) => {
  return (
    <S.ConnectionProfileBox id={id}>
      <Image src={profileImg} alt="user-profile-img" width={60} height={60} />
      <p>{name}</p>
      <p>{location} 슈퍼바이저</p>
      <p>{digit}</p>
    </S.ConnectionProfileBox>
  );
};

export default ConnectionProfile;
