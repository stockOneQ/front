import styled from 'styled-components';

/**************/
/** index.tsx */
/**************/

interface ICheckBoxButtonProps {
  checked: boolean;
}

const CheckBoxButton = styled.button<ICheckBoxButtonProps>`
  width: 2rem;
  height: 2rem;
  border-radius: .3rem;
  border: 1px solid var(--color-black);
  margin-right: 1.1rem;
  background-color: ${props => props.checked ? 'var(--color-black)' : 'var(--color-white)'};
  padding: .3rem .2rem;
  `

const FriendProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem 0 2rem;
`

/**********************/
/** FriendProfile.tsx */
/**********************/

interface IFriendInfoBoxProps {
  imgMarginRight: string;
}

const FriendInfoBox = styled.div<IFriendInfoBoxProps>`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    margin-right: ${props => props.imgMarginRight};
  }
`

const FriendInfoTextBox = styled.div`
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
  CheckBoxButton,
  FriendProfileBox,
  FriendInfoBox,
  FriendInfoTextBox,
  FriendPhoneText,
  FriendPageButton
};