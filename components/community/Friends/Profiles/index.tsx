import Card from 'components/common/Card';
import FriendsList from './FriendsList';
import MyChatProfile from './MyChatProfile';
import { Dispatch, SetStateAction } from 'react';
import { IFriendsListProps } from '@Types/community/friends';

interface IProfilesProps extends IFriendsListProps {
  setReqFriends: Dispatch<SetStateAction<boolean>>;
}

/** 친구 목록 */
const Profiles = ({ setReqFriends, friendsList }: IProfilesProps) => {
  return (
    <Card width="38.5rem" height="73.8rem">
      <MyChatProfile setReqFriends={setReqFriends} />
      <FriendsList friendsList={friendsList} />
    </Card>
  );
};

export default Profiles;
