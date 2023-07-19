import EachWaitingFriend from './EachWaitingFriend';
import * as S from '../style';
import { useEffect, useState } from 'react';
import { DUMMY_DATA } from 'components/community/Friends/Profiles/FriendsList';

/** 대기중인 친구 */
const WaitingFriends = () => {
  const [isScroll, setIsScroll] = useState(-100);
  const [hideScroll, setHideScroll] = useState(true);

  const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    setHideScroll(false);
    setIsScroll(e.currentTarget.scrollTop);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideScroll(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isScroll])

  return (
    <div>
      <S.HeadParagraph>대기중인 친구 3</S.HeadParagraph>
      <S.EachWaitingFriendsBox hideScroll={hideScroll} onScroll={scrollHandler}>
        {DUMMY_DATA.map(({ id, name, location, phone }) => (
          <EachWaitingFriend key={id} name={name} location={location} phone={phone} />
        ))}
      </S.EachWaitingFriendsBox>
    </div>
  );
};

export default WaitingFriends;