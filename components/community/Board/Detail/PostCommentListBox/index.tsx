import { formatCreatedDateToString } from 'utils/date';
import PostCommentItemBox from './PostCommentItemBox';

interface ICommentTypes {
  id: number;
  image: Array<string>;
  content: string;
  createdDate: string;
  writerId: string;
  writerName: string;
}

const PostCommentListBox = ({
  list,
}: {
  list: ICommentTypes[] | undefined;
}) => {
  return (
    <>
      {list &&
        list.map(value => (
          <PostCommentItemBox
            key={value.id}
            id={value.id}
            writerName={value.writerName}
            content={value.content}
            createdDate={formatCreatedDateToString(value.createdDate)}
          />
        ))}
    </>
  );
};

export default PostCommentListBox;
