import Card from 'components/common/Card';
import Image from 'next/image';
import searchIcon from 'public/assets/icons/community/searchIcon.svg';
import * as S from './style';
import { Dispatch, SetStateAction, useState } from 'react';
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
  const [searchBy, setSearchBy] = useState('이름'); // 카테고리 선택
  const [isSearch, setIsSearch] = useState(false); // 검색 중인지

  const onWriteHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setIsSearch(e.currentTarget.value !== (undefined || null || ''));
  };

  return (
    <Card width='65.9rem' height='73.8rem'>
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
            <S.InputBox
              onChange={onWriteHandler}
              type='text'
              placeholder={`${
                searchBy === '지역명' ? '읍, 면, 동으로 입력해주세요' : ''
              }`}
            />
            <button>
              <Image
                src={searchIcon}
                alt='my_page_icon'
                width={17}
                height={17}
              />
            </button>
          </S.SearchFriendBox>
          <SearchResults isSearch={isSearch} />
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
