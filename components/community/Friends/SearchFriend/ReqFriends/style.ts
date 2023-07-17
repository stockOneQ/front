import styled from 'styled-components';

const HeadParagraph = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2rem;
`

const EachFriendsBox = styled.div`
  height: 23rem;
  overflow-y: auto;
  padding-right: 5.6rem;
  
  &::-webkit-scrollbar {
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
    margin-bottom: 2.5rem;
  }
`

export {
  HeadParagraph,
  EachFriendsBox
}