import Card from 'components/common/Card';
import FriendsList from './FriendsList';
import MyChatProfile from './MyChatProfile';
<<<<<<< HEAD
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
=======
import { Dispatch, SetStateAction } from 'react';

export interface IProfilesProps {
  setReqFriends: Dispatch<SetStateAction<boolean>>;
}

/** 친구 목록 */
const Profiles = ({ setReqFriends }: IProfilesProps) => {
  return (
    <Card width='38.5rem' height='73.8rem'>
      <MyChatProfile setReqFriends={setReqFriends} />
      <FriendsList />
>>>>>>> ff4bb25 (Merge branch develop into main)
    </Card>
  );
};

<<<<<<< HEAD
export default Profiles;
=======
export default Profiles;
>>>>>>> ff4bb25 (Merge branch develop into main)
