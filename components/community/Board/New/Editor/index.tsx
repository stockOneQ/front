import { useEffect } from 'react';
import router from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  isCurrentPathMainState,
  postContentState,
  postTitleState,
} from 'recoil/states';
import TitleInput from './TitleInput';
import ContentInput from './ContentInput';
import HeadingText from 'components/common/HeadingText';
import * as S from './style';
import { API } from 'pages/api/api';

const Editor = ({
  isEdit,
  id,
  title,
  content,
}: {
  isEdit: boolean;
  id?: number;
  title?: string;
  content?: string;
}) => {
  const [titleInput, setTitleInput] = useRecoilState(postTitleState);
  const [contentInput, setContentInput] = useRecoilState(postContentState);

  const isCurrentPathMain = useRecoilValue(isCurrentPathMainState);

  useEffect(() => {
    title ? setTitleInput(title) : setTitleInput('');
    content ? setContentInput(content) : setContentInput('');
  }, [title, content]);

  const handleRouter = () => {
    isEdit
      ? router.push(`/community/board/${id}`)
      : router.push('/community/board');
  };

  const handleSubmit = () => {
    if (titleInput.length < 1) return alert('제목을 1자 이상 입력해 주세요.');
    if (contentInput.length < 1) return alert('내용을 1자 이상 입력해 주세요.');

    if (isEdit) {
      /** 게시글 수정 */
      API.patch(`/api/boards/${id}`, {
        title: titleInput,
        content: contentInput,
      })
        .then(() => {
          console.log('게시글 수정 성공');
        })
        .catch(e => {
          alert('게시글 수정 실패');
          console.log(`수정할 제목 ${titleInput} 수정할 내용 ${contentInput}`);
          console.log(e);
          throw e;
        });
    } else {
      /** 게시글 등록 */
      API.post('/api/boards', {
        title: titleInput,
        content: contentInput,
      })
        .then(() => {
          console.log('게시글 등록 성공');
        })
        .catch(e => {
          alert('게시글 등록 실패');
          console.log(`등록할 제목 ${titleInput} 등록할 내용 ${contentInput}`);
          console.log(e);
          throw e;
        });
    }

    handleRouter();
  };
  return (
    <S.Box>
      <HeadingText>{isEdit ? '게시글 수정' : '게시글 작성'}</HeadingText>
      <S.ActionButtonGroup>
        <S.Button onClick={handleRouter}>취소</S.Button>

        <S.Button onClick={handleSubmit}>저장</S.Button>
      </S.ActionButtonGroup>
      <S.EditorContainer>
        <TitleInput />
        <ContentInput />
      </S.EditorContainer>
    </S.Box>
  );
};

export default Editor;
