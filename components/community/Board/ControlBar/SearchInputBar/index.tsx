import { useState } from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { searchInputState } from "recoil/states";

const BoardSearchInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <S.InputBar
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    />
  );
};

export default BoardSearchInput;
