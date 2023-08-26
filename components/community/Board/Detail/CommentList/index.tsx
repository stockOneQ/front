import { formatDetailCreatedDateToString } from 'utils/date';
import PostCommentItem from './CommentItem';
import Pagination from '../../Pagination';
import * as S from './style';

interface IRecommentTypes {
  id: number;
  content: string;
  createdDate: string;
  writerId: string;
  writerName: string;
}

interface ICommentTypes extends IRecommentTypes {
  replyList: IRecommentTypes[] | undefined;
}

const CommentList = ({
  list,
  totalPages,
}: {
  list: ICommentTypes[] | undefined;
  totalPages: number;
}) => {
  return (
    <S.List>
      {list &&
        list.map(value => (
          <PostCommentItem
            key={value.id}
            id={value.id}
            writerId={value.writerId}
            writerName={value.writerName}
            content={value.content}
            createdDate={formatDetailCreatedDateToString(value.createdDate)}
            replyList={value.replyList}
          />
        ))}
      {totalPages > 1 && <Pagination />}
    </S.List>
  );
};

export default CommentList;
