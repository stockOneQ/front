import WaitingFriends from './WaitingFriends';
import WantingBefriends from './WantingBefriends';
import styled from 'styled-components';

const ReqFriendsBox = styled.div`
  padding: 3.2rem 2rem 4rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
`

/** 친구 신청 목록 화면 */
const ReqFriends = () => {
  return (
    <ReqFriendsBox>
      <WaitingFriends/>
      <WantingBefriends />
    </ReqFriendsBox>
  );
};

export default ReqFriends;