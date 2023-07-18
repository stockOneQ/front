import styled from 'styled-components';

/** ********* */
/** index.tsx */
/** ********* */

const ReqFriendsBox = styled.div`
  padding: 3.2rem 2rem 4rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  position: relative;
`

/** ****************** */
/** WaitingFriends.tsx */
/** WantingFriends.tsx */
/** ****************** */

const HeadParagraph = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2rem;
`

interface IEachFriendsBoxProps {
  hideScroll: boolean;
}

const EachFriendsBox = styled.div<IEachFriendsBoxProps>`
  height: 23rem;
  overflow-y: auto;
  padding-right: ${props => props.hideScroll ? '7.1rem' : '5.6rem'};
  
  &::-webkit-scrollbar {
    display: ${props => props.hideScroll ? 'none' : 'inline-block'};
    width: 1.5rem;
    height: 19.3rem;
    border-radius: .8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: .3rem solid transparent;
    height: 4rem;
    border-radius: .8rem;
    background-color: var(--color-black);
  }

  &::-webkit-scrollbar-track {
    width: 1.5rem;
    height: 19.3rem;
    border-radius: .8rem;
    background-color: #eee;
  }

  .each-friend:not(:last-child) {
    margin-bottom: 1.9rem;
  }
`

const EachFriendBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CloseBtn = styled.button`
  font-size: 2.5rem;
  width: 1.5rem;
  position: absolute;
  top: 3rem;
  right: 2rem;
`

/** ****************** */
/** WaitingFriends.tsx */
/** ****************** */

const EachWaitingFriendsBox = styled(EachFriendsBox)`
  height: 24rem;
`

/** ****************** */
/** WantingFriends.tsx */
/** ****************** */

const EachWantingFriendsBox = styled(EachFriendsBox)`
  height: 32.5rem;
`


export {
  ReqFriendsBox,
  HeadParagraph,
  EachFriendBox,
  CloseBtn,
  EachWaitingFriendsBox,
  EachWantingFriendsBox
}