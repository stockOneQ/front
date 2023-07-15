import Image from 'next/image';
import friendProfile from 'public/assets/imgs/community/friendProfile.png';
import friendStockIcon from 'public/assets/icons/community/friendStockIcon.svg';
import myPageIcon from 'public/assets/icons/community/myPageIcon.svg';
import * as S from './style';

/** 나의 채팅 프로필 */
const FriendProfile = () => {
  return (
    <div className="friend_profile">
      <S.FriendProfileBox>
        <Image src={friendProfile} alt="my_profile" width={60} height={60} placeholder="blur" />
        <div>
          <S.FriendInfoBox>
            <p>김아리</p>
            <p>이디아 상앙점</p>
          </S.FriendInfoBox>
          <S.FriendPhoneText>010-0000-0000</S.FriendPhoneText>
        </div>
        <S.FriendPageButton>
          <Image src={friendStockIcon} alt="my_page_icon" width={19.64} height={26.84} />
        </S.FriendPageButton>
      </S.FriendProfileBox>
    </div>
  );
};

export default FriendProfile;