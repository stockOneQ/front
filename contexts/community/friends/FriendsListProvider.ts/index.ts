import { FriendsListType } from '@Types/community/friends/friendsList';
import { createContext } from 'react';

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
