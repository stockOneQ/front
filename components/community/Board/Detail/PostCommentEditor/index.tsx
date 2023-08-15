import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  commentsRenderTriggerState,
  postCommentInputState,
} from 'recoil/states';
import * as S from './style';
import { API } from 'pages/api/api';
import PhotoUploadSVG from 'public/assets/icons/community/photoUpload.svg';
import React from 'react';

const PostCommentEditor = ({
  commentId,
  height,
  isEdit,
  content,
  setIsEdit,
}: {
  commentId?: number;
  height: number;
  isEdit: boolean;
  content?: string;
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const { id } = router.query; /** 게시글 ID */
  const [input, setInput] = useRecoilState(postCommentInputState);
  const setCommentsRenderTrigger = useSetRecoilState(
    commentsRenderTriggerState,
  );

  useEffect(() => {
    if (isEdit && content) return setInput(content);
    setInput('');
  }, []);

  console.log(isEdit, content, input);

  const [formData, setFormData] = useState({
    image: '',
    content: '',
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

    /** ----------------- 댓글 등록/수정 API ----------------- */
    if (isEdit) {
      API.patch(`/api/comments/${commentId}`, formDatas, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(() => {
          console.log(`${id}번 게시글에 댓글 수정 성공`);
          if (setIsEdit) setIsEdit(false); /** Edit Mode off */
          setCommentsRenderTrigger(prev => !prev);
          setInput('');
          setFormData({ image: '', content: input });
        })
        .catch(e => {
          console.error(e);
          throw e;
        });
    } else {
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
    }
  };

  return (
    <S.Box>
      <S.Editor height={height}>
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
      </S.Editor>
      <S.SubmitButton onClick={handleSubmit}>
        <span>댓글 등록</span>
      </S.SubmitButton>
    </S.Box>
  );
};

export default PostCommentEditor;
