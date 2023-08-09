import { useState } from 'react';
import Image from 'next/image';
import { useRecoilState, useRecoilValue } from 'recoil';
import { deleteCheckedItemsState, isDeleteModeState } from 'recoil/states';
import { IPostPreviewTypes } from 'recoil/states';
import ViewsSVG from 'public/assets/icons/community/views.svg';
import CommentsSVG from 'public/assets/icons/community/comments.svg';
import LikesSVG from 'public/assets/icons/community/likes.svg';

import * as S from './style';
import Link from 'next/link';

interface IPropsTypes extends IPostPreviewTypes {
  isCurrentPathMain: boolean;
}

const PostItem = ({
  id,
  title,
  content,
  hit,
  comment,
  likes,
  isCurrentPathMain,
}: IPropsTypes) => {
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
        <S.PostContentSection>
          <S.Title>{title}</S.Title>
          <S.Content>{content.substring(0, 100)}</S.Content>
        </S.PostContentSection>
        <S.PostInteractionSection>
          <S.Interaction>
            <Image alt="views" src={ViewsSVG} />
            <span>{hit}</span>
          </S.Interaction>
          <S.Interaction>
            <Image alt="comments" src={CommentsSVG} />
            <span>{comment}</span>
          </S.Interaction>
          <S.Interaction>
            <Image alt="likes" src={LikesSVG} />
            <span>{likes}</span>
          </S.Interaction>
        </S.PostInteractionSection>
      </S.Container>

      {/** deleteMode인 경우 체크박스만 존재. 상세 페이지로 이동 못함. */}
      {isDeleteMode ? (
        <S.CheckBox
          type="checkbox"
          checked={deleteCheckedItems.includes(id)}
          onChange={handleChecked}
        />
      ) : (
        <Link
          href={`/community/board/${id}?isCurrentPathMain=${isCurrentPathMain}`}
          as={`/community/board/${id}`}
        >
          <S.StyledLink />
        </Link>
      )}
    </S.Box>
  );
};

export default PostItem;
