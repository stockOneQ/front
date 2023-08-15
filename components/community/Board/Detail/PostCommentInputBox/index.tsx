import { getCurrentDate } from 'utils/date';
import * as S from './style';
import PostInfoBox from 'components/community/Board/Detail/PostInfoBox';
import PostCommentEditor from 'components/community/Board/Detail/PostCommentEditor';

const PostCommentInputBox = () => {
  return (
    <S.InputBox>
      {/** 추후 writerName에는 login 한 사용자 이름  */}
      <PostInfoBox writerName={'박사장'} createdDate={getCurrentDate()} />
      <PostCommentEditor isEdit={false} height={15} />
    </S.InputBox>
  );
};

export default PostCommentInputBox;
