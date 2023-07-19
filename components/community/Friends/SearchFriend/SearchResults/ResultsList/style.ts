
import styled from 'styled-components';

/**************/
/** index.tsx */
/**************/

const ResultListBox = styled.div`
  padding: 0 3.5rem 0 2.5rem;
`
const ResultListTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.3rem;
  line-height: normal;
  margin: 1.2rem 0 2.5rem;

  p {
    color: var(--color-black);
    font-weight: 600;
  }

  div {
    width: 3.4rem;
    height: 2rem;
    border-radius: 1rem;
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background-image: linear-gradient(126deg, #53B6E7 0%, #B4B6E7 100%);
  }
`

const FriendItemsBox = styled.div`
  height: 43vh;
  overflow-y: auto;

  .friend-item:not(:last-child) {
    margin-bottom: 2.7rem;
  }

  &::-webkit-scrollbar{
    display: none;
  }
`

/*******************/
/** FriendItem.tsx */
/*******************/

const FriendItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export {
  ResultListBox,
  ResultListTextBox,
  FriendItemsBox,
  FriendItemBox
};