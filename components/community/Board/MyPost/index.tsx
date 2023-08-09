import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  searchTypeState,
  sortTypeState,
  deleteCheckedItemsState,
  isDeleteModeState,
  myPostListState,
  searchInputState,
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

  /** 내가 쓴 글 목록 조회 */
  useEffect(() => {
    API.get('/api/boards/my', {
      params: {
        page: '0',
        sort: sortType,
        search: searchType === '글 제목' ? '제목' : '내용',
        word: searchInput,
      },
    })
      .then(res => {
        console.log('내가 쓴 글 조회 성공');
        console.log(res.data);
        setMyPostList(res.data.boardList);
        setMyPostListCount(() => myPostList.length);
      })
      .catch(e => {
        alert('내가 쓴 글 조회 실패');
        console.log(e);
      });
  }, [myPostListCount, sortType, searchType, searchInput]);

  /** 환경설정 버튼 or 취소/삭제 버튼 토글 함수*/
  const handleToggle = () => {
    setIsDeleteMode(prev => !prev);
    setDeleteCheckedItems([]);
  };

  /** '전체글로' 버튼 클릭 시 처리 함수 */
  const handleGoMain = () => {
    setIsDeleteMode(false);

    /** 내가 쓴 글 페이지에서 적용됐던 정렬/검색 조건 초기화 */
    setSortType('최신순');
    setSearchType('글 제목');
    setSearchInput('');
    router.push('/community/board');
  };

  /** 취소 버튼 클릭 시 처리 함수 */
  const handleCancel = () => {
    handleToggle();
  };

  /** 삭제 버튼 클릭 시 처리 함수 */
  const handleDelete = () => {
    console.log(`삭제 할 게시글 목록 ${deleteCheckedItems}`);

    deleteCheckedItems.map(boardId => {
      API.delete('/api/boards/my', {
        params: {
          boardId: boardId,
        },
      })
        .then(() => {
          setMyPostListCount(prev => prev - 1);
        })
        .catch(e => {
          alert('게시글 삭제 실패');
          console.log(e);
        });
    });
    handleToggle();
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

      <PostListBox isAll={false} list={myPostList} />
    </S.Box>
  );
};

export default MyPosts;
