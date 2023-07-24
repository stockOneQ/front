import { styled } from "styled-components";

export const ControlBarBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  position: relative;

  margin-left: 1.6rem;
`;

export const SearchBar = styled.div`
  position: relative;
  left: 25%;

  img {
    position: absolute;
    top: 24%;
    right: 4%;
  }
`;

export const SearchButton = styled.button``;

export const DropBoxContainer = styled.div`
  position: absolute;
  top: 0%;
`;

export const WriteButtonContainer = styled.button`
  margin-right: 4.4rem;
`;
