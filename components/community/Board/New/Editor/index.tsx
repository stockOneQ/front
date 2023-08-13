import { useEffect } from 'react';
import router from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  postContentState,
  postTitleState,
  searchInputState,
  searchTypeState,
  sortTypeState,
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
  const setSortType = useSetRecoilState(sortTypeState);
  const setSearchType = useSetRecoilState(searchTypeState);
  const setSearchInput = useSetRecoilState(searchInputState);

  useEffect(() => {
    title ? setTitleInput(title) : setTitleInput('');
    content ? setContentInput(content) : setContentInput('');
  }, [title, content]);

  const handleRouter = () => {
    isEdit
      ? router.push(`/community/board/${id}`)
      : router.push('/community/board');

<<<<<<< HEAD
    /** 초기화 */
=======
>>>>>>> ff4bb25 (Merge branch develop into main)
    setSortType('최신순');
    setSearchType('글 제목');
    setSearchInput('');
  };

  const handleSubmit = () => {
<<<<<<< HEAD
    /** ----------------- 게시글 수정 API ----------------- */
    if (isEdit) {
=======
    if (isEdit) {
      /** 게시글 수정 */
>>>>>>> ff4bb25 (Merge branch develop into main)
      API.patch(`/api/boards/${id}`, {
        title: titleInput,
        content: contentInput,
      })
        .then(() => {
<<<<<<< HEAD
          console.log(`${id}번 게시글 수정 성공`);
        })
        .catch(e => {
          console.error(e);
          throw e;
        });
    } else {
      /** ----------------- 게시글 등록 API ----------------- */
=======
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
>>>>>>> ff4bb25 (Merge branch develop into main)
      API.post('/api/boards', {
        title: titleInput,
        content: contentInput,
      })
        .then(() => {
          console.log('게시글 등록 성공');
        })
        .catch(e => {
<<<<<<< HEAD
          console.error(e);
=======
          alert('게시글 등록 실패');
          console.log(`등록할 제목 ${titleInput} 등록할 내용 ${contentInput}`);
          console.log(e);
>>>>>>> ff4bb25 (Merge branch develop into main)
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
        <S.Button
          onClick={handleSubmit}
          disabled={titleInput.length === 0 || contentInput.length === 0}
        >
          저장
        </S.Button>
      </S.ActionButtonGroup>
      <S.EditorContainer>
        <TitleInput />
        <ContentInput />
      </S.EditorContainer>
    </S.Box>
  );
};

export default Editor;
