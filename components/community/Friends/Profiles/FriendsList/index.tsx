import FriendProfile from './FriendProfile';
import FriendsCount from './FriendsCount';
import * as S from './style';
import { useEffect, useState } from 'react';
import { API } from 'pages/api/api';

export const DUMMY_DATA = [
  {
    id: 0,
    name: '김띵띵',
    location: '고양시 덕양점',
    phone: '010-1111-2222'
  },
  {
    id: 1,
    name: '이빵빵',
    location: '수원시 흥덕점',
    phone: '010-2343-2324'
  },
  {
    id: 2,
    name: '신땡떙',
    location: '경주시 성건점',
    phone: '010-2474-3954'
  },
  {
    id: 3,
    name: '유구구',
    location: '서울시 서초점',
    phone: '010-1367-2478'
  },
  {
    id: 4,
    name: '최뱌뱌',
    location: '인천시 옹진군점',
    phone: '010-6456-0987'
  },
  {
    id: 5,
    name: '박미미',
    location: '부산시 대포점',
    phone: '010-2345-6856'
  },
  {
    id: 6,
    name: '전태태',
    location: '서울시 노원점',
    phone: '010-2454-4686'
  },
  {
    id: 7,
    name: '라수수',
    location: '고양시 일산동구점',
    phone: '010-3475-4678'
  },
  {
    id: 8,
    name: '제뿡뿡',
    location: '수원시 영통점',
    phone: '010-3533-9355'
  },
  {
    id: 9,
    name: '고무무',
    location: '서울시 익선동점',
    phone: '010-3589-3475'
  },
]

const getData = async () => {
  try {
    const friendsList = await API.get('/api/friends?last=5');
    console.log('success', friendsList.data);
  } catch (err) {
    console.log('err', err);
  }
}

/** 친구 목록 */
const FriendsList = () => {
  /** 삭제, 취소 버튼 등장 */
  const [onSetting, setOnSetting] = useState(false);
  /** 삭제 버튼 허용 */
  const [isPermitted, setIsPermitted] = useState(10); // 일단 9(친구 수)로 하드 코딩
  const [isStock, setIsStock] = useState(false);
  
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <FriendsCount onSetting={onSetting} isPermitted={isPermitted} setOnSetting={setOnSetting} />
      <S.FriendList>
        {DUMMY_DATA.map(({ id, name, location, phone }) => (
            <FriendProfile key={id} name={name} location={location} phone={phone} 
              onSetting={onSetting} isStock={isStock} setIsStock={setIsStock} setIsPermitted={setIsPermitted} />
        ))}
      </S.FriendList>
    </>
  );
};

export default FriendsList;