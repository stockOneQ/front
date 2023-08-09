import { useRecoilState, useSetRecoilState } from 'recoil';
import { postCommentListState, postCommentInputState } from 'recoil/states';
import { getCurrentDate } from 'utils/date';
import * as S from './style';
import WriterInfoBox from 'components/community/Board/Detail/WriterInfoBox';
import PostCommentInput from 'components/community/Board/Detail/PostCommentInput';

let id = 3;
const getId = () => {
  return id++;
};

const PostCommentInputBox = () => {
  const [commentInput, setCommentInput] = useRecoilState(postCommentInputState);
  const setPostCommentList = useSetRecoilState(postCommentListState);

  const handleSubmit = () => {
    if (commentInput.length < 1) return alert('1자 이상 입력해 주세요.');

    setPostCommentList(com => [
      ...com,
      {
        id: getId(),
        writer: '임하림',
        uploadTime: getCurrentDate(),
        content: commentInput,
      },
    ]);

    setCommentInput('');
  };

  return (
    <S.InputBox>
      <WriterInfoBox writerName={'임하림'} createdDate={getCurrentDate()} />
      <PostCommentInput />
      <S.SubmitButton onClick={handleSubmit}>
        <span>댓글 등록</span>
      </S.SubmitButton>
    </S.InputBox>
  );
};

export default PostCommentInputBox;
