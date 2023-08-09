import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { IPostPreviewTypes } from 'recoil/states';
import {
  deleteCheckedItemsState,
  isDeleteModeState,
  postListState,
} from 'recoil/states';
import * as S from './style';

import ControlBar from '../ControlBar';
import PostListBox from '../PostListBox';
import HeadingText from 'components/common/HeadingText';
import RejectBtn from 'components/common/button/RejectBtn';
import AcceptBtn from 'components/common/button/AcceptBtn';
import SettingSVG from 'public/assets/icons/community/settingsIcon.svg';
import LeftArrowSVG from 'public/assets/icons/community/leftArrow.svg';

const MyPosts = () => {
  const router = useRouter();
  const [isDeleteMode, setIsDeleteMode] = useRecoilState(isDeleteModeState);
  const [deleteCheckedItems, setDeleteCheckedItems] = useRecoilState(
    deleteCheckedItemsState,
  );
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [myPostList, setMyPostList] = useState<IPostPreviewTypes[]>();

  /** '전체글로' 버튼 클릭 시 처리 함수 */
  const handleGoMain = () => {
    router.push('/community/board');
  };

  /** 환경설정 버튼 or 취소/삭제 버튼 토글 함수*/
  const handleToggle = () => {
    setIsDeleteMode(prev => !prev);
    setDeleteCheckedItems([]);
  };

  /** 취소 버튼 클릭 시 처리 함수 */
  const handleCancel = () => {
    handleToggle();
  };

  /** 삭제 버튼 클릭 시 처리 함수 */
  const handleDelete = () => {
    /** 삭제 api 로직 추가하기 */
    handleToggle();
  };

  const handleAllChecked = () => {
    setIsAllChecked(prev => !prev);

    if (!isAllChecked) return setDeleteCheckedItems([]);

    const allCheckedItems: number[] = [];
    myPostList?.forEach(myPost => allCheckedItems.push(myPost.id));
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
                checked={deleteCheckedItems.length === myPostList?.length}
                onClick={handleAllChecked}
              ></S.StyledInput>
            </S.SelectAllContainer>
          </S.DeleteOptionBox>
        )}
      </S.HeaderSection>

      <PostListBox isAll={false} />
    </S.Box>
  );
};

export default MyPosts;
