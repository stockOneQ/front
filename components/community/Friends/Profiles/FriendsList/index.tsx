import FriendsCount from './FriendsCount';
import FriendProfile from './FriendProfile';
import * as S from './style';
import { useState } from 'react';

/** 친구 목록 */
const FriendsList = () => {
  const [onSetting, setOnSetting] = useState(false);

  return (
    <div>
      <FriendsCount onSetting={onSetting} setOnSetting={setOnSetting} />
      <S.FriendList>
        <FriendProfile />
        <FriendProfile />
        <FriendProfile />
        <FriendProfile />
        <FriendProfile />
        <FriendProfile />
        <FriendProfile />
        <FriendProfile />
        <FriendProfile />
      </S.FriendList>
    </div>
  );
};

export default FriendsList;