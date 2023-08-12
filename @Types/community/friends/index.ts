export interface IFriendsListProps {
  friendsList: {
    id: number;
    name: string;
    storeName: string;
    phoneNumber: string;
    friendStatus: string;
    lastModifiedDate: string;
  }[];
}
