import React from "react";
import * as S from "./style";

interface PropsType {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  optionList: Array<string>;
}

const ControlMenu = ({ value, onChange, optionList }: PropsType) => {
  return (
    <S.Select
      value={value}
      onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
        onChange(e.target.value)
      }
    >
      {optionList.map((value, idx) => (
        <S.Option key={idx} value={value}>
          {value}
        </S.Option>
      ))}
    </S.Select>
  );
};

export default ControlMenu;
