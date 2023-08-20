import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  deleteCheckedItemsState,
  isDeleteModeState,
  IPostPreviewTypes,
} from 'recoil/states';
import ViewsSVG from 'public/assets/icons/community/views.svg';
import CommentsSVG from 'public/assets/icons/community/comments.svg';
import LikedSVG from 'public/assets/icons/community/liked.svg';

import * as S from './style';

const PostItem = ({
  id,
  title,
  content,
  hit,
  comment,
  likes,
}: IPostPreviewTypes) => {
  const [isChecked, setIsChecked] = useState(false);
  const [deleteCheckedItems, setDeleteCheckedItems] = useRecoilState(
    deleteCheckedItemsState,
  );
  const isDeleteMode = useRecoilValue(isDeleteModeState);

  const handleChecked = () => {
    setIsChecked(prev => !prev);

    isChecked
      ? setDeleteCheckedItems(prev => [...prev, id])
      : setDeleteCheckedItems(
          deleteCheckedItems.filter(checkedItem => checkedItem !== id),
        );
  };

  return (
    <S.Box isDeleteMode={isDeleteMode}>
      <S.Container>
        <S.ContentSection>
          <S.Title>{title}</S.Title>
          <S.Content>{content.substring(0, 100)}</S.Content>
        </S.ContentSection>
        <S.InteractionSection>
          <S.Left>
            <S.Interaction type="views">
              <Image alt="views" src={ViewsSVG} />
              <span>{hit}</span>
            </S.Interaction>
            <S.Interaction type="comments">
              <Image alt="comments" src={CommentsSVG} />
              <span>{comment}</span>
            </S.Interaction>
          </S.Left>

          <S.Interaction type="likes">
            <Image alt="likes" src={LikedSVG} />
            <span>{likes}</span>
          </S.Interaction>
        </S.InteractionSection>
      </S.Container>

      {/** deleteMode인 경우 체크박스만 존재. 상세 페이지로 이동 못함. */}
      {isDeleteMode ? (
        <S.CheckBox
          type="checkbox"
          checked={deleteCheckedItems.includes(id)}
          onChange={handleChecked}
        />
      ) : (
        <Link href={`/community/board/${id}`}>
          <S.StyledLink />
        </Link>
      )}
    </S.Box>
  );
};

export default PostItem;
