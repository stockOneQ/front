import Image from 'next/image'
import { useState } from 'react'
import toggleButtonIcon from 'public/assets/icons/community/toggleButtonIcon.svg';
import * as S from './style';

interface IDropDownProps {
  width: number;
  height: number;
  font: number;
  padding: number;
  margin: number;
  list: {
    id: number;
    label: string;
  }[]
}

/** 드롭다운 */
const DropDown = ({ width, height, font, padding, margin, list }: IDropDownProps) => {
  const [searchBy, setSearchBy] = useState('이름'); // 카테고리 선택
  const [categoryToggle, setCategoryToggle] = useState(false); // 카테고리 토글

  const changeValueHandler = (value: string) => {
    setSearchBy(value); 
    setCategoryToggle(false); 
  }

  return (
    <S.SearchByBox width={width} height={height} len={list.length} font={font}>
      <S.SelectedValueButton width={width} height={height} padding={padding} onClick={() => { setCategoryToggle((prev) => (!prev)) }}>
        <p>{searchBy}</p>
        <Image className={`${categoryToggle ? 'categoryToggle' : ''}`} src={toggleButtonIcon} alt="my_page_icon" width={12} height={10} />
      </S.SelectedValueButton>
      {categoryToggle && (
        <S.OptionList padding={padding} margin={margin}>
          {list.map(({ id, label }) => (<li key={id} onClick={() => { changeValueHandler(label) }}>{label}</li>))}
        </S.OptionList>
      )}
    </S.SearchByBox>
  );
};

export default DropDown;