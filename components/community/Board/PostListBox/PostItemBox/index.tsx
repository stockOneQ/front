import { useState } from 'react';
import Image from 'next/image';
import { useRecoilState, useRecoilValue } from 'recoil';
import { deleteCheckedItemsState, isDeleteModeState } from 'recoil/states';
import ViewsSVG from 'public/assets/icons/community/views.svg';
import CommentsSVG from 'public/assets/icons/community/comments.svg';
import LikesSVG from 'public/assets/icons/community/likes.svg';

import * as S from './style';
import Link from 'next/link';

interface IPostTypes {
  id: number;
  title: string;
  content: string;
  hit: number;
  comment: number;
  like: number;
}

const PostItem = ({ id, title, content, hit, comment, like }: IPostTypes) => {
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
            <span>{like}</span>
          </S.Interaction>
        </S.PostInteractionSection>
      </S.Container>

      {/** deleteMode인 경우 체크박스만 존재. 상세 페이지로 이동 못함. */}
      {isDeleteMode ? (
        <S.CheckBox
          type="checkbox"
          checked={deleteCheckedItems.includes(id)}
          onClick={handleChecked}
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
