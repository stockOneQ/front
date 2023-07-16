import React from "react";
import { styled } from "styled-components";

interface PropsType {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  optionList: Array<string>;
}

const ControlMenu = ({ value, onChange, optionList }: PropsType) => {
  return (
    <Select
      value={value}
      onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
        onChange(e.target.value)
      }
    >
      {optionList.map((value, idx) => (
        <Option key={idx} value={value}>
          {value}
        </Option>
      ))}
    </Select>
  );
};

const Select = styled.select`
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

const Option = styled.option`
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

export default ControlMenu;
