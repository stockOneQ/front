import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  sortTypeState,
  searchTypeState,
  searchInputState,
  deleteCheckedItemsState,
  isDeleteModeState,
  myPostListState,
  isCurrentPathMainState,
<<<<<<< HEAD
  currentPageNumState,
  totalPagesState,
} from 'recoil/states';
import * as S from './style';
import { API } from 'pages/api/api';

import ControlBar from '../ControlBar';
import PostList from '../PostList';
import HeadingText from 'components/common/HeadingText';
import RejectBtn from 'components/common/button/RejectBtn';
import AcceptBtn from 'components/common/button/AcceptBtn';

import SettingSVG from 'public/assets/icons/community/settingsIcon.svg';
import LeftArrowSVG from 'public/assets/icons/community/leftArrow.svg';
=======
} from 'recoil/states';
import * as S from './style';

import ControlBar from '../ControlBar';
import PostListBox from '../PostListBox';
import HeadingText from 'components/common/HeadingText';
import RejectBtn from 'components/common/button/RejectBtn';
import AcceptBtn from 'components/common/button/AcceptBtn';
import SettingSVG from 'public/assets/icons/community/settingsIcon.svg';
import LeftArrowSVG from 'public/assets/icons/community/leftArrow.svg';
import { API } from 'pages/api/api';
>>>>>>> ff4bb25 (Merge branch develop into main)

const MyPosts = () => {
  const router = useRouter();
  const [sortType, setSortType] = useRecoilState(sortTypeState);
  const [searchType, setSearchType] = useRecoilState(searchTypeState);
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);

  const [isDeleteMode, setIsDeleteMode] = useRecoilState(isDeleteModeState);
  const [deleteCheckedItems, setDeleteCheckedItems] = useRecoilState(
    deleteCheckedItemsState,
  );
  const [isAllChecked, setIsAllChecked] = useState(false);

  const [myPostList, setMyPostList] = useRecoilState(myPostListState);
  const [myPostListCount, setMyPostListCount] = useState(0);

<<<<<<< HEAD
  const [currentPageNum, setCurrentPageNum] =
    useRecoilState(currentPageNumState);
  const [totalPages, setTotalPages] = useRecoilState(totalPagesState);

  const setIsCurrentPathMain = useSetRecoilState(isCurrentPathMainState);

  /** ----------------- 내가 쓴 글 목록 조회 API ----------------- */
  useEffect(() => {
    API.get('/api/boards/my', {
      params: {
        page: currentPageNum - 1,
=======
  const setIsCurrentPathMain = useSetRecoilState(isCurrentPathMainState);

  /** 내가 쓴 글 목록 조회 */
  useEffect(() => {
    API.get('/api/boards/my', {
      params: {
        page: '0',
>>>>>>> ff4bb25 (Merge branch develop into main)
        sort: sortType,
        search: searchType === '글 제목' ? '제목' : '내용',
        word: searchInput,
      },
    })
      .then(res => {
        console.log('내가 쓴 글 조회 성공');
        console.log(res.data);
        setMyPostList(res.data.boardList);
<<<<<<< HEAD
        setTotalPages(res.data.pageInfo.totalPages);
=======
>>>>>>> ff4bb25 (Merge branch develop into main)
        setMyPostListCount(() => myPostList.length);
      })
      .catch(e => {
        alert('내가 쓴 글 조회 실패');
        console.log(e);
      });
<<<<<<< HEAD
  }, [currentPageNum, myPostListCount, sortType, searchType, searchInput]);
=======
  }, [myPostListCount, sortType, searchType, searchInput]);
>>>>>>> ff4bb25 (Merge branch develop into main)

  /** 환경설정 버튼 or 취소/삭제 버튼 토글 함수*/
  const handleToggle = () => {
    setIsDeleteMode(prev => !prev);
    setIsAllChecked(false);
    setDeleteCheckedItems([]);
  };

  /** '전체글로' 버튼 클릭 시 처리 함수 */
  const handleGoMain = () => {
    setIsDeleteMode(false);
    setIsCurrentPathMain(true);

    /** 내가 쓴 글 페이지에서 적용됐던 정렬/검색 조건 초기화 */
    setSortType('최신순');
    setSearchType('글 제목');
    setSearchInput('');
<<<<<<< HEAD

=======
>>>>>>> ff4bb25 (Merge branch develop into main)
    router.push('/community/board');
  };

  /** 취소 버튼 클릭 시 처리 함수 */
  const handleCancel = () => {
    handleToggle();
  };

  /** 삭제 버튼 클릭 시 처리 함수 */
<<<<<<< HEAD
  /** ----------------- 내가 쓴 글 삭제 API ----------------- */
=======
>>>>>>> ff4bb25 (Merge branch develop into main)
  const handleDelete = async () => {
    try {
      await Promise.allSettled(
        deleteCheckedItems.map(boardId =>
          API.delete('/api/boards/my', {
            params: {
              boardId: boardId,
            },
          }),
        ),
      );
      setMyPostListCount(prev => prev - deleteCheckedItems.length);
      handleToggle();
<<<<<<< HEAD
    } catch (e) {
      console.error(e);
=======
    } catch (error) {
      alert('게시글 삭제 실패');
      console.error(error);
>>>>>>> ff4bb25 (Merge branch develop into main)
    }
  };

  const handleAllChecked = () => {
    setIsAllChecked(prev => !prev);

    if (!isAllChecked) return setDeleteCheckedItems([]);

    const allCheckedItems: number[] = [];
    myPostList?.forEach(post => allCheckedItems.push(post.id));
    setDeleteCheckedItems(allCheckedItems);
  };

  return (
    <S.Box>
      <S.HeaderSection>
        <S.NavButton onClick={handleGoMain}>
          <Image src={LeftArrowSVG} alt="goMyPosts" />
          <span>전체글로</span>
        </S.NavButton>
        <HeadingText>내가 쓴 글</HeadingText>
        <ControlBar />
        {!isDeleteMode ? (
          <S.SettingButton onClick={handleToggle}>
            <Image src={SettingSVG} alt="setting" />
          </S.SettingButton>
        ) : (
          <S.DeleteOptionBox>
            <S.ActionButtonGroup>
              <RejectBtn label="취소" onClick={handleCancel} />
              <AcceptBtn
                label="삭제"
                onClick={handleDelete}
                disabled={deleteCheckedItems.length <= 0}
              />
            </S.ActionButtonGroup>
            <S.SelectAllContainer>
              <S.StyledLabel htmlFor="allItemsCheckbox">전체선택</S.StyledLabel>
              <S.StyledInput
                type="checkbox"
                id="allItemsCheckbox"
                checked={
                  myPostList?.length !== 0 &&
                  deleteCheckedItems.length === myPostList?.length
                }
                onChange={handleAllChecked}
              ></S.StyledInput>
            </S.SelectAllContainer>
          </S.DeleteOptionBox>
        )}
      </S.HeaderSection>

<<<<<<< HEAD
      <PostList list={myPostList} totalPages={totalPages}/>
=======
      <PostListBox list={myPostList} />
>>>>>>> ff4bb25 (Merge branch develop into main)
    </S.Box>
  );
};

export default MyPosts;
