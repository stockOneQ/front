export type FriendsListType = {
  friendsList: {
    id: number;
    name: string;
    storeName: string;
    phoneNumber: string;
    relationStatus: string;
    lastModifiedDate: string;
  }[];
};

export type FriendStockListType = {
  id: number;
  name: string;
  stockQuant: number;
  image: Uint8Array;
};

export type FriendStockCountListType = {
  name: string;
  total: number;
};
