import Image from 'next/image';
import loadingIc from 'public/assets/icons/common/loadingIc.svg';
import searchIcon from 'public/assets/icons/common/searchIcon.svg';
import * as S from './style';
import { KeyboardEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import SearchResults from './SearchResults';
import DropDown from 'components/common/DropDown';
import { FriendsListType } from '@Types/community/friends/friendsList';
import { API } from 'pages/api/api';
import SearchPlaceholder from './SearchPlaceholder';
import useSearch from 'hooks/useSearch';

const DROP_DOWN_LIST = ['이름', '상호명', '지역명'];

/** 친구 찾기 */
const SearchFriend = () => {
  const enteredValueRef = useRef(null); // 입력된 검색 값

  const [searchBy, setSearchBy] = useState('이름'); // 카테고리 선택
  const [searchResultList, setSearchResultList] = useState<
    FriendsListType['friendsList']
  >([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 중

  const { enteredValue, onKeyDownHandler, onSearchHandler } = useSearch();

  useEffect(() => {
    setIsLoading(true);

    const getSearchedUserData = async () => {
      try {
        const searchedUserRes = await API.get(
          `/api/user/friend?search=${searchBy}&word=${enteredValue}&last=-1`,
        );

        setIsLoading(false);
        setSearchResultList(searchedUserRes.data.searchedUser);
      } catch (err) {
        console.error(err);
      }
    };

    getSearchedUserData();
  }, [searchBy, enteredValue]);

  return (
    <>
      <S.SearchFriendText>친구 찾기</S.SearchFriendText>
      <S.SearchFriendBox>
        <S.DropBoxContainer>
          <DropDown
            width={16.3}
            height={4.6}
            fontSize={1.5}
            toggleSize={12}
            toggleTopSize={46}
            list={DROP_DOWN_LIST}
            onChange={setSearchBy}
            type={searchBy}
          />
        </S.DropBoxContainer>
        <S.SearchFriendsInput
          ref={enteredValueRef}
          type="text"
          placeholder={`${
            searchBy === '지역명' ? '읍, 면, 동으로 입력해주세요' : ''
          }`}
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={onSearchHandler}>
          <Image src={searchIcon} alt="my_page_icon" width={17} height={17} />
        </button>
      </S.SearchFriendBox>
      {!enteredValue && searchBy !== '이름' && <SearchPlaceholder />}
      {enteredValue && isLoading && (
        <S.LoadingBox>
          <Image src={loadingIc} alt="loading-icon" width={59} height={27} />
        </S.LoadingBox>
      )}
      {enteredValue && !isLoading && (
        <SearchResults searchResultList={searchResultList} />
      )}
    </>
  );
};

export default SearchFriend;
