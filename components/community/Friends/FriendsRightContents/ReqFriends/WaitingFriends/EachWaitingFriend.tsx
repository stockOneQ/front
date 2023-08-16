import CancelBtn from 'components/common/button/CancelBtn';
import FriendInfo from 'components/community/Friends/Profiles/FriendsList/FriendProfile/FriendInfo';
import * as S from '../style';
import { API } from 'pages/api/api';
import { useRouter } from 'next/router';

interface IEachWaitingFriendProps {
  id: number;
  name: string;
  storeName: string;
  phoneNumber: string;
}

/** 대기중인 친구 - 한 명 */
const EachWaitingFriend = ({
  id,
  name,
  storeName,
  phoneNumber,
}: IEachWaitingFriendProps) => {
  const router = useRouter();

  const cancelHandler = async () => {
    await API.delete(`/api/friend/request/${id}`);
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
      <CancelBtn disabled={false} label="요청취소" onClick={cancelHandler} />
    </S.EachFriendBox>
  );
};

export default EachWaitingFriend;
