import FriendItem from './FriendItem';
import * as S from './style';

/** 검색 결과 목록 */
const ResultsList = () => {
  return (
    <S.ResultListBox>
      <S.ResultListTextBox>
        <p>검색 결과</p>
        <div>4</div>
      </S.ResultListTextBox>
      <S.FriendItemsBox>
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
      </S.FriendItemsBox>
    </S.ResultListBox>
  );
};

export default ResultsList;