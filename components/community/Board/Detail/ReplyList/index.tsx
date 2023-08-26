import { formatDetailCreatedDateToString } from 'utils/date';
import PostReplyItem from './ReplyItem';

interface IRecommentTypes {
  id: number;
  content: string;
  createdDate: string;
  writerId: string;
  writerName: string;
}

const PostReplyList = ({ list }: { list: IRecommentTypes[] | undefined }) => {
  return (
    <>
      {list &&
        list.map(value => (
          <PostReplyItem
            key={value.id}
            id={value.id}
            writerId={value.writerId}
            writerName={value.writerName}
            content={value.content}
            createdDate={formatDetailCreatedDateToString(value.createdDate)}
          />
        ))}
    </>
  );
};
export default PostReplyList;
