import React, { PropsWithChildren, useState } from 'react';
import { useRouter } from 'next/router';
import * as L from './AppLayoutStyles';
import Header from './Header';
import SideMenuBar from './SideMenuBar';
import useGetSideMenuBarItems from 'hooks/layouts/useGetSideMenuBarItems';

const AppLayout = ({ children }: PropsWithChildren) => {
  const [sideBarIdx, setSideBarIdx] = useState(0);

  const router = useRouter();
  const currentPath = router.pathname;
  const sideMenuBarItems = useGetSideMenuBarItems(currentPath)!;

  return (
    <>
      <Header setSideBarIdx={setSideBarIdx} />
      <L.Box>
        <SideMenuBar items={sideMenuBarItems} currentPath={currentPath} sideBarIdx={sideBarIdx} setSideBarIdx={setSideBarIdx} />
        <L.Main>{children}</L.Main>
      </L.Box>
    </>
  );
};

export default AppLayout;
