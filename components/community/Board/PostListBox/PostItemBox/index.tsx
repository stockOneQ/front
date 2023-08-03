import { useState } from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { deleteCheckedItemsState } from 'recoil/states';
import ViewsSVG from 'public/assets/icons/community/views.svg';
import CommentsSVG from 'public/assets/icons/community/comments.svg';
import LikesSVG from 'public/assets/icons/community/likes.svg';

import * as S from './style';
import Link from 'next/link';

interface IPostTypes {
  postId: number;
  title: string;
  content: string;
  views: number;
  commentCount: number;
  likes: number;
  isSetting: boolean;
}

const PostItem = ({
  postId,
  title,
  content,
  views,
  commentCount,
  likes,
  isSetting,
}: IPostTypes) => {
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
      <S.Container>
        <S.PostContentSection>
          <S.Title>{title}</S.Title>
          <S.Content>{content.substring(0, 100)}</S.Content>
        </S.PostContentSection>
        <S.PostInteractionSection>
          <S.Interaction>
            <Image alt="views" src={ViewsSVG} />
            <span>{views}</span>
          </S.Interaction>
          <S.Interaction>
            <Image alt="comments" src={CommentsSVG} />
            <span>{commentCount}</span>
          </S.Interaction>
          <S.Interaction>
            <Image alt="likes" src={LikesSVG} />
            <span>{likes}</span>
          </S.Interaction>
        </S.PostInteractionSection>
      </S.Container>

      <Link href={`/community/board/${postId}`}>
        <S.StyledLink />
      </Link>

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
