import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { postCheckedItemsState, postListState } from "recoil/states";
import * as S from "./style";

import ControlBar from "../ControlBar";
import PostListBox from "../PostListBox";
import HeadingText from "components/common/HeadingText";
import RejectBtn from "components/common/button/RejectBtn";
import AcceptBtn from "components/common/button/AcceptBtn";
import SettingSVG from "public/assets/icons/community/settingsIcon.svg";
import LeftArrowSVG from "public/assets/icons/community/leftArrow.svg";

const MyPost = () => {
  const router = useRouter();
  const [isSetting, setIsSetting] = useState(false);
  const [postCheckedItems, setPostCheckedItems] = useRecoilState(
    postCheckedItemsState
  );
  const [isAllChecked, setIsAllChecked] = useState(false);
  const postAllItems = useRecoilValue(postListState);
  const myPostItems = postAllItems.filter((post) => post.writerId === 82831);

  /** 전체글로 버튼 클릭 시 처리 함수 */
  const handleGoMain = () => {
    router.push("/community/board");
  };

  /** 환경설정 버튼 or 취소/삭제 버튼 토글 이벤트 */
  const handleToggle = () => {
    setIsSetting((prev) => !prev);
  };

  const handleAllChecked = () => {
    setIsAllChecked((prev) => !prev);

    if (isAllChecked) {
      const allItems: number[] | ((currVal: number[]) => number[]) = [];
      myPostItems.forEach((myPost) => allItems.push(myPost.postId));
      setPostCheckedItems(allItems);
    } else {
      setPostCheckedItems([]);
    }
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
        {!isSetting ? (
          <S.ActionButtonContainer>
            <button onClick={handleToggle}>
              <Image src={SettingSVG} alt="setting" />
            </button>
          </S.ActionButtonContainer>
        ) : (
          <S.ActionBox>
            <S.ButtonContainer>
              <RejectBtn label="취소" onClick={handleToggle} />
              <AcceptBtn
                label="삭제"
                onClick={handleToggle}
                disabled={postCheckedItems.length <= 0}
              />
            </S.ButtonContainer>
            <S.SelectedContainer>
              <S.StyledLabel htmlFor="allDeletedCheckbox">
                전체선택
              </S.StyledLabel>
              <S.StyledInput
                type="checkbox"
                id="allDeletedCheckbox"
                checked={
                  postCheckedItems.length === myPostItems.length ? true : false
                }
                onClick={handleAllChecked}
              ></S.StyledInput>
            </S.SelectedContainer>
          </S.ActionBox>
        )}
      </S.HeaderSection>

      <PostListBox writerId={82831} isSetting={isSetting} />
    </S.Box>
  );
};

export default MyPost;
