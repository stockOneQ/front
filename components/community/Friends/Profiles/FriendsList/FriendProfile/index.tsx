import Image from 'next/image';
import checkedIcon from 'public/assets/icons/community/checked.svg';
import friendStockIcon from 'public/assets/icons/community/friendStockIcon.svg';
import friendStockIcGray from 'public/assets/icons/community/friendStockIcGray.svg';
import * as S from './style';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import FriendInfo from './FriendInfo';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface IFriendProfileProps {
  id: number;
  name: string;
  storeName: string;
  phoneNumber: string;
  onSetting: boolean;
  isStock: boolean;
  setIsPermitted: Dispatch<SetStateAction<number>>;
  setIsStock: Dispatch<SetStateAction<boolean>>;
  setDeleteItem: Dispatch<SetStateAction<number[]>>;
}

/** 나의 채팅 프로필 */
const FriendProfile = ({
  id,
  name,
  storeName,
  phoneNumber,
  onSetting,
  isStock,
  setIsPermitted,
  setIsStock,
  setDeleteItem,
}: IFriendProfileProps) => {
  const didMount = useRef(false); // 첫 렌더링 useEffect 실행 막기 위해
  const [isChecked, setIsChecked] = useState(false); // 각 개별 친구, 체크 여부
  const [isStockSelected, setIsStockSelected] = useState(false);

  const { query } = useRouter();
  const { friendID } = query;

  const deleteItemHandler = () => {
    setIsChecked(prev => !prev);

    if (isChecked) {
      return setDeleteItem(prev => prev.filter(item => ![id].includes(item)));
    }
    if (!isChecked) {
      return setDeleteItem(prev => [...prev, id]);
    }
  };

  const stockButtonHandler = () => {
    setIsStockSelected(prev => !prev);
    setIsStock(true);
  };

  useEffect(() => {
    if (didMount.current) {
      if (isChecked) {
        setIsPermitted(prev => (prev += 1));
      } else {
        setIsPermitted(perv => (perv -= 1));
      }
    } else {
      didMount.current = true;
    }
  }, [isChecked, setIsPermitted]);

  return (
    <S.FriendProfileBox className="friend-profile">
      {onSetting && (
        <S.CheckBoxButton checked={isChecked} onClick={deleteItemHandler}>
          <Image src={checkedIcon} alt="checked_icon" width={14} height={11} />
        </S.CheckBoxButton>
      )}
      <FriendInfo
        name={name}
        storeName={storeName}
        phoneNumber={phoneNumber}
        width={60}
        imgMarginRight="1.2rem"
      />
      <S.FriendPageButton onClick={stockButtonHandler}>
        <Link href={`/community/friends/stock/${id}`}>
          <Image
            src={
              id.toString() === friendID || friendID === undefined
                ? friendStockIcon
                : friendStockIcGray
            }
            alt="my_page_icon"
            width={19.64}
            height={26.84}
          />
        </Link>
      </S.FriendPageButton>
    </S.FriendProfileBox>
  );
};

export default FriendProfile;
