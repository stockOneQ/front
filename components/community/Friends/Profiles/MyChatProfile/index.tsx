import Image from 'next/image';
import myProfile from 'public/assets/imgs/community/myProfile.png';
import myPageIcon from 'public/assets/icons/community/myPageIcon.svg';
import * as S from './style';

/** 나의 채팅 프로필 */
const MyChatProfile = () => {
  return (
    <div>
      <S.MyProfileText>나</S.MyProfileText>
      <S.MyProfileBox>
        <Image src={myProfile} alt="my_profile" width={75} height={75} placeholder="blur" />
        <div>
          <S.MyInfoBox>
            <p>이나영</p>
            <p>이디아 상앙점</p>
          </S.MyInfoBox>
          <S.MyPhoneText>010-0000-0000</S.MyPhoneText>
        </div>
        <S.MyPageButton>
          <button>6</button>
          <Image src={myPageIcon} alt="my_page_icon" width={19.64} height={26.84} />
        </S.MyPageButton>
      </S.MyProfileBox>
    </div>
  );
};

export default MyChatProfile;