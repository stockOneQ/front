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
  const contextValue = { friendsList, waitingFriendsList, reqFriendsList };

  return (
    <FriendsListContext.Provider value={contextValue}>
      <Friends>
        <ReqFriends />
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
      const friendsDataLen = friendsList.length;

      friendsList = [...friendsList, ...friendsData];
      friends_offset = friendsList[friendsDataLen - 1]?.id || -1; // 마지막으로 데이터 넘어온 친구의 id

      if (friendsDataLen < 8) break; // 더 이상 받아올 친구 목록 없으면 break;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  while (true) {
    // TODO: Promise.allSettled 적용 해보기
    try {
      const waitingFriendsRes = await API.get(
        `/api/friends/waiting?last=${waiting_offset}`,
      );
      const waitingFriendsData = waitingFriendsRes.data.friends;
      const waitingFriendsDataLen = waitingFriendsData.length;

      waitingFriendsList = [...waitingFriendsList, ...waitingFriendsData];
      waiting_offset = waitingFriendsData[waitingFriendsDataLen - 1]?.id || -1; // 마지막으로 데이터 넘어온 친구의 id

      if (waitingFriendsDataLen < 3) break; // 더 이상 받아올 친구 목록 없으면 break;
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
      const reqFriendsListLen = reqFriendsData.length;

      reqFriendsList = [...reqFriendsList, ...reqFriendsData];
      wanting_offset = reqFriendsList[reqFriendsListLen - 1]?.id || -1; // 마지막으로 데이터 넘어온 친구의 id

      if (reqFriendsListLen < 5) break; // 더 이상 받아올 친구 목록 없으면 break;
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
