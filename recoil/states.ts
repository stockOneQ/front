import { atom, selector, useSetRecoilState } from "recoil";
import { useCallback } from "react";

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


export const newpostListState = atom({
  key: "newpostListState",
  default: [],
});

export const searchFilterState = atom({
  key: "searchFilterState",
  default: "",
});

export const searchResultsState = selector({
  key: "searchResultsState",
  get: ({ get }) => {
    const searchTerm = get(searchFilterState);
    const newpostList = get(newpostListState);

    if (searchTerm.trim() !== "") {
      return newpostList.filter((item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return newpostList;
    }
  },
});

export const filteredItemsState = selector({
  key: "filteredItemsState",
  get: ({ get }) => {
    const searchTerm = get(searchFilterState);
    const searchResults = get(searchResultsState);

    if (searchTerm.trim() !== "") {
      return searchResults;
    } else {
      return searchResults;
    }
  },
});


export type IngredientsListItem = {
  id: number;
  category: string;
  productName: string;
};

export const ingredientsListState = atom<IngredientsListItem[]>({
  key: "ingredientsListState",
  default: [],
});

export const filteredIngredientsListState = selector<IngredientsListItem[]>({
  key: "filteredIngredientsListState",
  get: ({ get }) => {
    const selectedCategory = get(selectedCategoryState);
    const searchTerm = get(searchTermState);
    const postList = get(ingredientsListState);

    return postList.filter((item) =>
      (selectedCategory === "전체" || item.category === selectedCategory) &&
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
});

export const selectedProductState = atom<IngredientsListItem | null>({
  key: "selectedProductState",
  default: null,
});

export const selectedCategoryState = atom<string>({
  key: "selectedCategoryState",
  default: "전체",
});

export const searchTermState = atom<string>({
  key: "searchTermState",
  default: "",
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
  ],
});

export interface ProductItem {
  id: number;
  productName: string;
  price: string;
  seller: string;
  receiptYear: string;
  receiptMonth: string;
  receiptDay: string;
  expirationYear: string;
  expirationMonth: string;
  expirationDay: string;
  ingredientLocation: string;
  requiredQuantity: string;
  quantity: string;
  orderingSite: string;
  orderingFrequency: string;
  imageInfo: string;
};

export const mainPostListState = atom<ProductItem[]>({
  key: "mainPostListState",
  default: [
    {
      id: 1,
      productName: "가나원두",
      price: "12000원",
      seller: "투썸플레이스",
      receiptYear: "2023",
      receiptMonth: "09",
      receiptDay: "20",
      expirationYear: "2023",
      expirationMonth: "10",
      expirationDay: "23",
      ingredientLocation: "선반위",
      requiredQuantity: "3",
      quantity: "2",
      orderingSite: "투썸사이트",
      orderingFrequency: "2",
      imageInfo: "이미지"
    },
  ],
});
export const handleProductClick = () => {
  const setSelectedProductState = useSetRecoilState(selectedProductState);
  return useCallback((item: GradientsListItem) => {
    setSelectedProductState(item);
  }, [setSelectedProductState]);
};
//유통기한 임박재료
export const approachingExpirationState = atom<string[]>({
  key: "approachingExpirationState",
  default: [],
});

//유통기한 지난 재료
export const expiredIngredientsState = atom<number[]>({
  key: 'expiredIngredientsState',
  default: [],
});

//부족한 재료 
export const insufficientIngredientsState = atom<number[]>({
  key: 'insufficientIngredientsState',
  default: [],
});

export const postMainTitleState = atom<string>({
  key: "postMainTitleState",
  default: "",
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