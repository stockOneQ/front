import AcceptBtn from 'components/common/button/AcceptBtn';
import RejectBtn from 'components/common/button/RejectBtn';
import FriendInfo from 'components/community/Friends/Profiles/FriendsList/FriendProfile/FriendInfo';
import * as S from '../style';

interface IEachWantingFriendProps {
  name: string;
  storeName: string;
  phoneNumber: string;
}

/** 친구 신청 목록 - 한 명 */
const EachWantingFriend = ({
  name,
  storeName,
  phoneNumber,
}: IEachWantingFriendProps) => {
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
        <RejectBtn label="거절" />
        <AcceptBtn disabled={false} label="수락" />
      </div>
    </S.EachFriendBox>
  );
};

export default EachWantingFriend;
