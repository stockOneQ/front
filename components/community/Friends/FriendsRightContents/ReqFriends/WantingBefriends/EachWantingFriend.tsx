import AcceptBtn from 'components/common/button/AcceptBtn';
import RejectBtn from 'components/common/button/RejectBtn';
import FriendInfo from 'components/community/Friends/Profiles/FriendsList/FriendProfile/FriendInfo';
import * as S from '../style';
import { API } from 'pages/api/api';
import { useRouter } from 'next/router';

interface IEachWantingFriendProps {
  id: number;
  name: string;
  storeName: string;
  phoneNumber: string;
}

/** 친구 신청 목록 - 한 명 */
const EachWantingFriend = ({
  id,
  name,
  storeName,
  phoneNumber,
}: IEachWantingFriendProps) => {
  const router = useRouter();

  const rejectHandler = async () => {
    await API.delete(`/api/friend/reject/${id}`);
    router.reload();
  };

  const acceptHandler = async () => {
    await API.patch(`/api/friend/accept/${id}`);
    router.reload();
  };

  return (
    <S.EachFriendBox className="each-friend">
      <FriendInfo
        name={name}
        storeName={storeName}
        phoneNumber={phoneNumber}
        width={45}
        imgMarginRight="1.7rem"
      />
      <div>
        <RejectBtn label="거절" onClick={rejectHandler} />
        <AcceptBtn disabled={false} label="수락" onClick={acceptHandler} />
      </div>
    </S.EachFriendBox>
  );
};

export default EachWantingFriend;
