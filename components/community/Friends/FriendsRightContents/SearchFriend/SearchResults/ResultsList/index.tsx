import FriendItem from './FriendItem';
import * as S from './style';
import { FriendsListType } from '@Types/community/friends/friendsList';

interface IResultsListProps {
  searchResultList: FriendsListType['friendsList'];
}

/** 검색 결과 목록 */
const ResultsList = ({ searchResultList }: IResultsListProps) => {
  return (
    <S.ResultListBox>
      <>
        <S.ResultListTextBox>
          <p>검색 결과</p>
          <div>{searchResultList?.length || 0}</div>
        </S.ResultListTextBox>
        <S.FriendItemsBox>
          {searchResultList &&
            searchResultList.map(({ id, name, storeName, phoneNumber }) => {
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
      </>
    </S.ResultListBox>
  );
};

export default ResultsList;
