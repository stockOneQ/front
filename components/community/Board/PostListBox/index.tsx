import * as S from './style';
import PostItemBox from 'components/community/Board/PostListBox/PostItemBox';
import { IPostPreviewTypes } from 'recoil/states';

const PostListBox = ({ list }: { list: IPostPreviewTypes[] }) => {
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
          />
        ))}
    </S.List>
  );
};

export default PostListBox;
