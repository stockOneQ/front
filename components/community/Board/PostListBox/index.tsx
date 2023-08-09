import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { postListState } from 'recoil/states';
import * as S from './style';
import { API } from 'pages/api/api';
import PostItemBox from 'components/community/Board/PostListBox/PostItemBox';

interface IPostTypes {
  id: number;
  title: string;
  content: string;
  hit: number;
  likes: number;
  createdDate: string;
  writerId: string;
  writerName: string;
}

const PostListBox = ({ isAll }: { isAll: boolean }) => {
  /** 페이지네이션 구현 필요 */
  const [postList, setPostList] = useRecoilState(postListState);
  const [myPostList, setMyPostList] = useState<IPostTypes[]>();

  if (isAll) {
    useEffect(() => {
      API.get('/api/boards', {
        params: {
          last: '11',
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
  } else {
    useEffect(() => {
      API.get('/api/boards/my', {
        params: {
          last: '4',
        },
      })
        .then(response => {
          console.log('내가 쓴 글 불러오기 성공');
          console.log(response.data.boardListResponse);
          setMyPostList(response.data.boardListResponse);
        })
        .catch(error => {
          console.log(error);
          throw error;
        });
    }, []);
  }

  const list = isAll ? postList : myPostList;

  return (
    <S.Box>
      {list &&
        list.map(value => (
          <PostItemBox
            id={value.id}
            title={value.title}
            content={value.content}
            hit={value.hit}
            like={
              isAll ? value.like : value.likes
            } /** 좋아요수 필드명 통일 필요 */
            isAll={isAll}
          />
        ))}
    </S.Box>
  );
};

export default PostListBox;
