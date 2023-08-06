import Card from 'components/common/Card';
import Image from 'next/image';
import searchIcon from 'public/assets/icons/common/searchIcBlack.svg';
import ConnectionProfile from './ConnectionProfile';
import useScroll from 'hooks/useScroll';
import * as S from './style';
import { useState } from 'react';

const DUMMY_DATA = [
  {
    id: 0,
    name: '이혜리',
    location: '이디야',
    digit: '010-1122-3334',
  },
  {
    id: 1,
    name: '김해리',
    location: '스타벅스',
    digit: '010-1122-1111',
  },
  {
    id: 2,
    name: '언노운',
    location: '메가커피',
    digit: '010-3322-2477',
  },
  {
    id: 3,
    name: '새우',
    location: '이디야',
    digit: '010-2435-5665',
  },
  {
    id: 4,
    name: '길지운',
    location: '컴포즈커피',
    digit: '010-3475-3454',
  },
  {
    id: 5,
    name: '김지원',
    location: '컴포즈커피',
    digit: '010-2475-3524',
  },
  {
    id: 6,
    name: '구나연',
    location: '맥도날드',
    digit: '010-6655-9098',
  },
  {
    id: 7,
    name: '윤선경',
    location: '이디야',
    digit: '010-1245-2738',
  },
  {
    id: 8,
    name: '양채린',
    location: '파이브가이즈',
    digit: '010-1094-2398',
  },
  {
    id: 9,
    name: '빵빵이',
    location: '맥도날드',
    digit: '010-1409-4235',
  },
];

/** connect - 연결 페이지 */
const Connection = () => {
  const { hideScroll, scrollHandler } = useScroll();
  const [enteredValue, setEnteredValue] = useState('');

  const onWriteHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEnteredValue(e.currentTarget.value);
  };

  return (
    <S.ConnectionBox>
      <Card width="75rem" height="73.8rem" padding="2rem 2rem 5.2rem">
        <S.ConnectionHeaderBox>
          <p>나와 연결되어 있는 슈퍼바이저</p>
          <S.ConnectionInputBox>
            <input type="text" onChange={onWriteHandler} />
            <Image src={searchIcon} alt="search-icon" width={20} height={20} />
          </S.ConnectionInputBox>
        </S.ConnectionHeaderBox>
        <S.ConnectionBodyBox hideScroll={hideScroll} onScroll={scrollHandler}>
          {DUMMY_DATA.filter(({ name }) => name.includes(enteredValue)).map(
            ({ id, name, location, digit }) => (
              <ConnectionProfile
                key={id}
                name={name}
                location={location}
                digit={digit}
              />
            ),
          )}
        </S.ConnectionBodyBox>
      </Card>
    </S.ConnectionBox>
  );
};

export default Connection;
