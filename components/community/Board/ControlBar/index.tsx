import { useState } from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import {
  searchInputState,
  searchTypeState,
  sortTypeState,
} from 'recoil/states';
import * as S from './style';
import DropDown from 'components/common/DropDown';
import SearchInputBar from './SearchInputBar';

import SearchSVG from 'public/assets/icons/community/search.svg';

const sortOptionList = ['최신순', '조회순'];
const searchOptionList = ['글 제목', '글 내용', '작성자'];

const ControlBar = () => {
  const [sortType, setSortType] = useRecoilState(sortTypeState);
  const [searchType, setSearchType] = useRecoilState(searchTypeState);
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);

  const [input, setInput] =
    useState(
      searchInput,
    ); /* 실시간 검색이 아닌 검색 아이콘을 통해 한번만 검색 필터를 거치므로 저장해둠 */

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
          type={sortType}
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
            type={searchType}
          />
        </S.DropBoxContainer>
        <SearchInputBar value={input} onChange={setInput} />
        <S.SearchButton onClick={handleSearch}>
          <Image alt="search" src={SearchSVG} />
        </S.SearchButton>
      </S.SearchBar>
    </S.ControlBarBox>
  );
};

export default ControlBar;
