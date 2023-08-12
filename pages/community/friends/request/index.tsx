// http://localhost:3000/community/friends/request

import Friends from 'components/community/Friends';
import ReqFriends from 'components/community/Friends/FriendsRightContents/ReqFriends';

/** community - 친구 요청 페이지 */
const FriendsPage = () => {
  return (
    <Friends>
      <ReqFriends />
    </Friends>
  );
};

export default FriendsPage;
