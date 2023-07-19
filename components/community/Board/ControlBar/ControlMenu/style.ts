import { styled } from "styled-components";

export const Select = styled.select`
  -webkit-appearance: none;
  appearance: none;

  width: 163px;
  height: 35px;

  background: #000000;
  border-radius: 100px;

  color: white;
  font-size: 13px;
  font-weight: 600;
  line-height: 15px;
  text-align: center;

  cursor: pointer;
`;

export const Option = styled.option`
  -webkit-appearance: none;
  appearance: none;

  color: black;

  width: 163px;
  height: 35px;

  background: white;
  border-radius: 100px;

  cursor: pointer;

  &:hover {
    background: #f7f7f9;
  }
`;
