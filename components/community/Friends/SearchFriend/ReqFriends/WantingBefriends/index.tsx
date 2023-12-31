import EachWantingFriend from './EachWantingFriend';
import * as S from '../style';
import { useEffect, useState } from 'react';
import { DUMMY_DATA } from 'components/community/Friends/Profiles/FriendsList';

/** 친구 신청 목록 */
const WantingBefriends = () => {
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
      <S.HeadParagraph>친구 신청 목록 6</S.HeadParagraph>
      <S.EachWantingFriendsBox hideScroll={hideScroll} onScroll={scrollHandler}>
        {DUMMY_DATA.map(({ id, name, location, phone }) => (
          <EachWantingFriend key={id} name={name} location={location} phone={phone} />
        ))}
      </S.EachWantingFriendsBox>
    </div>
  );
};

export default WantingBefriends;