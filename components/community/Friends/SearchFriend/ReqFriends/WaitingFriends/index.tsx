import EachWaitingFriend from './EachWaitingFriend';
import * as S from '../style';

/** 대기중인 친구 */
const WaitingFriends = () => {
  return (
    <div>
      <S.HeadParagraph>대기중인 친구 3</S.HeadParagraph>
      <S.EachWaitingFriendsBox>
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