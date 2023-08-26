// http://localhost:3000/community/friends/stock

import Friends from 'components/community/Friends';
import FriendStock from 'components/community/Friends/FriendsRightContents/FriendStock';

/** community - 친구 재고 페이지 */
const FriendStockPage = () => {
  return (
    <Friends>
      <FriendStock />
    </Friends>
  );
};

// export const getStaticPaths = async () => {
//   return {
//     fallback: true,
//     paths: [
//       {
//         params: {
//           friendID: '1',
//         },
//       },
//       {
//         params: {
//           friendID: '2',
//         },
//       },
//       {
//         params: {
//           friendID: '3',
//         },
//       },
//       {
//         params: {
//           friendID: '4',
//         },
//       },
//       {
//         params: {
//           friendID: '5',
//         },
//       },
//       {
//         params: {
//           friendID: '6',
//         },
//       },
//       {
//         params: {
//           friendID: '7',
//         },
//       },
//       {
//         params: {
//           friendID: '8',
//         },
//       },
//       {
//         params: {
//           friendID: '9',
//         },
//       },
//       {
//         params: {
//           friendID: '10',
//         },
//       },
//       {
//         params: {
//           friendID: '11',
//         },
//       },
//     ],
//   };
// };

// interface IParams extends ParsedUrlQuery {
//   friendID: string;
// }

// // FIXME: 한 번만 api 호출하도록 수정
// export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
//   let friendsList: FriendsListType['friendsList'] = [];
//   let friendStockList: FriendStockListType[] = [];
//   let friendStockCountList: FriendStockCountListType[] = [];
//   let friends_offset = -1;
//   let friendStock_offset = -1;
//   const { friendID } = params as IParams;

//   // 친구 목록
//   while (true) {
//     // TODO: Promise.allSettled 적용 해보기
//     try {
//       const friendsListRes = await API.get(
//         `/api/friends?last=${friends_offset}`,
//       );
//       const friendsData = friendsListRes.data.friends;
//       const friendsDataLen = friendsData.length;

//       friendsList = [...friendsList, ...friendsData];
//       friends_offset = friendsData[friendsDataLen - 1]?.id || -1; // 마지막으로 데이터 넘어온 친구의 id

//       if (friendsDataLen < 8) break; // 더 이상 받아올 친구 목록 없으면 break;
//     } catch (err) {
//       console.error(err);
//       throw err;
//     }
//   }

//   // FIXME: 처음 렌더링 될 때, 한 번 더 api 불러오는 에러? 수정
//   // 친구 재고 목록
//   while (true) {
//     try {
//       const friendStockRes = await API.get(
//         `/api/friend/product/page?friend=${friendID}&condition=냉동&search=전체&last=${friendStock_offset}`,
//       );
//       const friendStockData = friendStockRes.data.result;
//       console.log('friendStockData', friendStockData);

//       const friendStockDataLen = friendStockData.length;

//       friendStockList = [...friendStockList, ...friendStockData];
//       friendStock_offset = friendStockData[friendStockDataLen - 1]?.id || -1;

//       if (friendStockDataLen < 9) break;
//     } catch (err) {
//       console.error(err);
//       throw err;
//     }
//   }

//   // 친구 재고 수량
//   try {
//     const friendStockCount = await API.get(
//       `/api/friend/product/count?friend=${friendID}&condition=냉동`,
//     );
//     friendStockCountList = friendStockCount.data.result;
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }

//   return {
//     props: {
//       friendsList,
//       friendStockList,
//       friendStockCountList,
//     },
//     revalidate: 10,
//   };
// };

export default FriendStockPage;
