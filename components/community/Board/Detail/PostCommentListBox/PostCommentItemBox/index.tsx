import { useState } from 'react';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { commentsRenderTriggerState } from 'recoil/states';
import * as S from './style';
import { API } from 'pages/api/api';
import profileImage from 'public/assets/imgs/community/profileImage.png';
import CommentMoreSVG from 'public/assets/icons/community/more.svg';
import PostCommentEditor from '../../PostCommentEditor';

type ICommentType = {
  id: number;
  writerName: string;
  content: string;
  createdDate: string | undefined;
};

const PostCommentItemBox = ({
  id,
  writerName,
  content,
  createdDate,
}: ICommentType) => {
  const [isMore, setIsMore] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const setCommentRenderTrigger = useSetRecoilState(commentsRenderTriggerState);

  const handleMore = () => {
    setIsMore(true);
  };

  const handleEdit = () => {
    setIsEdit(true);
    setIsMore(false);
  };

  /** ----------------- 댓글 삭제 API ----------------- */
  const handleDelete = () => {
    API.delete(`/api/comments/${id}`)
      .then(() => {
        console.log(`${id}번의 댓글 삭제 성공`);
        setCommentRenderTrigger(prev => !prev);
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
  };

  return (
    <S.Box>
      <Image src={profileImage} alt="profile" />
      <S.Container>
        <h1>{writerName} 사장님</h1>
        {!isEdit ? (
          <S.ContentContainer>
            <span>{content}</span>
            <S.Bottom>
              <S.Date>{createdDate}</S.Date>
              <S.ReplyButton>답글쓰기</S.ReplyButton>
            </S.Bottom>
          </S.ContentContainer>
        ) : (
          <PostCommentEditor
            commentId={id}
            isEdit={true}
            content={content}
            height={15.3}
            setIsEdit={setIsEdit}
          />
        )}
      </S.Container>
      {/** 추후 loginId랑 비교하여 더보기 버튼 띄우기 */}
      {!isEdit && (
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

export default PostCommentItemBox;
