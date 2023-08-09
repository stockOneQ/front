import * as S from './style';
import PostItemBox from 'components/community/Board/PostListBox/PostItemBox';
import { IPostPreviewTypes } from 'recoil/states';

const PostListBox = ({
  isAll,
  list,
}: {
  list: IPostPreviewTypes[];
  isAll: boolean;
}) => {
  return (
    <S.List>
      {list &&
        list.map(value => (
          <PostItemBox
            id={value.id}
            title={value.title}
            content={value.content}
            hit={value.hit}
            comment={value.comment}
            likes={value.likes}
            isAll={isAll}
          />
        ))}
    </S.List>
  );
};

export default PostListBox;
