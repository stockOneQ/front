import FriendsCount from './FriendsCount';
import FriendProfile from './FriendProfile';
import * as S from './style';
import { useState } from 'react';

/** 친구 목록 */
const FriendsList = () => {
  /** 삭제, 취소 버튼 등장 */
  const [onSetting, setOnSetting] = useState(false);
  /** 삭제 버튼 허용 */
  const [isPermitted, setIsPermitted] = useState(9); // 일단 9(친구 수)로 하드 코딩
  
  return (
    <div>
      <FriendsCount onSetting={onSetting} isPermitted={isPermitted} setOnSetting={setOnSetting} />
      <S.FriendList>
        <FriendProfile onSetting={onSetting} setIsPermitted={setIsPermitted} />
        <FriendProfile onSetting={onSetting} setIsPermitted={setIsPermitted} />
        <FriendProfile onSetting={onSetting} setIsPermitted={setIsPermitted} />
        <FriendProfile onSetting={onSetting} setIsPermitted={setIsPermitted} />
        <FriendProfile onSetting={onSetting} setIsPermitted={setIsPermitted} />
        <FriendProfile onSetting={onSetting} setIsPermitted={setIsPermitted} />
        <FriendProfile onSetting={onSetting} setIsPermitted={setIsPermitted} />
        <FriendProfile onSetting={onSetting} setIsPermitted={setIsPermitted} />
        <FriendProfile onSetting={onSetting} setIsPermitted={setIsPermitted} />
      </S.FriendList>
    </div>
  );
};

export default FriendsList;