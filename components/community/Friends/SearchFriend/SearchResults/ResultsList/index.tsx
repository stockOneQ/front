import { useRef } from 'react';
import FriendItem from './FriendItem';
import * as S from './style';
import { DUMMY_DATA } from 'components/community/Friends/Profiles/FriendsList';

interface IResultsListProps {
  enteredValue: string;
  searchBy: string;
}

/** 검색 결과 목록 */
const ResultsList = ({ enteredValue, searchBy }: IResultsListProps) => {
  const spaceIdxRef = useRef(-1); // '고양시 덕양점' 중 ' '의 index값

  const filteredData = DUMMY_DATA.filter(({ name, location }) => {
    if (searchBy === '이름') {
      return name.indexOf(enteredValue) !== -1;
    }
    if (searchBy === '상호명') {
      spaceIdxRef.current = location.indexOf(' ');

      return location.slice(spaceIdxRef.current).indexOf(enteredValue) !== -1;
    }
    if (searchBy === '지역명') {
      spaceIdxRef.current = location.indexOf(' ');

      return (
        location.slice(0, spaceIdxRef.current).indexOf(enteredValue) !== -1
      );
    }
  });

  return (
    <S.ResultListBox>
      <S.ResultListTextBox>
        <p>검색 결과</p>
        <div>{filteredData.length}</div>
      </S.ResultListTextBox>
      <S.FriendItemsBox>
        {filteredData.map(({ id, name, location, phone }) => {
          return (
            <FriendItem
              key={id}
              name={name}
              location={location}
              phone={phone}
            />
          );
        })}
      </S.FriendItemsBox>
    </S.ResultListBox>
  );
};

export default ResultsList;
