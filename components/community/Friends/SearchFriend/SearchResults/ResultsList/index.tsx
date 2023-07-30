import { useRef } from 'react';
import FriendItem from './FriendItem';
import * as S from './style';
import { DUMMY_DATA } from 'components/community/Friends/Profiles/FriendsList';

interface IResultsListProps {
  searchBy: string;
  searchValue: string;
}

/** 검색 결과 목록 */
const ResultsList = ({ searchBy, searchValue }: IResultsListProps) => {
  const countRef = useRef(0);

  return (
    <S.ResultListBox>
      <S.ResultListTextBox>
        <p>검색 결과</p>
        <div>{countRef.current}</div>
      </S.ResultListTextBox>
      <S.FriendItemsBox>
        {
          DUMMY_DATA
            .filter(({ name, location }) => {
              countRef.current = 0;

              if (searchBy === '이름') {
                return name.indexOf(searchValue) !== -1
              } else if (searchBy === '상호명') {
                const spaceIndex = location.indexOf(' ');
                
                return location.slice(spaceIndex).indexOf(searchValue) !== -1;
              } else {
                const spaceIndex = location.indexOf(' ');
                
                return location.slice(0, spaceIndex).indexOf(searchValue) !== -1;
              }
            })
            .map(({ id, name, location, phone }) => {
              countRef.current += 1;

              return <FriendItem key={id} name={name} location={location} phone={phone} />
            })
        }
      </S.FriendItemsBox>
    </S.ResultListBox>
  );
};

export default ResultsList;