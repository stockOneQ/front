import Image from 'next/image';
import settingsIcon from 'public/assets/icons/community/settingsIcon.svg';
import * as S from './style';

/** 친구 목록 수 */
const FriendCount = () => {
  return (
    <S.FriendCountBox>
      <p>친구 목록 &nbsp; 68</p>
      <button>
        <Image src={settingsIcon} alt="settings_icon" width={20} height={20} />
      </button>
    </S.FriendCountBox>
  );
};

export default FriendCount;