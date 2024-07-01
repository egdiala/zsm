import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages";
import { DashboardPage } from "@/pages/dashboard";

const UserRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default UserRoutes;