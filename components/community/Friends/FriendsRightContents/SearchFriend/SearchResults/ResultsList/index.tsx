import FriendItem from './FriendItem';
import * as S from './style';
import { FriendsListType } from '@Types/community/friends/friendsList';

interface IResultsListProps {
  searchResultList: FriendsListType['friendsList'];
}

/** 검색 결과 목록 */
const ResultsList = ({ searchResultList }: IResultsListProps) => {
  console.log('here', searchResultList);

  return (
    <S.ResultListBox>
      <>
        <S.ResultListTextBox>
          <p>검색 결과</p>
          <div>{searchResultList?.length || 0}</div>
        </S.ResultListTextBox>
        <S.FriendItemsBox>
          {searchResultList &&
            searchResultList.map(
              ({ id, name, storeName, phoneNumber, relationStatus }) => {
                return (
                  <FriendItem
                    key={id}
                    name={name}
                    storeName={storeName}
                    phoneNumber={phoneNumber}
                    relationStatus={relationStatus}
                  />
                );
              },
            )}
        </S.FriendItemsBox>
      </>
    </S.ResultListBox>
  );
};

export default ResultsList;
