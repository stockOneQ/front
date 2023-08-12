import Card from 'components/common/Card';
import FriendStock from './FriendStock';
import ReqFriends from './ReqFriends';
import SearchFriend from './SearchFriend';

/** community - 친구 화면 오른쪽 컨텐츠들 */
const FriendsRightContents = () => {
  return (
    <Card width="65.9rem" height="73.8rem">
      <FriendStock />
      <ReqFriends />
      <SearchFriend />
    </Card>
  );
};

export default FriendsRightContents;
