import React, { useEffect, useRef, useState } from "react";
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
  end: string
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const sideMenuBarItems = useRef<Item[]>([]);
  
  const router = useRouter();
  const currentPath = router.pathname;


  switch (currentPath) {
    case '/home/frozen':
    case '/home/coldStorage':
    case '/home/roomTemperature':
    case '/new':
      sideMenuBarItems.current = [
        { label: '냉동', url: '/home/frozen', end: 'frozen' },
        { label: '냉장', url: '/home/coldStorage', end: 'coldStorage' },
        { label: '상온', url: '/home/roomTemperature', end: 'roomTemperature' }
      ];
      break;
    case '/community/friends':
    case '/community/board':
    case '/community/board/new':
    case '/community/board/[id]':
      sideMenuBarItems.current = [
        { label: '친구', url: '/community/friends', end: 'friends' },
        { label: '게시판', url: '/community/board', end: 'board' }
      ];
      break;
    case '/connect/connection':
    case '/connect/data':
      sideMenuBarItems.current = [
        { label: '자료', url: '/connect/data', end: 'data' },
        { label: '연결', url: '/connect/connection', end: 'connection' }
      ];
      break;
    case '/myPage/edit':
    case '/myPage/questions':
    case '/myPage/secession':
      sideMenuBarItems.current = [
        { label: '회원정보수정', url: '/myPage/edit', end: 'edit' },
        { label: 'F & A', url: '/myPage/questions', end: 'questions' },
        { label: '회원탈퇴', url: '/myPage/secession', end: 'secession' }
      ];
      break;
  }

  return (
    <>
      <Header />
      <L.Box>
        <SideMenuBar items={sideMenuBarItems.current} />
        <L.Main>{children}</L.Main>
      </L.Box>
    </>
  );
};

export default AppLayout;
