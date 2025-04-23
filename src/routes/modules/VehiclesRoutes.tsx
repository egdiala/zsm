import { Routes, Route } from "react-router-dom";
import { AddVehiclePage, VehiclesLogPage, VehiclesOverviewPage, VehiclesPage } from "@/pages/vehicles";

const VehiclesRoutes = () => {
  return (
    <Routes>
      <Route path="create" element={<AddVehiclePage />} />
      <Route path="" element={<VehiclesPage />}>
        <Route path="overview" element={<VehiclesOverviewPage />} />
        <Route path="logs" element={<VehiclesLogPage />} />
      </Route>
    </Routes>
  );
};

export default VehiclesRoutes;