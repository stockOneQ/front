import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  postListState,
  searchInputState,
  searchTypeState,
  sortTypeState,
} from 'recoil/states';
import * as S from './style';
import DropDown from 'components/common/DropDown';
import SearchInputBar from './SearchInputBar';
import SearchIcon from 'public/assets/icons/community/searchIcon.svg';
import { API } from 'pages/api/api';

const sortOptionList = ['최신순', '조회순'];
const searchOptionList = ['글 제목', '글 내용', '작성자'];

const ControlBar = () => {
  const [sortType, setSortType] = useRecoilState(sortTypeState);
  const [searchType, setSearchType] = useRecoilState(searchTypeState);

  /* 실시간 검색이 아닌 검색 아이콘을 통해 한번만 검색 필터를 거치므로 저장해둠 */
  const [input, setInput] = useState('');
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);

  const setPostList = useSetRecoilState(postListState);

  useEffect(() => {
    API.get('/api/boards', {
      params: {
        last: '-1',
        sort: sortType,
        search:
          searchType === '글 제목'
            ? '제목'
            : searchType === '글 내용'
            ? '내용'
            : '작성자',
        word: searchInput,
      },
    })
      .then(response => {
        console.log('게시글 검색 목록 불러오기 성공');
        console.log(response.data.boardListResponse);
        setPostList(response.data.boardListResponse);
      })
      .catch(e => {
        console.log(e);
        throw e;
      });
  }, [sortType, searchType, searchInput]);

  const handleSearch = () => {
    setSearchInput(input);
  };

  return (
    <S.ControlBarBox>
      <S.DropBoxContainer>
        <DropDown
          width={16.3}
          height={3.5}
          fontSize={1.3}
          toggleSize={10}
          toggleTopSize={48}
          list={sortOptionList}
          onChange={setSortType}
        />
      </S.DropBoxContainer>

      <S.SearchBar>
        <S.DropBoxContainer>
          <DropDown
            width={16.3}
            height={3.5}
            fontSize={1.3}
            toggleSize={10}
            toggleTopSize={48}
            list={searchOptionList}
            onChange={setSearchType}
          />
        </S.DropBoxContainer>
        <SearchInputBar value={input} onChange={setInput} />
        <S.SearchButton onClick={handleSearch}>
          <Image alt="search" src={SearchIcon} />
        </S.SearchButton>
      </S.SearchBar>
    </S.ControlBarBox>
  );
};

export default ControlBar;
