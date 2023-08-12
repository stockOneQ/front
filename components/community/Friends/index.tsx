import styled from 'styled-components';
import Profiles from './Profiles';
import SearchFriend from './SearchFriend';
import { useState } from 'react';
import { IFriendsListProps } from '@Types/community/friends';

const CommunitySection = styled.section`
  display: flex;
  gap: 7.1rem;
`;

/** community - 친구 */
const Friends = ({ friendsList }: IFriendsListProps) => {
  const [reqFriends, setReqFriends] = useState(false);

  return (
    <CommunitySection>
      <Profiles setReqFriends={setReqFriends} friendsList={friendsList} />
      <SearchFriend reqFriends={reqFriends} setReqFriends={setReqFriends} />
    </CommunitySection>
  );
};

export default Friends;
