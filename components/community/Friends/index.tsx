import styled from 'styled-components';
import Profiles from './Profiles';
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
  return (
    <CommunitySection>
      <Profiles />
      <Card width="65.9rem" height="73.8rem">
        {children}
      </Card>
    </CommunitySection>
  );
};

export default Friends;
