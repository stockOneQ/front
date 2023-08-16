import EachWantingFriend from './EachWantingFriend';
import * as S from '../style';
import useScroll from 'hooks/useScroll';
import { useContext } from 'react';
import FriendsListContext from 'contexts/community/friends/FriendsListProvider.ts';

/** 친구 신청 목록 */
const WantingBefriends = () => {
  const { reqFriendsList } = useContext(FriendsListContext);
  const { hideScroll, scrollHandler } = useScroll();

  return (
    <div>
      <S.HeadParagraph>
        친구 신청 목록 {reqFriendsList?.length || 0}
      </S.HeadParagraph>
      <S.EachWantingFriendsBox hideScroll={hideScroll} onScroll={scrollHandler}>
        {reqFriendsList &&
          reqFriendsList.map(({ id, name, storeName, phoneNumber }) => (
            <EachWantingFriend
              key={id}
              id={id}
              name={name}
              storeName={storeName}
              phoneNumber={phoneNumber}
            />
          ))}
      </S.EachWantingFriendsBox>
    </div>
  );
};

export default WantingBefriends;
