import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { myPostDeleteCheckecCount, isAllCheckedState } from "recoil/states";
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
  const [active, setActive] = useState(false);
  const [deleteCheckedCount, setDeleteCheckedCount] = useRecoilState(
    myPostDeleteCheckecCount
  );
  const [isAllChecked, setIsAllChecked] = useRecoilState(isAllCheckedState);

  const handleMainClick = () => {
    router.push("/community/board");
  };

  const handleToggle = () => {
    setIsAllChecked(false);
    setIsSetting((prev) => !prev);
  };

  const handleAllChecked = () => {
    setIsAllChecked((prev) => !prev);
    isAllChecked ? setDeleteCheckedCount(0) : setDeleteCheckedCount(1);
    console.log(deleteCheckedCount);
  };

  return (
    <S.Box>
      <S.HeaderSection>
        <S.NavButton onClick={handleMainClick}>
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
                disabled={deleteCheckedCount <= 0}
              />
            </S.ButtonContainer>
            <S.SelectedContainer>
              <S.StyledLabel htmlFor="allDeletedCheckbox">
                전체선택
              </S.StyledLabel>
              <S.StyledInput
                type="checkbox"
                id="allDeletedCheckbox"
                checked={isAllChecked}
                onClick={handleAllChecked}
              ></S.StyledInput>
            </S.SelectedContainer>
          </S.ActionBox>
        )}
      </S.HeaderSection>

      <PostListBox id={"임하림"} isSetting={isSetting} checked={isAllChecked} />
    </S.Box>
  );
};

export default MyPost;
