import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  isCurrentPathMainState,
  postListState,
  searchInputState,
  searchTypeState,
  sortTypeState,
} from 'recoil/states';
import * as S from './style';
import ControlBar from './ControlBar';
import PostList from './PostList';
import HeadingText from 'components/common/HeadingText';

import RightArrowSVG from 'public/assets/icons/community/rightArrow.svg';
import WriteSVG from 'public/assets/icons/community/write.svg';

import { API } from 'pages/api/api';

/* 커뮤니티 - 게시판 메인 페이지 */
const Board = () => {
  const router = useRouter();
  const [sortType, setSortType] = useRecoilState(sortTypeState);
  const [searchType, setSearchType] = useRecoilState(searchTypeState);
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);

  const [postList, setPostList] = useRecoilState(postListState);

  const setIsCurrentPathMain = useSetRecoilState(isCurrentPathMainState);

  /** ----------------- 전체 글 목록 조회 API ----------------- */
  useEffect(() => {
    API.get('/api/boards', {
      params: {
        page: '0',
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
      .then(res => {
        console.log('전체 글 목록 조회 성공');
        console.log(res.data);
        setPostList(res.data.boardList);
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
  }, [sortType, searchType, searchInput]);

  const handleMyPostsButtonClick = () => {
    setIsCurrentPathMain(false);

    /** 내가 쓴 글 페이지로 이동 할 시, 전체 글 페이지에서 적용됐던 정렬/검색 조건 초기화 */
    setSortType('최신순');
    setSearchType('글 제목');
    setSearchInput('');

    router.push('/community/board/myPosts');
  };

  return (
    <S.Box>
      <S.HeaderSection>
        <HeadingText>전체글</HeadingText>
        <S.GoToMyPostButton onClick={handleMyPostsButtonClick}>
          <span>내가 쓴 글</span>
          <Image src={RightArrowSVG} alt="MyPosts" />
        </S.GoToMyPostButton>
        <ControlBar />
        <S.PostUploadButtonContainer>
          <Link href="/community/board/new">
            <Image alt="게시글 등록" src={WriteSVG} />
          </Link>
        </S.PostUploadButtonContainer>
      </S.HeaderSection>
      <PostList list={postList} />
    </S.Box>
  );
};

export default Board;
