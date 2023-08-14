import WaitingFriends from './WaitingFriends';
import WantingBefriends from './WantingBefriends';
import * as S from './style';
import Link from 'next/link';

/** 친구 신청 목록 화면 */
const ReqFriends = () => {
  return (
    <S.ReqFriendsBox>
      <WaitingFriends />
      <WantingBefriends />
      <S.CloseBtn>
        <Link href="/community/friends/search">x</Link>
      </S.CloseBtn>
    </S.ReqFriendsBox>
  );
};

export default ReqFriends;
