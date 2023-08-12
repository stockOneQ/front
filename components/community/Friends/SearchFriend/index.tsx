import Card from 'components/common/Card';
import Image from 'next/image';
import searchIcon from 'public/assets/icons/common/searchIcon.svg';
import * as S from './style';
import {
  Dispatch,
  KeyboardEvent,
  MouseEvent,
  SetStateAction,
  useRef,
  useState,
} from 'react';
import SearchResults from './SearchResults';
import ReqFriends from './ReqFriends';
import DropDown from 'components/common/DropDown';

const DROP_DOWN_LIST = ['이름', '상호명', '지역명'];

interface ISearchFriendProps {
  reqFriends: boolean;
  setReqFriends: Dispatch<SetStateAction<boolean>>;
}

/** 친구 찾기 */
const SearchFriend = ({ reqFriends, setReqFriends }: ISearchFriendProps) => {
  const enteredValueRef = useRef(null); // 입력된 검색 값

  const [searchBy, setSearchBy] = useState('이름'); // 카테고리 선택
  const [enteredValue, setEnteredValue] = useState(''); // 재렌더링하기 위함

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    // enter 입력 시 검색
    if (e.key === 'Enter') {
      e.preventDefault();

      return setEnteredValue((e.target as HTMLInputElement).value);
    }
  };

  const onSearchHandler = (e: MouseEvent<HTMLButtonElement>) => {
    // 검색 버튼 클릭 시 검색
    e.preventDefault();

    if (enteredValueRef.current) {
      return setEnteredValue(
        (enteredValueRef.current as HTMLInputElement).value,
      );
    }
  };

  return (
    <Card width="65.9rem" height="73.8rem">
      {!reqFriends && (
        <>
          <S.SearchFriendText>친구 찾기</S.SearchFriendText>
          <S.SearchFriendBox>
            <S.DropBoxContainer>
              <DropDown
                width={16.3}
                height={4.6}
                fontSize={1.5}
                toggleSize={12}
                toggleTopSize={46}
                list={DROP_DOWN_LIST}
                onChange={setSearchBy}
              />
            </S.DropBoxContainer>
            <S.SearchFriendsInput
              ref={enteredValueRef}
              type="text"
              placeholder={`${
                searchBy === '지역명' ? '읍, 면, 동으로 입력해주세요' : ''
              }`}
              onKeyDown={onKeyDownHandler}
            />
            <button onClick={onSearchHandler}>
              <Image
                src={searchIcon}
                alt="my_page_icon"
                width={17}
                height={17}
              />
            </button>
          </S.SearchFriendBox>
          <SearchResults enteredValue={enteredValue} searchBy={searchBy} />
        </>
      )}
      {reqFriends && <ReqFriends setReqFriends={setReqFriends} />}
    </Card>

    // <Card width='65.9rem'>
    //   <FriendStock />
    // </Card>
  );
};

export default SearchFriend;
