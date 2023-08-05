import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { postListState, searchInputState } from 'recoil/states';
import * as S from './style';
import { API } from 'pages/api/api';
import { sortTypeState, searchTypeState } from 'recoil/states';

const BoardSearchInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const sortType = useRecoilValue(sortTypeState);
  const searchType = useRecoilValue(searchTypeState);
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);
  const setPostList = useSetRecoilState(postListState);

  useEffect(() => {
    API.get('/api/boards', {
      params: {
        last: '-1',
        sort: sortType,
        search:
          searchType === '글 제목'
            ? '제목'
            : searchType === '글 내용'
            ? '내용'
            : '작성자',
        word: searchInput,
      },
    })
      .then(response => {
        console.log('게시글 검색 목록 불러오기 성공');
        console.log(response.data.boardListResponse);
        setPostList(response.data.boardListResponse);
      })
      .catch(e => {
        console.log(e);
        throw e;
      });
  }, [sortType, searchType, searchInput]);

  const handleEnter = (e: { key: string }) => {
    if (e.key === 'Enter') setSearchInput(value);
  };

  return (
    <S.InputBar
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      onKeyDown={handleEnter}
    />
  );
};

export default BoardSearchInput;
