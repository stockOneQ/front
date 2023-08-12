import EachWaitingFriend from './EachWaitingFriend';
import * as S from '../style';
import { DUMMY_DATA } from 'components/community/Friends/Profiles/FriendsList';
import useScroll from 'hooks/useScroll';
import { useContext } from 'react';
import FriendsListContext from 'contexts/community/friends/FriendsListProvider.ts';

/** 대기중인 친구 */
const WaitingFriends = () => {
  const { hideScroll, scrollHandler } = useScroll();
  const { friendsList } = useContext(FriendsListContext);
  console.log('wh', friendsList);

  return (
    <div>
      <S.HeadParagraph>대기중인 친구 3</S.HeadParagraph>
      <S.EachWaitingFriendsBox hideScroll={hideScroll} onScroll={scrollHandler}>
        {DUMMY_DATA.map(({ id, name, location, phone }) => (
          <EachWaitingFriend
            key={id}
            name={name}
            location={location}
            phone={phone}
          />
        ))}
      </S.EachWaitingFriendsBox>
    </div>
  );
};

export default WaitingFriends;
