import { FriendsListType } from '@Types/community/friends/friendsList';
import ResultsList from './ResultsList';
import * as S from './style';

interface ISearchResultsProps {
  searchResultList: FriendsListType['friendsList'];
}

/** 검색 결과 */
const SearchResults = ({ searchResultList }: ISearchResultsProps) => {
  const isSearch = searchResultList.length !== 0;

  return (
    <>
      {!isSearch && (
        <S.NoSearchResultParagraph>
          해당하는 가게가 존재하지 않습니다.
        </S.NoSearchResultParagraph>
      )}
      {isSearch && <ResultsList searchResultList={searchResultList} />}
    </>
  );
};

export default SearchResults;
