import Link from "next/link";
import Image from "next/image";
import menuIcon from "assets/imgs/menu.png";
import * as S from "./SideMenuBarModule";

type Item = {
  label: string;
  url: string;
};

const SideMenuBar = ({
  currentPath,
  items,
}: {
  currentPath: string;
  items: Item[];
}) => {
  return (
    <S.SideMenuBar>
      <S.SideMenuBarList>
        {items.map(({ label, url }: { label: string; url: string }) => (
          <S.SideMenuBarItem
            key={label}
            className={url === currentPath ? "active" : ""}
          >
            <Link href={url}>{label}</Link>
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
