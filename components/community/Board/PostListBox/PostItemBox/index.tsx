import Image from "next/image";

import ViewsSVG from "public/assets/icons/community/views.svg";
import CommentsSVG from "public/assets/icons/community/comments.svg";
import LikesSVG from "public/assets/icons/community/likes.svg";
import DeleteCheckedSVG from "public/assets/icons/community/deleteChecked.svg";

import * as S from "./style";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isAllCheckedState, myPostDeleteCheckecCount } from "recoil/states";

const PostItem = ({
  title,
  content,
  views,
  commentCount,
  likes,
  isSetting,
  checked,
}: {
  title: string;
  content: string;
  views: number;
  commentCount: number;
  likes: number;
  isSetting?: boolean;
  checked?: boolean;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    checked ? setIsChecked(true) : setIsChecked(false);
  }, [checked]);

  const [deleteCheckedCount, setDeleteCheckedCount] = useRecoilState(
    myPostDeleteCheckecCount
  );

  const setIsAllChecked = useSetRecoilState(isAllCheckedState);

  const handleChecked = () => {
    setIsChecked((prev) => !prev);

    isChecked
      ? setDeleteCheckedCount((prev) => (prev -= 1))
      : setDeleteCheckedCount((prev) => (prev += 1));

    console.log(deleteCheckedCount);
  };

  return (
    <S.Box>
      <S.PostDetailSection>
        <S.Title>{title}</S.Title>
        <S.Content>{content.substring(0, 100)}</S.Content>
      </S.PostDetailSection>
      <S.PostInfoSection>
        <S.InfoBox>
          <Image alt="조회수" src={ViewsSVG} />
          <span>{views}</span>
        </S.InfoBox>
        <S.InfoBox>
          <Image alt="댓글" src={CommentsSVG} />
          <span>{commentCount}</span>
        </S.InfoBox>
        <S.InfoBox>
          <Image alt="좋아요" src={LikesSVG} />
          <span>{likes}</span>
        </S.InfoBox>
      </S.PostInfoSection>
      {isSetting && (
        <S.StyledInput
          type="checkbox"
          checked={isChecked}
          onClick={handleChecked}
        />
      )}
    </S.Box>
  );
};

export default PostItem;
