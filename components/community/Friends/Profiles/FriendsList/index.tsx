import FriendCount from './FriendCount';
import FriendProfile from './FriendProfile';
import * as S from './style';

/** 친구 목록 */
const FriendsList = () => {
  return (
    <div>
      <FriendCount />
      <S.FriendList>
        <FriendProfile />
        <FriendProfile />
        <FriendProfile />
        <FriendProfile />
        <FriendProfile />
        <FriendProfile />
        <FriendProfile />
        <FriendProfile />
        <FriendProfile />
      </S.FriendList>
    </div>
  );
};

export default FriendsList;