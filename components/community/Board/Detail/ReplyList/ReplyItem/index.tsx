import { useState } from 'react';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { recommentsRenderTriggerState } from 'recoil/states';
import * as S from './style';
import { API } from 'pages/api/api';
import PostCommentEditor from '../../CommentEditor';

import profileImage from 'public/assets/imgs/community/profileImage.png';
import CommentMoreSVG from 'public/assets/icons/community/more.svg';
import ReplySVG from 'public/assets/icons/community/reply.svg';

interface IRecommentTypes {
  id: number;
  content: string;
  createdDate: string | undefined;
  writerId: string;
  writerName: string;
}
const PostReplyItem = ({
  id,
  content,
  createdDate,
  writerName,
}: IRecommentTypes) => {
  const [isMore, setIsMore] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const setRecommentRenderTrigger = useSetRecoilState(
    recommentsRenderTriggerState,
  );

  const handleMore = () => {
    setIsMore(prev => !prev);
  };

  const handleEdit = () => {
    setIsEdit(true);
    setIsMore(false);
  };

  /** ----------------- 대댓글 삭제 API ----------------- */
  const handleDelete = () => {
    API.delete(`/api/replies/${id}`)
      .then(() => {
        console.log(`${id}번 대댓글 삭제 성공`);
        setRecommentRenderTrigger(prev => !prev);
        setIsMore(false);
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
  };

  return (
    <S.Box>
      <S.Comment>
        <S.Div>
          <Image src={ReplySVG} alt={'reply'} />
          <Image src={profileImage} alt="profile" />
        </S.Div>

        <S.Container>
          <h1>{writerName} 사장님</h1>
          {/** 수정하기 */}
          {!isEdit ? (
            <S.CommentContainer>
              <S.ContentContainer>
                <span>{content}</span>
                <S.Bottom>
                  <S.Date>{createdDate}</S.Date>
                </S.Bottom>
              </S.ContentContainer>
            </S.CommentContainer>
          ) : (
            <PostCommentEditor
              isReply={true}
              commentId={id}
              content={content}
              setIsEdit={setIsEdit}
            />
          )}
        </S.Container>
      </S.Comment>
      {/** 추후 loginId랑 비교하여 더보기 버튼 띄우기 */}
      {writerName === '새우' && !isEdit && (
        <S.OptionButton onClick={handleMore}>
          <Image src={CommentMoreSVG} alt="commentMore" />
        </S.OptionButton>
      )}
      {isMore && (
        <S.Modal>
          <S.Button type="수정" onClick={handleEdit}>
            수정하기
          </S.Button>
          <S.Button type="삭제" onClick={handleDelete}>
            삭제하기
          </S.Button>
        </S.Modal>
      )}
    </S.Box>
  );
};

export default PostReplyItem;
