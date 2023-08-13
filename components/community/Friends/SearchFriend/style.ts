import styled from "styled-components";

const SearchFriendText = styled.p`
  color: var(--color-black);
  font-size: 1.5rem;
  line-height: normal;
  padding: 3rem 2.5rem;
`;

const SearchFriendBox = styled.div`
  padding-right: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 61.9rem;
  height: 4.5rem;
  border-radius: 3rem;
  box-shadow: 0px 1.1rem 2rem 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.2rem);
  margin: 0 auto 2rem;
`;

const InputBox = styled.input`
  width: 100%;
  padding: 0 3rem;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: normal;
  counter-reset: var(--color-black);
  margin-left: 16.3rem;

  &::placeholder {
    color: #979797;
  }
`;

const DropBoxContainer = styled.div`
  position: absolute;
  top: 0%;
`;

export { SearchFriendText, SearchFriendBox, DropBoxContainer, InputBox };
