// http://localhost:3000/community/friends/request

import { FriendsListType } from '@Types/community/friends/friendsList';
import Friends from 'components/community/Friends';
import ReqFriends from 'components/community/Friends/FriendsRightContents/ReqFriends';
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
  let friends_offset = -1;
  let waiting_offset = -1;
  let wanting_offset = -1;

  while (true) {
    // TODO: Promise.allSettled 적용 해보기
    try {
      const friendsListRes = await API.get(
        `/api/friends?last=${friends_offset}`,
      );
      const friendsData = friendsListRes.data.friends;

      friendsList = [...friendsList, ...friendsData];

      const friendsListLen = friendsList.length;

      friends_offset = friendsList[friendsListLen - 1].id; // 마지막으로 데이터 넘어온 친구의 id

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
        `/api/friends/waiting?last=${waiting_offset}`,
      );
      const reqFriendsData = reqFriendsRes.data.friends;

      waitingFriendsList = [...waitingFriendsList, ...reqFriendsData];

      const waitingFriendsListLen = waitingFriendsList.length;

      waiting_offset = waitingFriendsList[waitingFriendsListLen - 1].id; // 마지막으로 데이터 넘어온 친구의 id

      if (reqFriendsData.length < 3) break; // 더 이상 받아올 친구 목록 없으면 break;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  while (true) {
    // TODO: Promise.allSettled 적용 해보기
    try {
      const reqFriendsRes = await API.get(
        `/api/friends/requested?last=${wanting_offset}`,
      );
      const reqFriendsData = reqFriendsRes.data.friends;

      reqFriendsList = [...reqFriendsList, ...reqFriendsData];

      const reqFriendsListLen = reqFriendsList.length;

      friends_offset = reqFriendsList[reqFriendsListLen - 1].id; // 마지막으로 데이터 넘어온 친구의 id

      if (reqFriendsData.length < 5) break; // 더 이상 받아올 친구 목록 없으면 break;
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
