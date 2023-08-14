// http://localhost:3000/community/friends/search

import { FriendsListType } from '@Types/community/friends/friendsList';
import Friends from 'components/community/Friends';
import SearchFriend from 'components/community/Friends/FriendsRightContents/SearchFriend';
import FriendsListContext from 'contexts/community/friends/FriendsListProvider.ts';
import { API } from 'pages/api/api';

/** community - 친구 검색 페이지 */
const SearchFriendsPage = ({ friendsList }: FriendsListType) => {
  const contextValue = { friendsList };

  return (
    <FriendsListContext.Provider value={contextValue}>
      <Friends>
        <SearchFriend />
      </Friends>
    </FriendsListContext.Provider>
  );
};

// FIXME: 한 번만 api 호출하도록 수정
export async function getStaticProps() {
  let friendsList: FriendsListType['friendsList'] = [];
  let friends_offset = -1;

  while (true) {
    // TODO: Promise.allSettled 적용 해보기
    try {
      const friendsListRes = await API.get(
        `/api/friends?last=${friends_offset}`,
      );
      const friendsData = friendsListRes.data.friends;
      const friendsDataLen = friendsData.length;

      friendsList = [...friendsList, ...friendsData];
      friends_offset = friendsData[friendsDataLen - 1]?.id || -1; // 마지막으로 데이터 넘어온 친구의 id

      if (friendsDataLen < 8) break; // 더 이상 받아올 친구 목록 없으면 break;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  return {
    props: {
      friendsList,
    },
    revalidate: 10,
  };
}

export default SearchFriendsPage;
