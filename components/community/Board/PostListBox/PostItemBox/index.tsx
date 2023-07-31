import { useState } from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { postCheckedItemsState } from "recoil/states";
import ViewsSVG from "public/assets/icons/community/views.svg";
import CommentsSVG from "public/assets/icons/community/comments.svg";
import LikesSVG from "public/assets/icons/community/likes.svg";

import * as S from "./style";

const PostItem = ({
  postId,
  title,
  content,
  views,
  commentCount,
  likes,
  isSetting,
}: {
  postId: number;
  title: string;
  content: string;
  views: number;
  commentCount: number;
  likes: number;
  isSetting?: boolean;
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [postCheckedItems, setPostCheckedItems] = useRecoilState(
    postCheckedItemsState
  );

  const handleChecked = () => {
    setIsChecked((prev) => !prev);

    isChecked
      ? setPostCheckedItems((prev) => [...prev, postId])
      : setPostCheckedItems(
          postCheckedItems.filter((checkedItem) => checkedItem !== postId)
        );
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
          checked={postCheckedItems.includes(postId) ? true : false}
          onClick={handleChecked}
        />
      )}
    </S.Box>
  );
};

export default PostItem;
