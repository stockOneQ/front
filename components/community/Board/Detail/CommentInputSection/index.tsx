import { getCurrentDate } from 'utils/date';
import * as S from './style';
import Info from 'components/community/Board/Detail/PostInfo';
import CommentInput from 'components/community/Board/Detail/CommentInput';
import { nameState } from 'recoil/states';
import { useRecoilValue } from 'recoil';

const CommentInputSection = () => {
  const loginName = useRecoilValue(nameState);

  return (
    <>
      {loginName && (
        <S.Box>
          <Info writerName={loginName} createdDate={getCurrentDate()} />
          <CommentInput />
        </S.Box>
      )}
    </>
  );
};

export default CommentInputSection;
