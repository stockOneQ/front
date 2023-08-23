import Profiles from './Profiles';
import Card from 'components/common/Card';
import * as S from './style';

interface IFriendsProps {
  children?: React.ReactNode;
}

/** community - 친구 */
const Friends = ({ children }: IFriendsProps) => {
  return (
    <S.CommunitySection>
      <Profiles />
      <Card width="65.9rem" height="73.8rem">
        {children}
      </Card>
    </S.CommunitySection>
  );
};

export default Friends;
