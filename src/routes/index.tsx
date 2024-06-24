import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./modules";
import AuthLayout from "@/layouts/AuthLayout";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="auth/*" element={<AuthLayout><AuthRoutes /></AuthLayout>} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;