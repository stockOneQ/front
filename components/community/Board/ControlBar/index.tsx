import Link from "next/link";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { searchTypeState, sortTypeState } from "recoil/states";
import * as S from "./style";

import ControlMenu from "./ControlMenu";
import SearchInputBar from "./SearchInputBar";

import SearchIcon from "public/assets/icons/community/searchIcon.svg";
import WriteIcon from "public/assets/icons/write.png";

const sortOptionList = ["최신순", "조회순"];
const searchOptionList = ["글 제목", "글 내용", "작성자"];

const ControlBar = () => {
  const [sortType, setSortType] = useRecoilState(sortTypeState);
  const [searchType, setSearchType] = useRecoilState(searchTypeState);

  return (
    <S.ControlBarBox>
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      <S.SearchBar>
        <S.ControlMenuContainer>
          <ControlMenu
            value={searchType}
            onChange={setSearchType}
            optionList={searchOptionList}
          />
        </S.ControlMenuContainer>
        <SearchInputBar />
        <S.SearchIconContainer>
          <Image alt="search" src={SearchIcon} />
        </S.SearchIconContainer>
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
