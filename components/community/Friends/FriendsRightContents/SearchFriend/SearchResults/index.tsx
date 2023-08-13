import { FriendsListType } from '@Types/community/friends/friendsList';
import ResultsList from './ResultsList';
import ResultsPlaceholder from './ResultsPlaceholder';

interface ISearchResultsProps {
  searchResultList: FriendsListType['friendsList'];
}

/** 검색 결과 */
const SearchResults = ({ searchResultList }: ISearchResultsProps) => {
  const isSearch = searchResultList.length !== 0;

  return (
    <>
      {!isSearch && <ResultsPlaceholder />}
      {isSearch && <ResultsList searchResultList={searchResultList} />}
    </>
  );
};

export default SearchResults;
