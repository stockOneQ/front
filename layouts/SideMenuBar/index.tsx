import Link from "next/link";
import Image from "next/image";
import menuIcon from "../../public/assets/icons/menu.png";
import * as S from "./SideMenuBarModule";
import { useEffect, useState } from "react";

type Item = {
  label: string;
  url: string;
};

const SideMenuBar = ({ items }: { items: Item[] }) => {
  const [click, setClick] = useState<string>("");

  return (
    <S.SideMenuBar>
      <S.SideMenuBarList>
        {items.map(({ label, url }: { label: string; url: string }, idx) => (
          <S.SideMenuBarItem
            key={idx}
            className={click === label ? "active" : ""}
          >
            <Link href={url} onClick={() => setClick(label)}>
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
