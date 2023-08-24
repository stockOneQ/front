import FriendProfile from './FriendProfile';
import FriendsCount from './FriendsCount';
import * as S from './style';
import { useState } from 'react';
import { FriendsListType } from '@Types/community/friends/friendsList';

interface IFriendsListProps {
  friendsList: FriendsListType['friendsList'];
}

/** 친구 목록 */
const FriendsList = ({ friendsList }: IFriendsListProps) => {
  // 삭제, 취소 버튼 등장
  const [onSetting, setOnSetting] = useState(false);
  // 삭제할 친구 리스트
  const [deleteItem, setDeleteItem] = useState<number[]>([]);

  return (
    <>
      <FriendsCount
        count={friendsList?.length || 0}
        onSetting={onSetting}
        deleteItem={deleteItem}
        setOnSetting={setOnSetting}
        setDeleteItem={setDeleteItem}
      />
      <S.FriendList>
        {friendsList?.map(({ id, name, storeName, phoneNumber }) => (
          <FriendProfile
            key={id}
            id={id}
            name={name}
            storeName={storeName}
            phoneNumber={phoneNumber}
            onSetting={onSetting}
            setDeleteItem={setDeleteItem}
          />
        ))}
      </S.FriendList>
    </>
  );
};

export default FriendsList;
