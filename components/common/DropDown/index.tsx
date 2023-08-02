import Image from "next/image";
import { useState } from "react";
import toggleButtonIcon from "public/assets/icons/community/toggleButtonIcon.svg";
import * as S from "./style";

interface IDropDownProps {
  width: number;
  height: number;
  fontSize: number;
  toggleSize: number;
  toggleTopSize: number;
  list: string[];
  onChange?: React.Dispatch<React.SetStateAction<string>>;
  onReset?: React.Dispatch<React.SetStateAction<string>>;
}

/** 드롭다운 */
const DropDown = ({
  width,
  height,
  fontSize,
  toggleSize,
  toggleTopSize,
  list,
  onChange,
  onReset,
}: IDropDownProps) => {
  const [searchBy, setSearchBy] = useState(list[0]); // 카테고리 선택
  const [categoryToggle, setCategoryToggle] = useState(false); // 카테고리 토글

  const changeValueHandler = (value: string) => {
    if (onChange) onChange(value);
    if (onReset) onReset("");
    setSearchBy(value);
    setCategoryToggle(false);
  };

  return (
    <>
      <S.SelectedValueButton
        width={width}
        height={height}
        fontSize={fontSize}
        onClick={() => {
          setCategoryToggle((prev) => !prev);
        }}
      >
        <span>{searchBy}</span>
        <S.ToggleContainer toggleTopSize={toggleTopSize}>
          <Image
            className={`${categoryToggle ? "categoryToggle" : ""}`}
            src={toggleButtonIcon}
            alt="toggle_icon"
            width={toggleSize}
          />
        </S.ToggleContainer>
      </S.SelectedValueButton>
      {categoryToggle && (
        <S.OptionList width={width} fontSize={fontSize}>
          {list.map((label, idx) => (
            <li
              key={idx}
              onClick={() => {
                changeValueHandler(label);
              }}
            >
              {label}
            </li>
          ))}
        </S.OptionList>
      )}
    </>
  );
};

export default DropDown;
