import * as S from './style';

/** 검색 결과 placeholder */
const ResultsPlaceholder = () => {
  return (
    <S.ResultsPlaceholderBox>
      <p>찾고자 하는 단체 채팅방의 이름을 입력해주세요.</p>
      <p>(지역, 프랜차이즈명 검색 가능)</p>
    </S.ResultsPlaceholderBox>
  );
};

export default ResultsPlaceholder;