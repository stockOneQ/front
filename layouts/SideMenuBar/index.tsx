import Link from 'next/link';
import Image from 'next/image';
import menuIcon from '../../public/assets/icons/menu.png';
import * as S from './style';
import { Item } from 'hooks/layouts/useGetSideMenuBarItems';
import { Dispatch, SetStateAction } from 'react';

interface ISideMenuBarProps {
  items: Item[];
  currentPath: string;
  sideBarIdx: number;
  setSideBarIdx: Dispatch<SetStateAction<number>>;
}

const SideMenuBar = ({
  items,
  currentPath,
  sideBarIdx,
  setSideBarIdx,
}: ISideMenuBarProps) => {
  return (
    <S.SideMenuBar>
      <S.SideMenuBarList>
        {items?.map(({ label, url, end }, idx) => (
          <S.SideMenuBarItem
            key={idx}
            className={currentPath.indexOf(end) !== -1 ? 'active' : ''}
          >
            <Link
              href={url}
              onClick={() => {
                setSideBarIdx(idx);
              }}
            >
              {label}
            </Link>
          </S.SideMenuBarItem>
        ))}
      </S.SideMenuBarList>

      {/* 버튼 따라 움직이는 애니메이션 처리 필요 */}
      <S.LogoBox sideBarIdx={sideBarIdx}>
        <Image
          className="menu_icon"
          src={menuIcon}
          alt="메뉴아이콘"
          width={30}
          height={30}
        />
      </S.LogoBox>
    </S.SideMenuBar>
  );
};

export default SideMenuBar;
