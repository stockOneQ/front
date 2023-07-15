import React, { useEffect, useState } from "react";
import Header from "./Header";
import InnerNavBar from './InnerNavBar';
import * as S from './AppLayoutStyles';
import { useRouter } from 'next/router';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const [activeLink, setActiveLink] = useState("");
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // URL에서 현재 경로
      const route = url === "/" ? "home" : url.split("/").slice(-1)[0];
      // 현재 경로에 기반하여 activeLink 상태를 업데이트
      setActiveLink(route);
    };
    // 페이지 로드 시에 activeLink 상태를 초기화
    setActiveLink(router.pathname === "/" ? "home" : router.pathname.split("/").slice(-1)[0]);
    setCurrentPath(router.pathname);

    // routeChangeComplete 이벤트를 구독하여 activeLink 상태를 업데이트
    router.events.on("routeChangeComplete", handleRouteChange);
    // 컴포넌트가 언마운트될 때 routeChangeComplete 이벤트 구독을 해제, 불필요한 이벤트 구독이 남아있지 않도록
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Header activeLink={activeLink} />
      <S.SideNavBox>
        <InnerNavBar
          navItems={[
            { label: "냉동", url: "/community" },
            { label: "냉장", url: "/" },
            { label: "상온", url: "/" },
          ]}
          currentPath={currentPath}
          />
        <S.MainBox>{children}</S.MainBox>
      </S.SideNavBox>
      {/* 공통으로 들어가게될 Header 컴포넌트 */}
      {/* 자식으로 오게될 { children } prop 리턴 */}
    </>
  );
}

export default AppLayout;
