import Card from 'components/common/Card';
import Image from 'next/image';
import toggleButtonIcon from 'public/assets/icons/community/toggleButtonIcon.svg';
import searchIcon from 'public/assets/icons/community/searchIcon.svg';
import * as S from './style';

/** 친구 찾기 */
const SearchFriend = () => {
  return (
    <Card width="65.9rem">
      <S.SearchFriendText>친구 찾기</S.SearchFriendText>
      <S.SearchFriendBox>
        <S.SearchByBox>
          <S.SelectedValueBox>
            <p>이름</p>
            <button>
              <Image src={toggleButtonIcon} alt="my_page_icon" width={12} height={10} />
            </button>
          </S.SelectedValueBox>
          <S.OptionList>
            <li>이름</li>
            <li>상호명</li>
            <li>지역명</li>
          </S.OptionList>
        </S.SearchByBox>
        <S.InputBox type="text" placeholder="입력해 줘" />
        <button>
          <Image src={searchIcon} alt="my_page_icon" width={17} height={17} />
        </button>
      </S.SearchFriendBox>
    </Card>
  );
};

export default SearchFriend;