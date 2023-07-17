import CancelBtn from 'components/common/button/CancelBtn';
import FriendInfo from 'components/community/Friends/Profiles/FriendsList/FriendProfile/FriendInfo';
import styled from 'styled-components';

const EachWaitingFriendBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

/** 대기중인 친구 - 한 명 */
const EachWaitingFriend = () => {
  return (
    <EachWaitingFriendBox className="each-friend">
      <FriendInfo />
      <CancelBtn disabled={false} label="요청취소" />
    </EachWaitingFriendBox>
  );
};

export default EachWaitingFriend;