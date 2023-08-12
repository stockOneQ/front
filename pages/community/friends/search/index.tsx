// http://localhost:3000/community/friends/search

import Friends from 'components/community/Friends';
import SearchFriend from 'components/community/Friends/FriendsRightContents/SearchFriend';

/** community - 친구 검색 페이지 */
const FriendsPage = () => {
  return (
    <Friends>
      <SearchFriend />
    </Friends>
  );
};

export default FriendsPage;
