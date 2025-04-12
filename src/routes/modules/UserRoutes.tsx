import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages";
import { DashboardPage } from "@/pages/dashboard";
import { CreateRolePage, EditRolePage, RolesPage, ViewRolePage } from "@/pages/roles";
import { AdminAccountsPage } from "@/pages/accounts";

const UserRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="roles" element={<RolesPage />} />
      <Route path="roles/edit" element={<EditRolePage />} />
      <Route path="roles/create" element={<CreateRolePage />} />
      <Route path="roles/view" element={<ViewRolePage />} />
      <Route path="accounts" element={<AdminAccountsPage />} />
      {/* Riders */}
      <Route path="user/riders" element={<ViewRolePage />} />
    </Routes>
  );
};

export default UserRoutes;
