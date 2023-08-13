import Image from 'next/image';
import checkedIcon from 'public/assets/icons/community/checked.svg';
import friendStockIcon from 'public/assets/icons/community/friendStockIcon.svg';
import friendStockIcGray from 'public/assets/icons/community/friendStockIcGray.svg';
import * as S from './style';
<<<<<<< HEAD
import { Dispatch, SetStateAction, useState } from 'react';
import FriendInfo from './FriendInfo';
import Link from 'next/link';
import { useRouter } from 'next/router';
=======
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import FriendInfo from './FriendInfo';
>>>>>>> ff4bb25 (Merge branch develop into main)

interface IFriendProfileProps {
  id: number;
  name: string;
<<<<<<< HEAD
  storeName: string;
  phoneNumber: string;
  onSetting: boolean;
=======
  location: string;
  phone: string;
  onSetting: boolean;
  isStock: boolean;
  setIsPermitted: Dispatch<SetStateAction<number>>;
  setIsStock: Dispatch<SetStateAction<boolean>>;
>>>>>>> ff4bb25 (Merge branch develop into main)
  setDeleteItem: Dispatch<SetStateAction<number[]>>;
}

/** 나의 채팅 프로필 */
const FriendProfile = ({
  id,
  name,
<<<<<<< HEAD
  storeName,
  phoneNumber,
  onSetting,
  setDeleteItem,
}: IFriendProfileProps) => {
  const [isChecked, setIsChecked] = useState(false); // 각 개별 친구, 체크 여부

  const { query } = useRouter();
  const { friendID } = query;
=======
  location,
  phone,
  onSetting,
  isStock,
  setIsPermitted,
  setIsStock,
  setDeleteItem,
}: IFriendProfileProps) => {
  const didMount = useRef(false); // 첫 렌더링 useEffect 실행 막기 위해

  const [isChecked, setIsChecked] = useState(false); // 각 개별 친구, 체크 여부
  const [isStockSelected, setIsStockSelected] = useState(false);
>>>>>>> ff4bb25 (Merge branch develop into main)

  const deleteItemHandler = () => {
    setIsChecked(prev => !prev);

    if (isChecked) {
      return setDeleteItem(prev => prev.filter(item => ![id].includes(item)));
    }
    if (!isChecked) {
      return setDeleteItem(prev => [...prev, id]);
    }
  };

<<<<<<< HEAD
=======
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

>>>>>>> ff4bb25 (Merge branch develop into main)
  return (
    <S.FriendProfileBox className="friend-profile">
      {onSetting && (
        <S.CheckBoxButton checked={isChecked} onClick={deleteItemHandler}>
          <Image src={checkedIcon} alt="checked_icon" width={14} height={11} />
        </S.CheckBoxButton>
      )}
      <FriendInfo
        name={name}
<<<<<<< HEAD
        storeName={storeName}
        phoneNumber={phoneNumber}
        width={60}
        imgMarginRight="1.2rem"
      />
      <S.FriendPageButton>
        <Link href={`/community/friends/stock/${id}`}>
          <Image
            src={
              id.toString() === friendID || friendID === undefined
                ? friendStockIcon
                : friendStockIcGray
            }
=======
        location={location}
        phone={phone}
        width={60}
        imgMarginRight="1.2rem"
      />
      <S.FriendPageButton onClick={stockButtonHandler}>
        {((isStockSelected && isStock) || !isStock) && (
          <Image
            src={friendStockIcon}
>>>>>>> ff4bb25 (Merge branch develop into main)
            alt="my_page_icon"
            width={19.64}
            height={26.84}
          />
<<<<<<< HEAD
        </Link>
=======
        )}
        {!isStockSelected && isStock && (
          <Image
            src={friendStockIcGray}
            alt="my_page_icon_black"
            width={19.64}
            height={26.84}
          />
        )}
>>>>>>> ff4bb25 (Merge branch develop into main)
      </S.FriendPageButton>
    </S.FriendProfileBox>
  );
};

export default FriendProfile;
