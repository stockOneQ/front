import { useCookies } from 'react-cookie';
import { getCurrentDate } from 'utils/date';

import * as S from './style';
import Info from 'components/community/Board/Detail/PostInfo';
import CommentInput from 'components/community/Board/Detail/CommentInput';

const CommentInputSection = () => {
  const [cookies, ,] = useCookies(['logInUserName']);

  return (
    <>
      {cookies.logInUserName && (
        <S.Box>
          <Info
            writerName={cookies.logInUserName}
            createdDate={getCurrentDate()}
          />
          <CommentInput />
        </S.Box>
      )}
    </>
  );
};

export default CommentInputSection;
