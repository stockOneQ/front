import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { styled } from "styled-components";
import { useRecoilValue } from "recoil";
import { postListState } from "recoil/states";

import Title from "components/common/pageTitle";
import PostItem from "components/common/postItem";
import ControlMenu from "components/controlMenu";
import SearchInput from "components/boardSearchInput";

import SearchIcon from "../../../public/assets/icons/search.png";
import WriteIcon from "../../../public/assets/icons/write.png";

const sortOptionList = ["최신순", "조회순"];
const searchOptionList = ["글 제목", "글 내용", "작성자"];

const CommunityBoardPage = () => {
  const [sortTypeState, setSortTypeState] = useState("최신순");
  const [searchType, setSearchType] = useState("글 제목");

  const postList = useRecoilValue(postListState);

  return (
    <Board>
      <Title title="전체글" />

      <ControlBar>
        <ControlMenu
          value={sortTypeState}
          onChange={setSortTypeState}
          optionList={sortOptionList}
        />

        <SearchMenu>
          <ControlMenuContainer>
            <ControlMenu
              value={searchType}
              onChange={setSearchType}
              optionList={searchOptionList}
            />
          </ControlMenuContainer>
          <SearchInput />
          <SearchIconBox>
            <Image alt="search" src={SearchIcon}></Image>
          </SearchIconBox>
        </SearchMenu>

        <WriteButtonContainer>
          <Link href="/community/board/new">
            <Image alt="게시글 등록" src={WriteIcon}></Image>
          </Link>
        </WriteButtonContainer>
      </ControlBar>
      <PostContainer>
        {postList.map((value) => (
          <Link key={value.id} href={`/community/board/${value.id}`}>
            <PostItem
              key={value.id}
              title={value.title}
              content={value.content}
              views={value.views}
              commentCount={value.commentCount}
              likes={value.likes}
            />
          </Link>
        ))}
      </PostContainer>
    </Board>
  );
};

const Board = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ControlBar = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const SearchMenu = styled.div`
  position: relative;

  display: flex;
  align-items: center;
`;

const ControlMenuContainer = styled.div`
  position: absolute;
  left: 4px;
`;

const SearchIconBox = styled.button`
  position: absolute;
  right: 16px;
`;

const WriteButtonContainer = styled.button`
  padding-left: 130px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export default CommunityBoardPage;
