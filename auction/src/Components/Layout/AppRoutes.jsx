import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home1 from "../Modules/Home1";
import Home2 from "../Modules/Home2";
import Home3 from "../Modules/Home3";
import AppSidebar from "../Common/AppSidebar";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="home1" replace />} />
        <Route path="home1" element={<Home1 />} />
        <Route path="home2" element={<Home2 />} />
        <Route path="home3" element={<Home3 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
