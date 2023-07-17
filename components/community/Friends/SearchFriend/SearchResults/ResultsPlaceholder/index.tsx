import styled from 'styled-components';

const ResultsPlaceholderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  color: #979797;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: normal;
`

/** 검색 결과 placeholder */
const ResultsPlaceholder = () => {
  return (
    <ResultsPlaceholderBox>
      <p>찾고자 하는 단체 채팅방의 이름을 입력해주세요.</p>
      <p>(지역, 프랜차이즈명 검색 가능)</p>
    </ResultsPlaceholderBox>
  );
};

export default ResultsPlaceholder;