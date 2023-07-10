import React from 'react';
import Header from './header';
 
type AppLayoutProps = {
  children: React.ReactNode;
};
 
function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <Header />
      {/* 공통으로 들어가게될 Header 컴포넌트 */}
      {children}
      {/* 자식으로 오게될 { children } prop 리턴 */}
    </div>
  );
}
 
export default AppLayout;