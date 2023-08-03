import { useState } from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { deleteCheckedItemsState } from 'recoil/states';
import ViewsSVG from 'public/assets/icons/community/views.svg';
import CommentsSVG from 'public/assets/icons/community/comments.svg';
import LikesSVG from 'public/assets/icons/community/likes.svg';

import * as S from './style';

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
  const [deleteCheckedItems, setDeleteCheckedItems] = useRecoilState(
    deleteCheckedItemsState,
  );

  const handleChecked = () => {
    setIsChecked(prev => !prev);

    isChecked
      ? setDeleteCheckedItems(prev => [...prev, postId])
      : setDeleteCheckedItems(
          deleteCheckedItems.filter(checkedItem => checkedItem !== postId),
        );
  };

  return (
    <S.Box>
      <>
        <S.PostContentSection>
          <S.Title>{title}</S.Title>
          <S.Content>{content.substring(0, 100)}</S.Content>
        </S.PostContentSection>
        <S.PostInteractionSection>
          <S.Container>
            <Image alt="views" src={ViewsSVG} />
            <span>{views}</span>
          </S.Container>
          <S.Container>
            <Image alt="comments" src={CommentsSVG} />
            <span>{commentCount}</span>
          </S.Container>
          <S.Container>
            <Image alt="likes" src={LikesSVG} />
            <span>{likes}</span>
          </S.Container>
        </S.PostInteractionSection>
      </>

      {isSetting && (
        <S.CheckBox
          type="checkbox"
          checked={deleteCheckedItems.includes(postId)}
          onClick={handleChecked}
        />
      )}
    </S.Box>
  );
};

export default PostItem;
