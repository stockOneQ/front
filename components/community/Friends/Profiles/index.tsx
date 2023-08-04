import Card from 'components/common/Card';
import FriendsList from './FriendsList';
import MyChatProfile from './MyChatProfile';
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
    </Card>
  );
};

export default Profiles;