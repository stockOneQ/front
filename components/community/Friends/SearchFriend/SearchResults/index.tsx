import ResultsList from './ResultsList';
import ResultsPlaceholder from './ResultsPlaceholder';

interface ISearchResultsProps {
  enteredValue: string;
  searchBy: string;
}

/** 검색 결과 */
const SearchResults = ({ enteredValue, searchBy }: ISearchResultsProps) => {
  const isSearch = enteredValue !== (null || undefined || '');

  return (
    <>
      {!isSearch && <ResultsPlaceholder />}
      {isSearch && (
        <ResultsList enteredValue={enteredValue} searchBy={searchBy} />
      )}
    </>
  );
};

export default SearchResults;
