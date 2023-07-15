import styled from 'styled-components';
import Profiles from './Profiles';
import SearchFriend from './SearchFriend';

const CommunitySection = styled.section`
  display: flex;
  gap: 7.1rem;
`

/** community - 친구 */
const Friends = () => {
  return (
    <CommunitySection>
      <Profiles />
      <SearchFriend />
    </CommunitySection>
  );
};

export default Friends;