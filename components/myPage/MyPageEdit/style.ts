import styled from "styled-components";

export const EditSection = styled.div`
    width: 38.5rem;
    padding: 2rem;
    margin: 0 auto;
    transform: translateY(calc(50vh - 115%));
    text-align: center;
`;

export const Address = styled.div`
    display: flex;
    width: 385px;
`;

export const EditUser = styled.p`
    font-size: 19px;
    font-weight: bold;
    padding: 10% 0 10% 0;
`;

export const RainbowInput = styled.input`
   width: 294px;
  padding: 8px;
  border: 2px solid transparent;
  margin-right: 5%;
  border-image: linear-gradient(to right, #f9e499, #f2b2cf,#b1b0d7, #55abd7 );
  border-image-slice: 1;
  border-radius: 5px;
  color: black;
  font-size: 15px;
  &::placeholder {
    color: gray;
  }
`;

export const SearchButton = styled.button`
    background-color: black;
    color: white;
    font-size: 15px;
    font-weight: bold;
    border: none;
    width: 82px;
    height: 45px;
    border-radius: 5px;
    padding: 8px 15px;
    cursor: pointer;
`;