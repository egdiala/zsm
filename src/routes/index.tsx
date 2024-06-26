import { ReactNode } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./modules";
import AuthLayout from "@/layouts/AuthLayout";
import { AnimatePresence } from "framer-motion";
import { HomePage } from "@/pages";


function LocationProvider({ children }: { children: ReactNode }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<LocationProvider><HomePage /></LocationProvider>} />
                <Route path="auth/*" element={<AuthLayout><LocationProvider><AuthRoutes /></LocationProvider></AuthLayout>} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;