import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { commentsRenderTriggerState } from 'recoil/states';
import * as S from './style';
import { API } from 'pages/api/api';
import PhotoUploadSVG from 'public/assets/icons/community/photoUpload.svg';
import React from 'react';

const CommentInput = () => {
  const router = useRouter();
  const { id } = router.query; /** 게시글 ID */
  const [input, setInput] = useState('');

  /** 댓글 등록 후 댓글 목록 리렌더링 위함 */
  const setCommentsRenderTrigger = useSetRecoilState(
    commentsRenderTriggerState,
  );

  const [formData, setFormData] = useState({
    image: '',
    content: input,
  });

  useEffect(() => {
    setFormData({ image: '', content: input });
  }, [input]);

  /** 댓글 등록 버튼 클릭 시 처리 함수 */
  const handleSubmit = () => {
    const formDatas = new FormData();
    const jsonFormData = {
      content: formData.content,
    };

    formDatas.append('image', '');
    formDatas.append(
      'request',
      new Blob([JSON.stringify(jsonFormData)], {
        type: 'application/json',
      }),
    );

    /** ----------------- 댓글 등록 API ----------------- */
    API.post(`/api/comments/${id}`, formDatas, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        console.log(`${id}번 게시글에 댓글 등록 성공`);
        setCommentsRenderTrigger(prev => !prev);
        setInput('');
        setFormData({ image: '', content: input });
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
  };

  return (
    <S.Box>
      <S.InputBox>
        <S.PhotoUploadButton>
          <Image src={PhotoUploadSVG} alt="upload" />
        </S.PhotoUploadButton>
        <S.CommentInput
          value={input}
          maxLength={1000}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setInput(e.target.value)
          }
        />
      </S.InputBox>
      <S.SubmitButton onClick={handleSubmit} disabled={input.length === 0}>
        <span>댓글 등록</span>
      </S.SubmitButton>
    </S.Box>
  );
};

export default CommentInput;
