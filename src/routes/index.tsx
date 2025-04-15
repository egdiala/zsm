import { ReactNode } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import { AnimatePresence } from "framer-motion";
import ProtectedLayout from "@/layouts/ProtectedLayout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthRoutes, UserRoutes, VehiclesRoutes } from "./modules";


function LocationProvider({ children }: { children: ReactNode }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<ProtectedLayout><LocationProvider><UserRoutes /></LocationProvider></ProtectedLayout>} />
                <Route path="auth/*" element={<AuthLayout><LocationProvider><AuthRoutes /></LocationProvider></AuthLayout>} />
                <Route path="vehicles/*" element={<ProtectedLayout><LocationProvider><VehiclesRoutes /></LocationProvider></ProtectedLayout>} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;