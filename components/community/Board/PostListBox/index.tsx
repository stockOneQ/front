import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  myPostListState,
  postListState,
  sortTypeState,
  searchTypeState,
  searchInputState,
} from 'recoil/states';
import * as S from './style';
import { API } from 'pages/api/api';
import { IPostPreviewTypes } from 'recoil/states';
import PostItemBox from 'components/community/Board/PostListBox/PostItemBox';

const PostListBox = ({ isAll }: { isAll: boolean }) => {
  /** 페이지네이션 구현 필요 */
  const sortType = useRecoilValue(sortTypeState);
  const searchType = useRecoilValue(searchTypeState);
  const searchInput = useRecoilValue(searchInputState);

  const setPostList = useSetRecoilState(postListState);
  const setMyPostList = useSetRecoilState(myPostListState);

  /** 전체 글 목록인지 내가 쓴 글 목록인지 */
  const [list, setList] = useState<IPostPreviewTypes[]>();

  useEffect(() => {
    API.get(`/api/boards${isAll ? '' : '/my'}`, {
      params: {
        last: '14',
        sort: sortType,
        search:
          searchType === '글 제목'
            ? '제목'
            : isAll
            ? searchType === '글 내용'
              ? '내용'
              : '작성자'
            : '내용',
        word: searchInput,
      },
    })
      .then(res => {
        console.log(
          isAll
            ? '전체 글 목록 불러오기 성공'
            : '내가 쓴 글 목록 불러오기 성공',
        );
        console.log(res.data.boardListResponse);
        isAll
          ? setPostList(res.data.boardListResponse)
          : setMyPostList(res.data.boardListResponse);
        setList(res.data.boardListResponse);
      })
      .catch(e => {
        console.log(e);
        throw e;
      });
  }, [sortType, searchType, searchInput]);

  return (
    <S.List>
      {list &&
        list.map(value => (
          <PostItemBox
            id={value.id}
            title={value.title}
            content={value.content}
            hit={value.hit}
            comment={value.comment}
            like={value.like} /** 좋아요수 필드명 통일 필요 */
            isAll={isAll}
          />
        ))}
    </S.List>
  );
};

export default PostListBox;
