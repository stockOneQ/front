import EachWaitingFriend from './EachWaitingFriend';
import * as S from '../style';
import { useEffect, useState } from 'react';

/** 대기중인 친구 */
const WaitingFriends = () => {
  const [isScroll, setIsScroll] = useState(-100);
  const [hideScroll, setHideScroll] = useState(true);

  const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    setIsScroll(e.currentTarget.scrollTop);
  }

  useEffect(() => {
    setHideScroll(false);

    const timer = setTimeout(() => {
      setHideScroll(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isScroll])

  return (
    <div>
      <S.HeadParagraph>대기중인 친구 3</S.HeadParagraph>
      <S.EachWaitingFriendsBox hideScroll={hideScroll} onScroll={scrollHandler}>
        <EachWaitingFriend />
        <EachWaitingFriend />
        <EachWaitingFriend />
        <EachWaitingFriend />
        <EachWaitingFriend />
        <EachWaitingFriend />
        <EachWaitingFriend />
      </S.EachWaitingFriendsBox>
    </div>
  );
};

export default WaitingFriends;