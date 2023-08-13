import { IFriendsListContextProps } from 'contexts/community/friends/FriendsListProvider.ts';
import WaitingFriends from './WaitingFriends';
import WantingBefriends from './WantingBefriends';
import * as S from './style';
import Link from 'next/link';

interface IReqFriendsProps {
  waitingFriendsList: IFriendsListContextProps['friendsList'];
  reqFriendsList: IFriendsListContextProps['friendsList'];
}

/** 친구 신청 목록 화면 */
const ReqFriends = ({
  waitingFriendsList,
  reqFriendsList,
}: IReqFriendsProps) => {
  return (
    <S.ReqFriendsBox>
      <WaitingFriends waitingFriendsList={waitingFriendsList} />
      <WantingBefriends reqFriendsList={reqFriendsList} />
      <S.CloseBtn>
        <Link href="/community/friends/search">x</Link>
      </S.CloseBtn>
    </S.ReqFriendsBox>
  );
};

export default ReqFriends;
