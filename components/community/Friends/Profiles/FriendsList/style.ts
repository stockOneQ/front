import styled from 'styled-components';

/**************/
/** index.tsx */
/**************/

const FriendList = styled.ul`
  height: 41vh;
  min-height: 50rem;
  overflow-y: auto;

  .friend-profile:not(:last-child) {
    margin-bottom: 2.5rem;
  }

  &::-webkit-scrollbar{
    display: none;
  }
`

/*********************/
/** FriendsCount.tsx */
/*********************/

interface IFriendsCountBoxProps {
  onSetting: boolean;
}

const FriendsCountBox = styled.div<IFriendsCountBoxProps>`
  padding: ${props => props.onSetting ? '.6rem 2rem .6rem' : '1.9rem 2rem'};
  margin-bottom: .6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.3rem;
    font-weight: 600;
    line-height: normal;
  }

  img {
    margin-right: 1rem;
  }
`

export { 
  FriendList,
  FriendsCountBox
};