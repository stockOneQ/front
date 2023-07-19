import Image from 'next/image';
import checkedIcon from 'public/assets/icons/community/checked.svg';
import friendStockIcon from 'public/assets/icons/community/friendStockIcon.svg';
import * as S from './style';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import FriendInfo from './FriendInfo';

interface IFriendProfileProps {
  onSetting: boolean;
  setIsPermitted: Dispatch<SetStateAction<number>>;
}

/** 나의 채팅 프로필 */
const FriendProfile = ({ onSetting, setIsPermitted }: IFriendProfileProps) => {
  const didMount = useRef(false); // 첫 렌더링 useEffect 실행 막기 위해

  const [isChecked, setIsChecked] = useState(false); // 각 개별 친구, 체크 여부

  useEffect(() => {
    if (didMount.current) {
      if (isChecked) {
        setIsPermitted(prev => prev += 1);
      } else {
        setIsPermitted(perv => perv -= 1);
      };
    } else {
      didMount.current = true;
    }
  }, [isChecked, setIsPermitted]);

  return (
    <S.FriendProfileBox className="friend-profile">
      {onSetting && (
        <S.CheckBoxButton checked={isChecked} onClick={() => setIsChecked(prev => !prev)}>
          <Image src={checkedIcon} alt="checked_icon" width={14} height={11} />
        </S.CheckBoxButton>
      )}
      <FriendInfo />
      <S.FriendPageButton>
        <Image src={friendStockIcon} alt="my_page_icon" width={19.64} height={26.84} />
      </S.FriendPageButton>
    </S.FriendProfileBox>
  );
};

export default FriendProfile;