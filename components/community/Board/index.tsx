import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
<<<<<<< HEAD
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  currentPageNumState,
=======
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
>>>>>>> ff4bb25 (Merge branch develop into main)
  isCurrentPathMainState,
  postListState,
  searchInputState,
  searchTypeState,
  sortTypeState,
<<<<<<< HEAD
  startPageNumState,
  totalPagesState,
} from 'recoil/states';
import * as S from './style';
import ControlBar from './ControlBar';
import PostList from './PostList';
=======
} from 'recoil/states';
import * as S from './style';
import ControlBar from './ControlBar';
import PostListBox from './PostListBox';
>>>>>>> ff4bb25 (Merge branch develop into main)
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
<<<<<<< HEAD
  const [currentPageNum, setCurrentPageNum] =
    useRecoilState(currentPageNumState);
  const [startPageNum, setStartPageNum] = useRecoilState(startPageNumState);
  const [totalPages, setTotalPages] = useRecoilState(totalPagesState);

  const setIsCurrentPathMain = useSetRecoilState(isCurrentPathMainState);

  /** 페이지네이션 초기화 */
  useEffect(() => {
    setStartPageNum(1);
    setCurrentPageNum(1);
    setTotalPages(0);
  }, []);

  /** ----------------- 전체 글 목록 조회 API ----------------- */
  useEffect(() => {
    API.get('/api/boards', {
      params: {
        page: currentPageNum - 1,
=======

  const setIsCurrentPathMain = useSetRecoilState(isCurrentPathMainState);

  /** 전체 글 목록 조회 */
  useEffect(() => {
    API.get('/api/boards', {
      params: {
        page: '0',
>>>>>>> ff4bb25 (Merge branch develop into main)
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
<<<<<<< HEAD
        console.log(`전체 글 중 ${currentPageNum}페이지 목록 조회 성공`);
        setPostList(res.data.boardList);
        setTotalPages(res.data.pageInfo.totalPages);
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
  }, [
    startPageNum,
    currentPageNum,
    totalPages,
    sortType,
    searchType,
    searchInput,
  ]);

  /** 내가 쓴 글 버튼 클릭 시 처리 함수 */
  const handleMyPostsButtonClick = () => {
    setIsCurrentPathMain(false);

    /** 내가 쓴 글 페이지로 이동 할 시, 전체 글 페이지에서 적용됐던 정렬/검색 조건 초기화 */
=======
        console.log('전체 글 목록 불러오기 성공');
        console.log(res.data);
        setPostList(res.data.boardList);
      })
      .catch(e => {
        console.log(e);
        throw e;
      });
  }, [sortType, searchType, searchInput]);

  const handleMyPostsClick = () => {
    setIsCurrentPathMain(false);
    /** 전체 글 페이지에서 적용됐던 정렬/검색 조건 초기화 */
>>>>>>> ff4bb25 (Merge branch develop into main)
    setSortType('최신순');
    setSearchType('글 제목');
    setSearchInput('');

<<<<<<< HEAD
    /** 페이지네이션 초기화 */
    setStartPageNum(1);
    setCurrentPageNum(1);
    setTotalPages(0);

=======
>>>>>>> ff4bb25 (Merge branch develop into main)
    router.push('/community/board/myPosts');
  };

  return (
    <S.Box>
      <S.HeaderSection>
        <HeadingText>전체글</HeadingText>
<<<<<<< HEAD
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
      <PostList list={postList} totalPages={totalPages} />
=======
        <S.MyPostButtonContainer onClick={handleMyPostsClick}>
          <span>내가 쓴 글</span>
          <Image src={RightArrowSVG} alt="MyPosts" />
        </S.MyPostButtonContainer>
        <ControlBar />
        <S.WriteButtonContainer>
          <Link href="/community/board/new">
            <Image alt="게시글 등록" src={WriteSVG} />
          </Link>
        </S.WriteButtonContainer>
      </S.HeaderSection>
      <PostListBox list={postList} />
>>>>>>> ff4bb25 (Merge branch develop into main)
    </S.Box>
  );
};

export default Board;
