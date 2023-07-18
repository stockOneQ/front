import EachWantingFriend from './EachWantingFriend';
import * as S from '../style';

/** 친구 신청 목록 */
const WantingBefriends = () => {
  return (
    <div>
      <S.HeadParagraph>친구 신청 목록 6</S.HeadParagraph>
      <S.EachWantingFriendsBox>
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