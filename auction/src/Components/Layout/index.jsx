import { Navigate, Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Login from "../Login/Login";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ipl/login" element={<Navigate to="/login" replace />} />
      <Route path="/ipl/*" element={<AppRoutes />} />
    </Routes>
  );
};

export default Layout;
