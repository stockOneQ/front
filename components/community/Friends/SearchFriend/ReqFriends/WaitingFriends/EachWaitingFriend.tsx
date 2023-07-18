import CancelBtn from 'components/common/button/CancelBtn';
import FriendInfo from 'components/community/Friends/Profiles/FriendsList/FriendProfile/FriendInfo';
import * as S from '../style';

/** 대기중인 친구 - 한 명 */
const EachWaitingFriend = () => {
  return (
    <S.EachFriendBox className="each-friend">
      <FriendInfo width={45} imgMarginRight="1.7rem" />
      <CancelBtn disabled={false} label="요청취소" />
    </S.EachFriendBox>
  );
};

export default EachWaitingFriend;