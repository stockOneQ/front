import styled from 'styled-components';

const SearchFriendText = styled.p`
  color: var(--color-black);
  font-size: 1.5rem;
  line-height: normal;
  padding: 3rem 2.5rem;
`

const SearchFriendBox = styled.div`
  padding-right: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 61.9rem;
  height: 4.5rem;
  border-radius: 3rem;
  box-shadow: 0px 1.1rem 2rem 0px rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(.2rem);
  margin: 0 auto;
`

const SearchByBox = styled.div`
  width: 16.3rem;
  height: 20.3rem;
  margin-top: 36.2rem;
  transform: translateY(-50%);
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  line-height: normal;
  
  p {
    font-weight: 600;
    z-index: 100;
    color: var(--color-white);
  }
`

const SelectedValueButton = styled.button`
  width: 16.3rem;
  height: 4.4rem;
  position: relative;
  padding: 1.2rem 0;
  background-color: var(--color-black);
  border-radius: 3rem;
  z-index: 1000;

  img {
    position: absolute;
    top: 2.1rem;
    right: 3rem;
    transform: translateY(-50%) rotate(0deg);
    transition: transform .5s linear;
  }

  .toggle {
    transform: translateY(-50%) rotate(180deg);
    transition: transform .5s linear;
  }
`

const OptionList = styled.ul`
  width: 16.3rem;
  background-color: var(--color-white);
  color: #979797;
  font-weight: 500;
  padding-top: 4.15rem;
  border: 1px solid #F7F7F9;
  z-index: 0;
  margin-top: -22.5px;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;

  li {
    color: #979797;
    font-weight: 500;
    padding: 1.8rem;
    border-radius: 3rem;
    cursor: pointer;

    &:hover {
      color: var(--color-black);
      background-color: #F7F7F9;
    }
  }
`

const InputBox = styled.input`
  width: 100%;
  padding: 0 3rem;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: normal;
  
  &::placeholder {
    color: #979797;
  }
`

export { 
  SearchFriendText,
  SearchFriendBox,
  SearchByBox,
  SelectedValueButton,
  OptionList,
  InputBox
};