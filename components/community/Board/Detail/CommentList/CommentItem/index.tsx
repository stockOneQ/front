import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  commentsRenderTriggerState,
  loginIdState,
  recommentsRenderTriggerState,
} from 'recoil/states';
import * as S from './style';
import { API } from 'pages/api/api';
import PostCommentEditor from '../../CommentEditor';

import profileImage from 'public/assets/imgs/community/profileImage.png';
import CommentMoreSVG from 'public/assets/icons/community/more.svg';
import PhotoUploadSVG from 'public/assets/icons/community/photoUpload.svg';
import ReplySVG from 'public/assets/icons/community/reply.svg';
import ReplyList from '../../ReplyList';

interface IRecommentTypes {
  id: number;
  content: string;
  createdDate: string;
  writerId: string;
  writerName: string;
}

interface ICommentTypes extends IRecommentTypes {
  replyList: IRecommentTypes[] | undefined;
}

const CommentItem = ({
  id,
  content,
  createdDate,
  writerName,
  writerId,
  replyList,
}: ICommentTypes) => {
  const loginId = useRecoilValue(loginIdState);
  const [isModal, setIsModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useState(false);
  const [input, setInput] = useState('');
  const [formData, setFormData] = useState({
    image: '',
    content: '',
  });
  const setCommentRenderTrigger = useSetRecoilState(commentsRenderTriggerState);
  const setRecommentRenderTrigger = useSetRecoilState(
    recommentsRenderTriggerState,
  );

  useEffect(() => {
    setFormData({ image: '', content: input });
  }, [input]);

  const handleMore = () => {
    setIsModal(prev => !prev);
  };

  const handleEdit = () => {
    setIsEdit(true);
    setIsModal(false);
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

  /** ----------------- 대댓글 등록 API ----------------- */
  const handleReply = () => {
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

    API.post(`/api/replies/${id}`, formDatas, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        console.log(`${id}번 댓글에 답글쓰기 성공`);
        setRecommentRenderTrigger(prev => !prev);
        setIsReply(false);
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
      <S.Comment>
        <S.Div>
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
                  <S.ReplyButton onClick={() => setIsReply(prev => !prev)}>
                    답글쓰기
                  </S.ReplyButton>
                </S.Bottom>
              </S.ContentContainer>
              {/** 답글쓰기 */}
              {isReply && (
                <S.ReplyContainer>
                  <S.Left>
                    <Image src={ReplySVG} alt="reply" />
                    <Image src={profileImage} alt="profile" />
                  </S.Left>

                  <S.Right>
                    <S.Writer>{writerName} 사장님</S.Writer>
                    <S.Reply>
                      <S.Editor>
                        <S.PhotoUploadButton>
                          <Image src={PhotoUploadSVG} alt="upload" />
                        </S.PhotoUploadButton>
                        <S.CommentInput
                          value={input}
                          maxLength={1000}
                          onChange={(
                            e: React.ChangeEvent<HTMLTextAreaElement>,
                          ) => setInput(e.target.value)}
                        />
                      </S.Editor>
                      <S.SubmitButton
                        onClick={handleReply}
                        disabled={input.length === 0}
                      >
                        <span>댓글 등록</span>
                      </S.SubmitButton>
                    </S.Reply>
                  </S.Right>
                </S.ReplyContainer>
              )}
            </S.CommentContainer>
          ) : (
            <PostCommentEditor
              isReply={false}
              commentId={id}
              content={content}
              setIsEdit={setIsEdit}
            />
          )}
        </S.Container>
      </S.Comment>
      <ReplyList list={replyList} />

      {writerId === loginId && !isEdit && (
        <S.OptionButton onClick={handleMore}>
          <Image src={CommentMoreSVG} alt="commentMore" />
        </S.OptionButton>
      )}
      {isModal && (
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

export default CommentItem;
