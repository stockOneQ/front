import { IPostPreviewTypes } from 'recoil/states';
import * as S from './style';
import PostItem from 'components/community/Board/PostList/PostItem';
import Pagination from '../Pagination';

const PostList = ({
  list,
  totalPages,
}: {
  list: IPostPreviewTypes[];
  totalPages: number;
}) => {
  return (
    <S.List>
      {list &&
        list.map(value => (
          <PostItem
            id={value.id}
            title={value.title}
            content={value.content}
            hit={value.hit}
            comment={value.comment}
            likes={value.likes}
          />
        ))}
      {totalPages > 1 && <Pagination />}
    </S.List>
  );
};

export default PostList;
