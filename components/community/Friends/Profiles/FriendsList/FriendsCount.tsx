import Image from 'next/image';
import settingsIcon from 'public/assets/icons/community/settingsIcon.svg';
import * as S from './style';
import AcceptBtn from 'components/common/button/AcceptBtn';
import RejectBtn from 'components/common/button/RejectBtn';
import { Dispatch, SetStateAction } from 'react';
import { API } from 'pages/api/api';
import { useRouter } from 'next/router';

interface IFriendsCount {
  count: number;
  onSetting: boolean;
  isPermitted: number;
  deleteItem: number[];
  setOnSetting: Dispatch<SetStateAction<boolean>>;
}

/** 친구 목록 수 */
const FriendsCount = ({
  count,
  onSetting,
  isPermitted,
  deleteItem,
  setOnSetting,
}: IFriendsCount) => {
  const router = useRouter();

  const deleteHandler = () => {
    setOnSetting(false);
    deleteItem.map(id => API.delete(`/api/friend/${id}`));
    router.push('/community/friends/search');
  };

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
        </div>
      )}
    </S.FriendsCountBox>
  );
};

export default FriendsCount;
