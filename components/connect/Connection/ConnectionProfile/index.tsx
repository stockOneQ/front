import profileImg from 'public/assets/imgs/community/myProfile.png';
import Image from 'next/image';
import * as S from './style';

/** 슈퍼바이저 프로필 */
const ConnectionProfile = () => {
  return (
    <S.ConnectionProfileBox>
      <Image src={profileImg} alt="user-profile-img" width={60} height={60} />
      <p>이혜리</p>
      <p>이디야 슈퍼바이저</p>
      <p>010-1112-3334</p>
    </S.ConnectionProfileBox>
  );
};

export default ConnectionProfile;
