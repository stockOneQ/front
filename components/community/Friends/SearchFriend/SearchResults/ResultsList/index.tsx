import FriendItem from './FriendItem';
import * as S from './style';
import { DUMMY_DATA } from 'components/community/Friends/Profiles/FriendsList';

/** 검색 결과 목록 */
const ResultsList = () => {
  return (
    <S.ResultListBox>
      <S.ResultListTextBox>
        <p>검색 결과</p>
        <div>4</div>
      </S.ResultListTextBox>
      <S.FriendItemsBox>
        {DUMMY_DATA.map(({ id, name, location, phone }) => (
          <FriendItem key={id} name={name} location={location} phone={phone} />
        ))}
      </S.FriendItemsBox>
    </S.ResultListBox>
  );
};

export default ResultsList;