import Image from "next/image";
import { useState } from "react";
import toggleButtonIcon from "public/assets/icons/community/toggleButtonIcon.svg";
import * as S from "./style";

interface IDropDownProps {
  width: number;
  height: number;
  font: number;
  list: string[];
}

/** 드롭다운 */
const DropDown = ({ width, height, font, list }: IDropDownProps) => {
  const [searchBy, setSearchBy] = useState(list[0]); // 카테고리 선택
  const [categoryToggle, setCategoryToggle] = useState(false); // 카테고리 토글

  const changeValueHandler = (value: string) => {
    setSearchBy(value);
    setCategoryToggle(false);
  };

  return (
    <>
      <S.SelectedValueButton
        width={width}
        height={height}
        font={font}
        onClick={() => {
          setCategoryToggle((prev) => !prev);
        }}
      >
        <span>{searchBy}</span>
        <Image
          className={`${categoryToggle ? "categoryToggle" : ""}`}
          src={toggleButtonIcon}
          alt="toggle_icon"
          width={12}
        />
      </S.SelectedValueButton>
      {categoryToggle && (
        <S.OptionList font={font}>
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
