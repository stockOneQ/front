import FriendInfo from 'components/community/Friends/Profiles/FriendsList/FriendProfile/FriendInfo';
import Image from 'next/image';
import friendIcon from 'public/assets/icons/community/friendNow.svg';
import * as S from './style';

interface IFriendItemProps {
  name: string;
  storeName: string;
  phoneNumber: string;
}

/** 친구 개별 component */
const FriendItem = ({ name, storeName, phoneNumber }: IFriendItemProps) => {
  return (
    <S.FriendItemBox className="friend-item">
      <FriendInfo
        name={name}
        storeName={storeName}
        phoneNumber={phoneNumber}
        width={60}
        imgMarginRight="1.2rem"
      />
      <button>
        <Image src={friendIcon} alt="friend_icon" width={32} height={31} />
      </button>
    </S.FriendItemBox>
  );
};

export default FriendItem;
