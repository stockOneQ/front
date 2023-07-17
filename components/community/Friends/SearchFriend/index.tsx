import Card from 'components/common/Card';
import Image from 'next/image';
import toggleButtonIcon from 'public/assets/icons/community/toggleButtonIcon.svg';
import searchIcon from 'public/assets/icons/community/searchIcon.svg';
import * as S from './style';
import { useState } from 'react';
import SearchResults from './SearchResults';
import ReqFriends from './ReqFriends';

interface ISearchFriendProps {
  reqFriends: boolean;
}

/** 친구 찾기 */
const SearchFriend = ({ reqFriends }: ISearchFriendProps) => {
  const [searchBy, setSearchBy] = useState('이름'); // 카테고리 선택
  const [categoryToggle, setCategoryToggle] = useState(false); // 카테고리 토글
  const [isSearch, setIsSearch] = useState(false); // 검색 중인지

  const categoryToggleCloseHandler = () => {
    setCategoryToggle(false);
  }
  const changeValueHandler = (value: string) => {
    setSearchBy(value); 
    setCategoryToggle(false); 
  }
  const onWriteHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setIsSearch(e.currentTarget.value !== (undefined || null || ''));
  }

  return (
    <Card width="65.9rem">
      {!reqFriends && (
        <>
          <S.SearchFriendText onClick={categoryToggleCloseHandler}>친구 찾기</S.SearchFriendText>
          <S.SearchFriendBox>
            <S.SearchByBox>
              <S.SelectedValueButton onClick={() => { setCategoryToggle((prev) => (!prev)) }}>
                <p>{searchBy}</p>
                <Image className={`${categoryToggle ? 'categoryToggle' : ''}`} src={toggleButtonIcon} alt="my_page_icon" width={12} height={10} />
              </S.SelectedValueButton>
              {categoryToggle && <S.OptionList>
                <li onClick={() => { changeValueHandler('이름') }}>이름</li>
                <li onClick={() => { changeValueHandler('상호명') }}>상호명</li>
                <li onClick={() => { changeValueHandler('지역명') }}>지역명</li>
              </S.OptionList>}
            </S.SearchByBox>
            <S.InputBox onClick={categoryToggleCloseHandler} onChange={onWriteHandler} type="text" placeholder={`${searchBy === '지역명' ? '읍, 면, 동으로 입력해주세요' : ''}`} />
            <button onClick={categoryToggleCloseHandler}>
              <Image src={searchIcon} alt="my_page_icon" width={17} height={17} />
            </button>
          </S.SearchFriendBox>
          <SearchResults isSearch={isSearch} />
        </>
      )}
      {reqFriends && <ReqFriends />}
    </Card>
  );
};

export default SearchFriend;