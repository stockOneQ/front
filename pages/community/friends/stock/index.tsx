// http://localhost:3000/community/friends/stock

import Friends from 'components/community/Friends';
import FriendStock from 'components/community/Friends/FriendsRightContents/FriendStock';

/** community - 친구 재고 페이지 */
const FriendsPage = () => {
  return (
    <Friends>
      <FriendStock />
    </Friends>
  );
};

export default FriendsPage;
