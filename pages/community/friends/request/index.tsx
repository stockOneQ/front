// http://localhost:3000/community/friends/request

import { FriendsListType } from '@Types/community/friends/friendsList';
import Friends from 'components/community/Friends';
import ReqFriends from 'components/community/Friends/friendsRightContents/ReqFriends';
import FriendsListContext from 'contexts/community/friends/FriendsListProvider.ts';
import { API } from 'pages/api/api';

interface IReqFriendsPageProps {
  friendsList: FriendsListType['friendsList'];
  waitingFriendsList: FriendsListType['friendsList'];
  reqFriendsList: FriendsListType['friendsList'];
}

/** community - 친구 요청 페이지 */
const ReqFriendsPage = ({
  friendsList,
  waitingFriendsList,
  reqFriendsList,
}: IReqFriendsPageProps) => {
  const contextValue = { friendsList };

  return (
    <FriendsListContext.Provider value={contextValue}>
      <Friends>
        <ReqFriends
          waitingFriendsList={waitingFriendsList}
          reqFriendsList={reqFriendsList}
        />
      </Friends>
    </FriendsListContext.Provider>
  );
};

// FIXME: 한 번만 api 호출하도록 수정
export async function getStaticProps() {
  let friendsList: FriendsListType['friendsList'] = [];
  let waitingFriendsList: FriendsListType['friendsList'] = [];
  let reqFriendsList: FriendsListType['friendsList'] = [];
  let offset = 0;
  const FRIENDS_COUNT = 8; // 백에서 8명 씩 끊어서 전송

  while (true) {
    // TODO: Promise.allSettled 적용 해보기
    try {
      const friendsListRes = await API.get(`/api/friends?last=${offset}`);
      const friendsData = friendsListRes.data.friends;

      friendsList = [...friendsList, ...friendsData];
      offset += FRIENDS_COUNT;

      if (friendsData.length < 8) break; // 더 이상 받아올 친구 목록 없으면 break;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  while (true) {
    // TODO: Promise.allSettled 적용 해보기
    try {
      const reqFriendsRes = await API.get(
        `/api/friends/waiting?last=${offset}`,
      );
      const reqFriendsData = reqFriendsRes.data.friends;

      waitingFriendsList = [...waitingFriendsList, ...reqFriendsData];
      offset += FRIENDS_COUNT;

      if (reqFriendsData.length < 8) break; // 더 이상 받아올 친구 목록 없으면 break;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  while (true) {
    // TODO: Promise.allSettled 적용 해보기
    try {
      const reqFriendsRes = await API.get(
        `/api/friends/requested?last=${offset}`,
      );
      const reqFriendsData = reqFriendsRes.data.friends;

      reqFriendsList = [...reqFriendsList, ...reqFriendsData];
      offset += FRIENDS_COUNT;

      if (reqFriendsData.length < 8) break; // 더 이상 받아올 친구 목록 없으면 break;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  return {
    props: {
      friendsList,
      waitingFriendsList,
      reqFriendsList,
    },
    revalidate: 10,
  };
}

export default ReqFriendsPage;
