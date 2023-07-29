import ResultsList from './ResultsList';
import ResultsPlaceholder from './ResultsPlaceholder';

interface ISearchResultsProps {
  searchBy: string;
  searchValue: string;
}

/** 검색 결과 */
const SearchResults = ({ searchBy, searchValue }: ISearchResultsProps) => {
  return (
    <>
      {searchValue === '' && <ResultsPlaceholder />}
      {searchValue !== '' && <ResultsList searchBy={searchBy} searchValue={searchValue} />}
    </>
  );
};

export default SearchResults;