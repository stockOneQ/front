import EachWaitingFriend from './EachWaitingFriend';
import * as S from '../style';
import useScroll from 'hooks/useScroll';
import { useContext } from 'react';
import FriendsListContext from 'contexts/community/friends/FriendsListProvider.ts';

/** 대기중인 친구 */
const WaitingFriends = () => {
  const { waitingFriendsList } = useContext(FriendsListContext);
  const { hideScroll, scrollHandler } = useScroll();

  return (
    <div>
      <S.HeadParagraph>
        대기중인 친구 {waitingFriendsList?.length || 0}
      </S.HeadParagraph>
      <S.EachWaitingFriendsBox hideScroll={hideScroll} onScroll={scrollHandler}>
        {waitingFriendsList &&
          waitingFriendsList?.map(({ id, name, storeName, phoneNumber }) => (
            <EachWaitingFriend
              key={id}
              id={id}
              name={name}
              storeName={storeName}
              phoneNumber={phoneNumber}
            />
          ))}
      </S.EachWaitingFriendsBox>
    </div>
  );
};

export default WaitingFriends;
