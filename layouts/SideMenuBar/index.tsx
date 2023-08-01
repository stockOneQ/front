import Link from 'next/link';
import Image from 'next/image';
import menuIcon from '../../public/assets/icons/menu.png';
import * as S from './SideMenuBarModule';
import { Item } from 'hooks/layouts/useGetSideMenuBarItems';

interface ISideMenuBarProps {
  items: Item[];
  currentPath: string;
}

const SideMenuBar = ({ items, currentPath }: ISideMenuBarProps) => {
  return (
    <S.SideMenuBar>
      <S.SideMenuBarList>
        {items.map(({ label, url, end }, idx) => (
          <S.SideMenuBarItem
            key={idx}
            className={currentPath.endsWith(end) ? 'active' : ''}
          >
            <Link href={url}>
              {label}
            </Link>
          </S.SideMenuBarItem>
        ))}
      </S.SideMenuBarList>

      {/* 버튼 따라 움직이는 애니메이션 처리 필요 */}
      <S.LogoBox>
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
