import EachWantingFriend from './EachWantingFriend';
import * as S from '../style';
import { useEffect, useState } from 'react';

/** 친구 신청 목록 */
const WantingBefriends = () => {
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
      <S.HeadParagraph>친구 신청 목록 6</S.HeadParagraph>
      <S.EachWantingFriendsBox hideScroll={hideScroll} onScroll={scrollHandler}>
        <EachWantingFriend />
        <EachWantingFriend />
        <EachWantingFriend />
        <EachWantingFriend />
        <EachWantingFriend />
        <EachWantingFriend />
        <EachWantingFriend />
      </S.EachWantingFriendsBox>
    </div>
  );
};

export default WantingBefriends;