import ResultsList from './ResultsList';
import ResultsPlaceholder from './ResultsPlaceholder';

interface ISearchResultsProps {
  isSearch: boolean;
}

/** 검색 결과 */
const SearchResults = ({ isSearch }: ISearchResultsProps) => {
  return (
    <>
      {!isSearch && <ResultsPlaceholder />}
      {isSearch && <ResultsList />}
    </>
  );
};

export default SearchResults;