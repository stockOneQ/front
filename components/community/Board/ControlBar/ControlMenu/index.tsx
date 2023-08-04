import React from 'react';
import * as S from './style';

interface IPropsType {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  optionList: string[];
}

const ControlMenu = ({ value, onChange, optionList }: IPropsType) => {
  return (
    <S.Select
      value={value}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
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
