import Friends from 'components/community/Friends';
import FriendsListContext, {
  IFriendsListContextProps,
} from 'contexts/community/friends/FriendsListProvider.ts';
import { API } from 'pages/api/api';

/** community - 친구 페이지 */
const FriendsPage = ({ friendsList }: IFriendsListContextProps) => {
  console.log('aa', friendsList);
  const contextValue = { friendsList };

  return (
    <FriendsListContext.Provider value={contextValue}>
      <Friends />
    </FriendsListContext.Provider>
  );
};

export async function getStaticProps() {
  let friendsList: IFriendsListContextProps['friendsList'] = [];
  let offset = 0;
  const FRIENDS_COUNT = 8; // 백에서 8명 씩 끊어서 전송

  while (true) {
    // TODO: Promise.allSettled 적용 해보기
    try {
      const res = await API.get(`/api/friends?last=${offset}`);
      const friendsData = res.data.friends;

      friendsList = [...friendsList, ...friendsData];
      offset += FRIENDS_COUNT;

      if (friendsData.length < 8) break; // 더 이상 받아올 친구 목록 없으면 break;
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

export default FriendsPage;
