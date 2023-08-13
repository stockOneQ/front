import { useContext, useRef } from 'react';
import FriendItem from './FriendItem';
import * as S from './style';
import FriendsListContext from 'contexts/community/friends/FriendsListProvider.ts';

interface IResultsListProps {
  enteredValue: string;
  searchBy: string;
}

/** 검색 결과 목록 */
const ResultsList = ({ enteredValue, searchBy }: IResultsListProps) => {
  const spaceIdxRef = useRef(-1); // '고양시 덕양점' 중 ' '의 index값

  const { friendsList } = useContext(FriendsListContext);

  const filteredData = friendsList.filter(({ name, storeName }) => {
    // TODO: 분기 refactoring
    if (searchBy === '이름') {
      return name.includes(enteredValue);
    }
    if (searchBy === '상호명') {
      spaceIdxRef.current = storeName.indexOf(' ');

      return storeName.slice(0, spaceIdxRef.current).includes(enteredValue);
    }
    if (searchBy === '지역명') {
      spaceIdxRef.current = storeName.indexOf(' ');

      return storeName.slice(spaceIdxRef.current).includes(enteredValue);
    }
  });

  return (
    <S.ResultListBox>
      <S.ResultListTextBox>
        <p>검색 결과</p>
        <div>{filteredData.length}</div>
      </S.ResultListTextBox>
      <S.FriendItemsBox>
        {filteredData.map(({ id, name, storeName, phoneNumber }) => {
          return (
            <FriendItem
              key={id}
              name={name}
              storeName={storeName}
              phoneNumber={phoneNumber}
            />
          );
        })}
      </S.FriendItemsBox>
    </S.ResultListBox>
  );
};

export default ResultsList;
