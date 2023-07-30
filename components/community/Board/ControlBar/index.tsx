import { useState } from "react";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import {
  searchInputState,
  searchTypeState,
  sortTypeState,
} from "recoil/states";

import * as S from "./style";

import DropDown from "components/common/DropDown";
import SearchInputBar from "./SearchInputBar";

import SearchIcon from "public/assets/icons/community/searchIcon.svg";

const sortOptionList = ["최신순", "조회순"];
const searchOptionList = ["글 제목", "글 내용", "작성자"];

const ControlBar = () => {
  const setSortType = useSetRecoilState(sortTypeState);
  const setSearchType = useSetRecoilState(searchTypeState);

  /* 실시간 검색이 아닌 검색 아이콘을 통해 한번만 검색 필터를 거치므로 저장해둠 */
  const [input, setInput] = useState("");
  const setSearchInput = useSetRecoilState(searchInputState);

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
            onReset={setSearchInput}
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
