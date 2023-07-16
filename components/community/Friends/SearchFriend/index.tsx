import Card from 'components/common/Card';
import Image from 'next/image';
import toggleButtonIcon from 'public/assets/icons/community/toggleButtonIcon.svg';
import searchIcon from 'public/assets/icons/community/searchIcon.svg';
import * as S from './style';
import { useState } from 'react';

/** 친구 찾기 */
const SearchFriend = () => {
  const [searchBy, setSearchBy] = useState('이름');
  const [toggle, setToggle] = useState(false);

  const toggleCloseHandler = () => {
    setToggle(false);
  }
  const changeValueHandler = (value: string) => {
    setSearchBy(value); 
    setToggle(false); 
  }

  return (
    <Card width="65.9rem">
      <S.SearchFriendText onClick={toggleCloseHandler}>친구 찾기</S.SearchFriendText>
      <S.SearchFriendBox>
        <S.SearchByBox>
          <S.SelectedValueButton onClick={() => { setToggle((prev) => (!prev)) }}>
            <p>{searchBy}</p>
            <Image className={`${toggle ? 'toggle' : ''}`} src={toggleButtonIcon} alt="my_page_icon" width={12} height={10} />
          </S.SelectedValueButton>
          {toggle && <S.OptionList>
            <li onClick={() => { changeValueHandler('이름') }}>이름</li>
            <li onClick={() => { changeValueHandler('상호명') }}>상호명</li>
            <li onClick={() => { changeValueHandler('지역명') }}>지역명</li>
          </S.OptionList>}
        </S.SearchByBox>
        <S.InputBox onClick={toggleCloseHandler} type="text" placeholder={`${searchBy === '지역명' ? '읍, 면, 동으로 입력해주세요' : ''}`} />
        <button onClick={toggleCloseHandler}>
          <Image src={searchIcon} alt="my_page_icon" width={17} height={17} />
        </button>
      </S.SearchFriendBox>
    </Card>
  );
};

export default SearchFriend;