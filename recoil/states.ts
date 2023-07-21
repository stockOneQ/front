import { atom, selector } from "recoil";

export const postTitleState = atom<string>({
  key: "postTitleState",
  default: "",
});

export const postContentState = atom<string>({
  key: "postContentState",
  default: "",
});

export interface IPostTypes {
  id: number;
  uploadTime: string;
  title: string;
  content: string;
  views: number;
  commentCount: number;
  likes: number;
}

// 재료 test atom
export const gradientsListState = atom({
  key: "gradientsListState",
  default: [
    {
      id: 1,
      productName: "유통기한 임박 재료 1",
      category: "beforeDate",
    },
    {
      id: 2,
      productName: "유통기한 임박 재료 2",
      category: "beforeDate",
    },
    {
      id: 3,
      productName: "부족한 재료 1",
      category: "no",
    },
    {
      id: 4,
      productName: "유통기한 지난 재료 1",
      category: "afterDate",
    },
  ],
});

export const postListState = atom<IPostTypes[]>({
  key: "postsState",
  default: [
    {
      id: 1,
      uploadTime: "20230700230339500",
      title: "배달대행료 카드결제 신용카드 추천 좀 해주세요",
      content:
        "포인트 적립되는 카드 있나요? 있으면 정보 공유 해주시면 감사하겠습니다",
      views: 24,
      commentCount: 2,
      likes: 1,
    },
    {
      id: 2,
      uploadTime: "20230706012519547",
      title: "로스팅과 매장을 같이 운영하는 사업자에서 분리할 때",
      content:
        "안녕하세요. 로스팅 공간은 제조업 허가를 받았고 한 곳은 휴게 음식점인데요. 로스팅 공간이 부족하여 다른 상가를 임대하여 분리하려고 합니다.",
      views: 45,
      commentCount: 20,
      likes: 36,
    },
    {
      id: 3,
      uploadTime: "20230706012532581",
      title: "혹시 게장 무한리필 장사하시는 분 계시나요?",
      content: "마진 괜찮나요? 장사하시는 분 알려주세요 ~~",
      views: 60,
      commentCount: 13,
      likes: 12,
    },
  ],
});

export const sortTypeState = atom({
  key: "sortTypeState",
  default: "최신순",
});

export const sortedPostsState = selector({
  key: "sortedPostsState",
  get: ({ get }) => {
    const sortType = get(sortTypeState);
    const posts = get(postListState);

    switch (sortType) {
      case "최신순":
        return posts.sort((a, b) => {
          return Number(a.uploadTime) - Number(b.uploadTime);
        });
      /* 조회순*/
      default:
        return;
    }
  },
});

export const searchTypeState = atom({
  key: "searchTypeState",
  default: "글 제목",
});
