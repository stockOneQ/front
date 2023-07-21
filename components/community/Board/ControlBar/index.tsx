import Link from "next/link";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { searchTypeState, sortTypeState } from "recoil/states";

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
  const [sortType, setSortType] = useRecoilState(sortTypeState);
  const [searchType, setSearchType] = useRecoilState(searchTypeState);

  return (
    <S.ControlBarBox>
      <S.DropBoxContainer>
        <DropBox width={16.3} height={3.5} font={1.3} list={sortOptionList} />
      </S.DropBoxContainer>

      <S.SearchBar>
        <S.DropBoxContainer>
          <DropBox
            width={16.3}
            height={3.5}
            font={1.3}
            list={searchOptionList}
          />
        </S.DropBoxContainer>
        <SearchInputBar />
        <Image alt="search" src={SearchIcon} />
      </S.SearchBar>

      <S.WriteButtonContainer>
        <Link href="/community/board/new">
          <Image alt="게시글 등록" src={WriteIcon} />
        </Link>
      </S.WriteButtonContainer>
    </S.ControlBarBox>
  );
};

const Div = styled.div`
  position: relative;
`;

export default ControlBar;
