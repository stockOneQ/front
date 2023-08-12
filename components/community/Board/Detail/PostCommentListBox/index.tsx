import { useRecoilValue } from 'recoil';
import { postCommentListState } from 'recoil/states';
import PostCommentItemBox from './PostCommentItemBox';
import { styled } from 'styled-components';

const PostCommentListBox = () => {
  const postCommentList = useRecoilValue(postCommentListState);

  return (
    <>
      {postCommentList.map(value => (
        <PostCommentItemBox
          key={value.id}
          writerName={value.writer}
          content={value.content}
          date={value.uploadTime}
        />
      ))}
    </>
  );
};

export default PostCommentListBox;
