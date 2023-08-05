import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { postListState } from 'recoil/states';
import * as S from './style';
import { API } from 'pages/api/api';
import PostItemBox from 'components/community/Board/PostListBox/PostItemBox';

const PostListBox = () => {
  /** 게시글 전체 목록 불러오기
   * 페이지네이션 구현 필요 */
  const [postList, setPostList] = useRecoilState(postListState);

  useEffect(() => {
    API.get('/api/boards', {
      params: {
        last: '12',
      },
    })
      .then(response => {
        console.log('게시글 목록 불러오기 성공');
        console.log(response.data.boardListResponse);
        setPostList(response.data.boardListResponse);
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }, []);

  return (
    <S.Box>
      {postList.map(value => (
        <PostItemBox
          id={value.id}
          title={value.title}
          content={value.content}
          hit={value.hit}
          comment={value.comment}
          like={value.like}
        />
      ))}
    </S.Box>
  );
};

export default PostListBox;
