import AcceptBtn from 'components/common/button/AcceptBtn';
import RejectBtn from 'components/common/button/RejectBtn';
import FriendInfo from 'components/community/Friends/Profiles/FriendsList/FriendProfile/FriendInfo';
import * as S from '../style';

/** 친구 신청 목록 - 한 명 */
const EachWantingFriend = () => {
  return (
    <S.EachFriendBox className="each-friend">
      <FriendInfo width={45} imgMarginRight="1.7rem" />
      <div>
        <RejectBtn label="거절" />
        <AcceptBtn disabled={false} label="수락" />
      </div>
    </S.EachFriendBox>
  );
};

export default EachWantingFriend;