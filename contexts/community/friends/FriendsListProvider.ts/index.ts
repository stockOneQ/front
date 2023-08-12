import { createContext } from 'react';

type FriendsListType = {
  friendsList: {
    id: number;
    name: string;
    storeName: string;
    phoneNumber: string;
    friendStatus: string;
    lastModifiedDate: string;
  }[];
};

export interface IFriendsListContextProps {
  friendsList: FriendsListType['friendsList'];
}

const FriendsListContext = createContext<IFriendsListContextProps>({
  friendsList: [
    {
      id: 0,
      name: '',
      storeName: '',
      phoneNumber: '',
      friendStatus: '',
      lastModifiedDate: '',
    },
  ],
});

export default FriendsListContext;
