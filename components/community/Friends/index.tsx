<<<<<<< HEAD
import Profiles from './Profiles';
import Card from 'components/common/Card';
import * as S from './style';
import { API } from 'pages/api/api';
import { useEffect, useRef, useState } from 'react';
import { FriendsListType } from '@Types/community/friends/friendsList';

interface IFriendsProps {
  children?: React.ReactNode;
}

/** community - 친구 */
const Friends = ({ children }: IFriendsProps) => {
  const [friendsList, setFriendsList] = useState<
    FriendsListType['friendsList']
  >([]);

  useEffect(() => {
    const getData = async () => {
      let friends_offset = -1;

      while (true) {
        // TODO: Promise.allSettled 적용 해보기
        try {
          const friendsListRes = await API.get(
            `/api/friends?last=${friends_offset}`,
          );
          const friendsData = friendsListRes.data.friends;
          const friendsDataLen = friendsData.length;

          setFriendsList(prev => [...new Set([...prev, ...friendsData])]);
          friends_offset = friendsData[friendsDataLen - 1]?.id || -1; // 마지막으로 데이터 넘어온 친구의 id

          if (friendsDataLen < 8) break; // 더 이상 받아올 친구 목록 없으면 break;
        } catch (err) {
          console.error(err);
          throw err;
        }
      }
    };

    getData();
  }, []);

  return (
    <S.CommunitySection>
      <Profiles friendsList={friendsList} />
      <Card width="65.9rem" height="73.8rem">
        {children}
      </Card>
    </S.CommunitySection>
  );
};

export default Friends;
=======
import styled from 'styled-components';
import Profiles from './Profiles';
import SearchFriend from './SearchFriend';
import { useState } from 'react';

const CommunitySection = styled.section`
  display: flex;
  gap: 7.1rem;
`

/** community - 친구 */
const Friends = () => {
  const [reqFriends, setReqFriends] = useState(false);

  return (
    <CommunitySection>
      <Profiles setReqFriends={setReqFriends} />
      <SearchFriend reqFriends={reqFriends} setReqFriends={setReqFriends} />
    </CommunitySection>
  );
};

export default Friends;
>>>>>>> ff4bb25 (Merge branch develop into main)
