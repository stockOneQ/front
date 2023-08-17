import { getCurrentDate } from 'utils/date';
import * as S from './style';
import Info from 'components/community/Board/Detail/PostInfo';
import CommentInput from 'components/community/Board/Detail/CommentInput';

const CommentInputSection = () => {
  return (
    <S.Box>
      {/** 추후 writerName에는 login 한 사용자 이름  */}
      <Info writerName={'박사장'} createdDate={getCurrentDate()} />
      <CommentInput />
    </S.Box>
  );
};

export default CommentInputSection;
