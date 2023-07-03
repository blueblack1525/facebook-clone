import { Outlet } from "react-router-dom";
import NavgationBar from "./components/navigation/NavigationBar";

export default function App() {

   return (
      <div className="relative">
         <NavgationBar />

         {/* 네비게이션에서 react router 로 분기시켜줘야되는 레이아웃(페이지)들 렌더링 위치 지정 */}
         <Outlet />
      </div>
   )
}