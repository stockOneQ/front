import Card from 'components/common/Card';
import FriendsList from './FriendsList';
import MyChatProfile from './MyChatProfile';
import { FriendsListType } from '@Types/community/friends/friendsList';

interface IProfilesProps {
  friendsList: FriendsListType['friendsList'];
}
/** 친구 목록 */
const Profiles = ({ friendsList }: IProfilesProps) => {
  return (
    <Card width="38.5rem" height="73.8rem">
      <MyChatProfile />
      <FriendsList friendsList={friendsList} />
    </Card>
  );
};

export default Profiles;
