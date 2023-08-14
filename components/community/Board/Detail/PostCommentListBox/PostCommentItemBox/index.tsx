import { useState } from 'react';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { commentsRenderTriggerState } from 'recoil/states';
import * as S from './style';
import profileImage from 'public/assets/imgs/community/profileImage.png';
import CommentMoreSVG from 'public/assets/icons/community/more.svg';
import { API } from 'pages/api/api';

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
  const [isClick, setIsClick] = useState(false);
  const setCommentRenderTrigger = useSetRecoilState(commentsRenderTriggerState);

  const handleClick = () => {
    setIsClick(prev => !prev);
  };

  const handleEdit = () => {};

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
        <S.ContentContainer>
          <h1>{writerName} 사장님</h1>
          <span>{content}</span>
        </S.ContentContainer>
        <S.Date>{createdDate}</S.Date>
      </S.Container>
      {/** 추후 loginId랑 비교하여 더보기 버튼 띄우기 */}
      <S.OptionButton onClick={handleClick}>
        <Image src={CommentMoreSVG} alt="commentMore" />
      </S.OptionButton>
      {isClick && (
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
