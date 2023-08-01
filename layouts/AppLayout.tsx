import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as L from "./AppLayoutStyles";

import Header from "./Header";
import SideMenuBar from "./SideMenuBar";

type AppLayoutProps = {
  children: React.ReactNode;
};

type Item = {
  label: string;
  url: string;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const router = useRouter();
  const currentPath = router.pathname;

  let sideMenuBarItems: Item[] = [];

  switch (currentPath) {
    case "/home/frozen":
    case "/home/coldStorage":
    case "/home/roomTemperature":
    case "/new":
      sideMenuBarItems = [
        { label: "냉동", url: "/home/frozen" },
        { label: "냉장", url: "/home/coldStorage" },
        { label: "상온", url: "/home/roomTemperature" },
      ];
      break;
    case "/community/friends":
    case "/community/board":
    case "/community/board/new":
    case "/community/board/[id]":
      sideMenuBarItems = [
        { label: "친구", url: "/community/friends" },
        { label: "게시판", url: "/community/board" },
      ];
      break;
    case "/connect/connection":
    case "/connect/data":
      sideMenuBarItems = [
        { label: "자료", url: "/connect/data" },
        { label: "연결", url: "/connect/connection" },
      ];
      break;
    case "/myPage/edit":
    case "/myPage/questions":
    case "/myPage/secession":
      sideMenuBarItems = [
        { label: "회원정보수정", url: "/myPage/edit" },
        { label: "F & A", url: "/myPage/questions" },
        { label: "회원탈퇴", url: "/myPage/secession" },
      ];
      break;
  }

  return (
    <>
      <Header />
      <L.Box>
        <SideMenuBar items={sideMenuBarItems} />
        <L.Main>{children}</L.Main>
      </L.Box>
    </>
  );
};

export default AppLayout;
