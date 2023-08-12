import EachWantingFriend from './EachWantingFriend';
import * as S from '../style';
import { DUMMY_DATA } from 'components/community/Friends/Profiles/FriendsList';
import useScroll from 'hooks/useScroll';

/** 친구 신청 목록 */
const WantingBefriends = () => {
  const { hideScroll, scrollHandler } = useScroll();

  return (
    <div>
      <S.HeadParagraph>친구 신청 목록 6</S.HeadParagraph>
      <S.EachWantingFriendsBox hideScroll={hideScroll} onScroll={scrollHandler}>
        {DUMMY_DATA.map(({ id, name, location, phone }) => (
          <EachWantingFriend
            key={id}
            name={name}
            location={location}
            phone={phone}
          />
        ))}
      </S.EachWantingFriendsBox>
    </div>
  );
};

export default WantingBefriends;
