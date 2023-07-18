import AcceptBtn from 'components/common/button/AcceptBtn';
import RejectBtn from 'components/common/button/RejectBtn';
import FriendInfo from 'components/community/Friends/Profiles/FriendsList/FriendProfile/FriendInfo';
import styled from 'styled-components';

const EachWantingFriendBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

/** 친구 신청 목록 - 한 명 */
const EachWantingFriend = () => {
  return (
    <EachWantingFriendBox className="each-friend">
      <FriendInfo width={45} imgMarginRight="1.7rem" />
      <div>
        <RejectBtn label="거절" />
        <AcceptBtn disabled={false} label="수락" />
      </div>
    </EachWantingFriendBox>
  );
};

export default EachWantingFriend;