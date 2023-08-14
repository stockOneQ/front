import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  commentsRenderTriggerState,
  postCommentInputState,
} from 'recoil/states';
import { getCurrentDate } from 'utils/date';
import * as S from './style';
import PostInfoBox from 'components/community/Board/Detail/PostInfoBox';
import PostCommentInput from 'components/community/Board/Detail/PostCommentInput';
import { API } from 'pages/api/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PostCommentInputBox = () => {
  const router = useRouter();
  const { id } = router.query;
  const [content, setContent] = useRecoilState(postCommentInputState);
  const setCommentsRenderTrigger = useSetRecoilState(
    commentsRenderTriggerState,
  );
  const [formData, setFormData] = useState({
    image: '',
    content: content,
  });

  useEffect(() => {
    setFormData({ image: '', content: content });
  }, [content]);

  const handleSubmit = () => {
    const formDatas = new FormData();
    const jsonFormData = {
      content: formData.content,
    };

    formDatas.append('image', '');
    formDatas.append(
      'request',
      new Blob([JSON.stringify(jsonFormData)], { type: 'application/json' }),
    );

    /** ----------------- 댓글 등록 API ----------------- */
    API.post(`/api/comments/${id}`, formDatas, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        console.log(`${id}번 게시글에 댓글 등록 성공`);
        setContent('');
        setCommentsRenderTrigger(prev => !prev);
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
  };

  return (
    <S.InputBox>
      {/** 추후 writerName에는 login 한 사용자 이름  */}
      <PostInfoBox writerName={'박사장'} createdDate={getCurrentDate()} />
      <PostCommentInput />
      <S.SubmitButton onClick={handleSubmit}>
        <span>댓글 등록</span>
      </S.SubmitButton>
    </S.InputBox>
  );
};

export default PostCommentInputBox;
