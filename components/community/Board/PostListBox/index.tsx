import PostItemBox from 'components/community/Board/PostListBox/PostItemBox';
import * as S from './style';
import { useEffect, useState } from 'react';
import { API } from 'pages/api/api';

interface IPostTypes {
  id: number;
  title: string;
  content: string;
  hit: number;
  comment: number;
  like: number;
}

const PostListBox = () => {
  /** 게시글 전체 목록 불러오기
   * 페이지네이션 구현 필요 */
  const [postList, setPostList] = useState<IPostTypes[]>([]);

  useEffect(() => {
    API.get('/api/boards', {
      params: {
        last: '',
      },
    })
      .then(response => {
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
      {postList.map((value: IPostTypes) => (
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
