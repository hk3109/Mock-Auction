import { Navigate, Route, Routes } from "react-router-dom";
import Home1 from "../pages/Home1";
import Home2 from "../pages/Home2";
import Home3 from "../pages/Home3";
import PublicLayout from "./PublicLayout";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ipl/home1" replace />} />

      <Route path="/ipl" element={<PublicLayout />}>
        <Route index element={<Navigate to="/ipl/home1" replace />} />
        <Route path="home1" element={<Home1 />} />
        <Route path="home2" element={<Home2 />} />
        <Route path="home3" element={<Home3 />} />
      </Route>

      <Route path="*" element={<Navigate to="/ipl/home1" replace />} />
    </Routes>
  );
};

export default Layout;