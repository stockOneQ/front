import FriendInfo from 'components/community/Friends/Profiles/FriendsList/FriendProfile/FriendInfo';
import Image from 'next/image';
import connectionStatusWaiting from 'public/assets/icons/community/connectionStatusWaiting.svg';
import connectionStatusAdd from 'public/assets/icons/community/connectionStatusAdd.svg';
import connectionStatusFriend from 'public/assets/icons/community/connectionStatusFriend.svg';
import * as S from './style';
import { API } from 'pages/api/api';
import { useRouter } from 'next/router';

interface IFriendItemProps {
  id: number;
  name: string;
  storeName: string;
  phoneNumber: string;
  relationStatus: string;
}

/** 친구 개별 component */
const FriendItem = ({
  id,
  name,
  storeName,
  phoneNumber,
  relationStatus,
}: IFriendItemProps) => {
  const router = useRouter();

  const requestHandler = async () => {
    if (relationStatus === '무관') {
      await API.post(`/api/friend/request/${id}`);

      return router.reload();
    }
  };

  return (
    <S.FriendItemBox className="friend-item">
      <FriendInfo
        name={name}
        storeName={storeName}
        phoneNumber={phoneNumber}
        width={60}
        imgMarginRight="1.2rem"
      />
      <button onClick={requestHandler}>
        <Image
          src={
            relationStatus === '요청'
              ? connectionStatusWaiting
              : relationStatus === '무관'
              ? connectionStatusAdd
              : relationStatus === '수락'
              ? connectionStatusFriend
              : null
          }
          alt="friend_icon"
          width={32}
          height={31}
        />
      </button>
    </S.FriendItemBox>
  );
};

export default FriendItem;
