import Link from "next/link";
import Image from "next/image";
import menuIcon from "../../../assets/imgs/menu.png";

import * as I from "./innerNavBarModule";

export const InnerNavBar = ({ navItems, currentPath }) => {
  let innerNavItems = [];

  if (currentPath === "/") {
    innerNavItems = ["냉동", "냉장", "상온"];
  }
  else if (currentPath === "/community") {
    innerNavItems = ["친구", "게시판"];
  }
  else if (currentPath === "/connect") {
    innerNavItems = ["자료", "연결"];
  }
  else if (currentPath === "/myPage") {
    innerNavItems = ["회원정보수정", "F & A", "회원탈퇴"];
  }

  return (
    <nav>
      <I.inner_menu_bar>
        <I.inner_nav_ul>
          {innerNavItems.map((item) => (
            <I.inner_nav_item
              key={item}
              className={item === currentPath ? "active" : ""}
            >
              <Link href={`/${item}`}>{item}</Link>
            </I.inner_nav_item>

          ))}
        </I.inner_nav_ul>
        <I.LogoBox>
          <I.vertical_line></I.vertical_line>
          <I.ImageWrapper>
            <Image
              className="menu_icon"
              src={menuIcon}
              alt="메뉴아이콘"
              width={30}
              height={30}
            />
          </I.ImageWrapper>

        </I.LogoBox>

      </I.inner_menu_bar>
    </nav>
  );
};