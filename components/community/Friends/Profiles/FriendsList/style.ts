import styled from 'styled-components';

const FriendList = styled.ul`
  height: 41vh;
  overflow-y: auto;

  &::-webkit-scrollbar{
    display: none;
  }

  .friend_profile:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`

const FriendCountBox = styled.div`
  padding: 1.6rem 3rem 1.6rem 2rem;
  margin-bottom: .7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.3rem;
    font-weight: 600;
    line-height: normal;
  }
`

const FriendProfileBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 3rem 0 2rem;
  
  img {
    border-radius: 50%;
    margin-right: 1.9rem;
  }
`

const FriendInfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: .9rem;
  
  p:first-child {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: normal;
  }
  
  p:first-child::after {
    content: "|";
    padding: 0 .5rem 0 .7rem;
  }

  p:last-child {
    font-size: 13px;
    font-weight: 500;
    line-height: normal;
  }
`

const FriendPhoneText = styled.p`
  color: #DADADA;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: normal;
`

const FriendPageButton = styled.button`
  margin-left: auto;

  img {
    margin-right: 0;
    border-radius: 0;
  }
`

export { 
  FriendList,
  FriendCountBox,
  FriendProfileBox,
  FriendInfoBox,
  FriendPhoneText,
  FriendPageButton
};