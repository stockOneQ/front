import Image from 'next/image';
import settingsIcon from 'public/assets/icons/community/settingsIcon.svg';
import * as S from './style';
import AcceptBtn from 'components/common/button/AcceptBtn';
import RejectBtn from 'components/common/button/RejectBtn';
import { Dispatch, SetStateAction } from 'react';
<<<<<<< HEAD
import { API } from 'pages/api/api';
import { useRouter } from 'next/router';
=======
>>>>>>> ff4bb25 (Merge branch develop into main)

interface IFriendsCount {
  count: number;
  onSetting: boolean;
<<<<<<< HEAD
  deleteItem: number[];
  setOnSetting: Dispatch<SetStateAction<boolean>>;
  setDeleteItem: Dispatch<SetStateAction<number[]>>;
=======
  isPermitted: number;
  setOnSetting: Dispatch<SetStateAction<boolean>>;
>>>>>>> ff4bb25 (Merge branch develop into main)
}

/** 친구 목록 수 */
const FriendsCount = ({
  count,
  onSetting,
<<<<<<< HEAD
  deleteItem,
  setOnSetting,
  setDeleteItem,
}: IFriendsCount) => {
  const router = useRouter();

  const deleteHandler = () => {
    setOnSetting(false);
    deleteItem.map(id => API.delete(`/api/friend/${id}`));
    setDeleteItem([]);
    router.push('/community/friends/search');
    router.reload();
  };

=======
  isPermitted,
  setOnSetting,
}: IFriendsCount) => {
>>>>>>> ff4bb25 (Merge branch develop into main)
  return (
    <S.FriendsCountBox onSetting={onSetting}>
      <p>친구 목록 &nbsp; {count}</p>

      {/* 설정 버튼 */}
      {!onSetting && (
        <button
          onClick={() => {
            setOnSetting(true);
          }}
        >
          <Image
            src={settingsIcon}
            alt="settings_icon"
            width={20}
            height={20}
          />
        </button>
      )}

      {/* 친구 삭제 버튼 */}
      {onSetting && (
<<<<<<< HEAD
        <div>
          <RejectBtn
            label="취소"
            onClick={() => {
              setOnSetting(false);
            }}
          />
          <AcceptBtn
            label="삭제"
            onClick={deleteHandler}
            disabled={deleteItem.length === 0}
          />
=======
        <div
          onClick={() => {
            setOnSetting(false);
          }}
        >
          <RejectBtn label="취소" />
          <AcceptBtn label="삭제" disabled={isPermitted <= 0} />
>>>>>>> ff4bb25 (Merge branch develop into main)
        </div>
      )}
    </S.FriendsCountBox>
  );
};

export default FriendsCount;
