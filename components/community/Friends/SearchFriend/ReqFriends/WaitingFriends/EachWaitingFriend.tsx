import CancelBtn from 'components/common/button/CancelBtn';
import FriendInfo from 'components/community/Friends/Profiles/FriendsList/FriendProfile/FriendInfo';
import * as S from '../style';

interface IEachWaitingFriendProps {
  name: string;
  location: string;
  phone: string;
}

/** 대기중인 친구 - 한 명 */
const EachWaitingFriend = ({ name, location, phone }: IEachWaitingFriendProps) => {
  return (
    <S.EachFriendBox className="each-friend">
      <FriendInfo name={name} location={location} phone={phone} width={45} imgMarginRight="1.7rem" />
      <CancelBtn disabled={false} label="요청취소" />
    </S.EachFriendBox>
  );
};

export default EachWaitingFriend;