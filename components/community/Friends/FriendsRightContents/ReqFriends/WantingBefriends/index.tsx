import EachWantingFriend from './EachWantingFriend';
import * as S from '../style';
import useScroll from 'hooks/useScroll';
import { FriendsListType } from '@Types/community/friends/friendsList';

interface IWantingFriendsProps {
  reqFriendsList: FriendsListType['friendsList'];
}

/** 친구 신청 목록 */
const WantingBefriends = ({ reqFriendsList }: IWantingFriendsProps) => {
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
