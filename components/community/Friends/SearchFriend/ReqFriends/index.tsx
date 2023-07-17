import { Dispatch, SetStateAction } from 'react';
import WaitingFriends from './WaitingFriends';
import WantingBefriends from './WantingBefriends';
import * as S from './style';

interface IReqFriendsProps {
  setReqFriends: Dispatch<SetStateAction<boolean>>;
}

/** 친구 신청 목록 화면 */
const ReqFriends = ({ setReqFriends }: IReqFriendsProps) => {
  return (
    <S.ReqFriendsBox>
      <WaitingFriends/>
      <WantingBefriends />
      <S.CloseBtn onClick={() => setReqFriends(false)}>x</S.CloseBtn>
    </S.ReqFriendsBox>
  );
};

export default ReqFriends;