import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import {
  searchInputState,
  searchTypeState,
  sortTypeState,
} from "recoil/states";

import * as S from "./style";
import { styled } from "styled-components";

import DropDown from "components/common/DropDown";
import SearchInputBar from "./SearchInputBar";

import SearchIcon from "public/assets/icons/community/searchIcon.svg";
import WriteIcon from "public/assets/icons/write.png";

const sortOptionList = ["최신순", "조회순"];
const searchOptionList = ["글 제목", "글 내용", "작성자"];

const DropBox = styled(DropDown)`
  .what {
    color: red !important;
    padding: 100px;
    margin: 100px !important;
  }
`;

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
        <DropBox
          width={16.3}
          height={3.5}
          font={1.3}
          list={sortOptionList}
          onChange={setSortType}
        />
      </S.DropBoxContainer>

      <S.SearchBar>
        <S.DropBoxContainer>
          <DropBox
            width={16.3}
            height={3.5}
            font={1.3}
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

      <S.WriteButtonContainer>
        <Link href="/community/board/new">
          <Image alt="게시글 등록" src={WriteIcon} />
        </Link>
      </S.WriteButtonContainer>
    </S.ControlBarBox>
  );
};

export default ControlBar;
