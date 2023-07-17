import Card from 'components/common/Card';
import FriendsList from './FriendsList';
import MyChatProfile from './MyChatProfile';

/** 친구 목록 */
const Profiles = () => {
  return (
    <Card width="38.5rem">
      <MyChatProfile />
      <FriendsList />
    </Card>
  );
};

export default Profiles;