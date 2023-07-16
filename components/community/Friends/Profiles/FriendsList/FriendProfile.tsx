import Image from 'next/image';
import friendProfile from 'public/assets/imgs/community/friendProfile.png';
import checkedIcon from 'public/assets/icons/community/checked.svg';
import friendStockIcon from 'public/assets/icons/community/friendStockIcon.svg';
import * as S from './style';
import { useState } from 'react';

interface IFriendProfileProps {
  onSetting: boolean;
}

/** 나의 채팅 프로필 */
const FriendProfile = ({ onSetting }: IFriendProfileProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <S.FriendsBox>
      <S.FriendProfileBox>
        {onSetting && (
          <S.CheckBoxButton checked={checked} onClick={() => setChecked(prev => !prev)}>
            <Image src={checkedIcon} alt="checked_icon" width={14} height={11} />
          </S.CheckBoxButton>
        )}
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
    </S.FriendsBox>
  );
};

export default FriendProfile;