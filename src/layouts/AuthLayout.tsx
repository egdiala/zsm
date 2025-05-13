import { isAuthenticated } from "@/utils/auth-util";
import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const AuthLayout = ({ children }: PropsWithChildren) => {
  
    const isLoggedIn = isAuthenticated();

    if (isLoggedIn) {
        return <Navigate to='/' replace />;
    }

    return (
        <div className='w-full bg-[url("@/assets/authBg.webp")] bg-center h-screen overflow-hidden'>
            <div className="flex justify-center w-full h-full bg-grey-dark-1 bg-opacity-70 px-4 lg:px-0">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;