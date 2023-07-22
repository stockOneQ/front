import { useState } from "react";
import * as S from "./style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { searchInputState } from "recoil/states";

const BoardSearchInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const setSearchInput = useSetRecoilState(searchInputState);

  const handleEnter = (e: { key: string }) => {
    if (e.key === "Enter") setSearchInput(value);
  };
  return (
    <S.InputBar
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      onKeyDown={handleEnter}
    />
  );
};

export default BoardSearchInput;
