import styled from 'styled-components';
import Profiles from './Profiles';
import { useState } from 'react';
import Card from 'components/common/Card';

const CommunitySection = styled.section`
  display: flex;
  gap: 7.1rem;
`;

interface IFriendsProps {
  children?: React.ReactNode;
}

/** community - 친구 */
const Friends = ({ children }: IFriendsProps) => {
  const [isFriendStock, setIsFriendStock] = useState(false);
  const [isReqFriends, setIsReqFriends] = useState(false);
  const [isSearchFriend, setIsSearchFriend] = useState(false);

  return (
    <CommunitySection>
      <Profiles setIsReqFriends={setIsReqFriends} />
      <Card width="65.9rem" height="73.8rem">
        {children}
      </Card>
    </CommunitySection>
  );
};

export default Friends;
