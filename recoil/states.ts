import { atom, selector, useSetRecoilState } from 'recoil';
import { useCallback } from 'react';

/** ----------------메인 페이지------------- */

// export interface ProductItem {
//   id: number;
//   category: string;
//   productName: string;
//   price:  number;
//   seller: string;
//   receiptYear: string;
//   receiptMonth: string;
//   receiptDay: string;
//   expirationYear: string;
//   expirationMonth: string;
//   expirationDay: string;
//   ingredientLocation: string;
//   requiredQuantity: string;
//   quantity: string;
//   orderingSite: string;
//   orderingFrequency: string;
//   imageInfo: string;
//   storageMethod: string;
// };

export interface ProductItem {
  id: number;
  name: string;
  image: string | null;
}

export const mainPostListState = atom<ProductItem[]>({
  key: 'mainPostListState',
  default: [],
});

export const handleProductClick = () => {
  const setSelectedProductState = useSetRecoilState(selectedProductState);
  return useCallback(
    (item: GradientsListItem) => {
      setSelectedProductState(item);
    },
    [setSelectedProductState],
  );
};
//유통기한 임박재료
export const approachingExpirationState = atom<string[]>({
  key: 'approachingExpirationState',
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

//보관 방식
export const storageMethodState = atom<string[]>({
  key: 'storageMethodState',
  default: [],
});

export const postMainTitleState = atom<string>({
  key: 'postMainTitleState',
  default: '',
});

export const newpostListState = atom({
  key: 'newpostListState',
  default: [],
});

export const searchFilterState = atom({
  key: 'searchFilterState',
  default: '',
});

export const searchResultsState = selector({
  key: 'searchResultsState',
  get: ({ get }) => {
    const searchTerm = get(searchFilterState);
    const newpostList = get(newpostListState);

    if (searchTerm.trim() !== '') {
      return newpostList.filter(item =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    } else {
      return newpostList;
    }
  },
});

export const filteredItemsState = selector({
  key: 'filteredItemsState',
  get: ({ get }) => {
    const searchTerm = get(searchFilterState);
    const searchResults = get(searchResultsState);

    if (searchTerm.trim() !== '') {
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
  key: 'ingredientsListState',
  default: [],
});

export const filteredIngredientsListState = selector<IngredientsListItem[]>({
  key: 'filteredIngredientsListState',
  get: ({ get }) => {
    const selectedCategory = get(selectedCategoryState);
    const searchTerm = get(searchTermState);
    const postList = get(ingredientsListState);

    return postList.filter(
      item =>
        (selectedCategory === '전체' || item.category === selectedCategory) &&
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  },
});

/** 제품상세페이지 이동 */
export const selectedProductState = atom<IngredientsListItem | null>({
  key: 'selectedProductState',
  default: null,
});
/** 제품 카테고리 */
export const selectedCategoryState = atom<string>({
  key: 'selectedCategoryState',
  default: '전체',
});
/** 제품 검색 */
export const searchTermState = atom<string>({
  key: 'searchTermState',
  default: '',
});

/** ----------------- 게시판 페이지 ----------------- */

export const postTitleState = atom<string>({
  key: 'postTitleState',
  default: '',
});

export const postContentState = atom<string>({
  key: 'postContentState',
  default: '',
});

export interface IPostTypes {
  postId: number;
  writerId: number;
  writer: string;
  uploadTime: string;
  title: string;
  content: string;
  views: number;
  commentCount: number;
  likes: number;
}

/** 게시글 목록 */
export const postListState = atom<IPostTypes[]>({
  key: 'postListState',
  default: [
    {
      postId: 1,
      writerId: 82831,
      writer: '임하림',
      uploadTime: '20230706012532581',
      title: '배달대행료 카드결제 신용카드 추천 좀 해주세요',
      content:
        '포인트 적립되는 카드 있나요? 있으면 정보 공유 해주시면 감사하겠습니다',
      views: 24,
      commentCount: 2,
      likes: 1,
    },
    {
      postId: 2,
      writerId: 123,
      writer: '전언석',
      uploadTime: '20230706012519547',
      title: '로스팅과 매장을 같이 운영하는 사업자에서 분리할 때',
      content:
        '안녕하세요. 로스팅 공간은 제조업 허가를 받았고 한 곳은 휴게 음식점인데요. 로스팅 공간이 부족하여 다른 상가를 임대하여 분리하려고 합니다.',
      views: 45,
      commentCount: 20,
      likes: 36,
    },
    {
      postId: 3,
      writerId: 456,
      writer: '이가영',
      uploadTime: '20230706230339500',
      title: '혹시 게장 무한리필 장사하시는 분 계시나요?',
      content: '마진 괜찮나요? 장사하시는 분 알려주세요 ~~',
      views: 60,
      commentCount: 13,
      likes: 12,
    },
    {
      postId: 4,
      writerId: 82831,
      writer: '임하림',
      uploadTime: '20230706230339511',
      title: '혹시 게장 무한리필 장사하시는 분 계시나요?',
      content: '마진 괜찮나요? 장사하시는 분 알려주세요 ~~',
      views: 60,
      commentCount: 13,
      likes: 12,
    },
  ],
});

/** 게시글 정렬 */
export const sortTypeState = atom<string>({
  key: 'sortTypeState',
  default: '최신순',
});

export const sortedPostsState = selector({
  key: 'sortedPostsState',
  get: ({ get }) => {
    const sortType = get(sortTypeState);
    const posts = get(postListState);

    switch (sortType) {
      case '최신순':
        return [...posts].sort((a, b) => {
          return Number(b.uploadTime) - Number(a.uploadTime);
        });

      /** 조회순 */
      default:
        return [...posts].sort((a, b) => {
          return Number(b.views) - Number(a.views);
        });
    }
  },
});

/* 게시글 검색 */
export const searchTypeState = atom<string>({
  key: 'searchTypeState',
  default: '글 제목',
});

export const searchInputState = atom<string>({
  key: 'searchInputState',
  default: '',
});

export const searchedPostsState = selector({
  key: 'searchedPostsState',
  get: ({ get }) => {
    const searchType = get(searchTypeState);
    const searchInput = get(searchInputState);
    const posts = get(postListState);

    switch (searchType) {
      case '글 제목':
        return posts.filter(post => post.title.includes(searchInput));
      case '글 내용':
        return posts.filter(post => post.content.includes(searchInput));
      case '작성자':
        return posts.filter(
          post =>
            post.writer.includes(searchInput) || post.writer === searchInput,
        );
    }
  },
});

/** 정렬 & 검색 필터링 공통 뽑아내기 */
export const filteredPostListState = selector({
  key: 'filteredPostListState',
  get: ({ get }) => {
    const sortedPosts = get(sortedPostsState);
    const searchedPosts = get(searchedPostsState);

    return (
      searchedPosts && sortedPosts.filter(post => searchedPosts.includes(post))
    );
  },
});

/** 게시글 상세 댓글 */

export interface IPostCommentTypes {
  id: number;
  writer: string;
  uploadTime: string;
  content: string;
}

export const postCommentInputState = atom<string>({
  key: 'postCommentInputState',
  default: '',
});

export const postCommentListState = atom<IPostCommentTypes[]>({
  key: 'postCommentListState',
  default: [
    {
      id: 1,
      writer: '전언석',
      uploadTime: '2023년 07월 21일 01:25',
      content: '알아봐드리겠습니다',
    },
    {
      id: 2,
      writer: '김아리',
      uploadTime: '2023년 07월 22일 12:23',
      content: '안녕하세요. 저 하고 있습니다. 마진 괜찮습니다.',
    },
  ],
});

/** 내가 쓴 글 페이지 */

export const deleteCheckedItemsState = atom<number[]>({
  key: 'deleteCheckedItemsState',
  default: [],
});

export const isDeleteModeState = atom<boolean>({
  key: 'isDeleteModeState',
  default: false,
});
