import { cn } from "@/libs/cn";
import { motion } from "framer-motion";
import React, { Fragment, useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { pageVariants } from "@/constants/animateVariants";

export const VehiclesPage: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const routes = [
        {
            name: "Overview",
            path: "/vehicles/overview"
        },
        {
            name: "Vehicle’s log",
            path: "/vehicles/logs"
        },
    ]
    useEffect(() => {
        if (location.pathname === "/vehicles") {
            navigate("/vehicles/overview")
        }
    }, [location.pathname])
    return (
        <motion.div variants={pageVariants} initial='initial' animate='final' exit={pageVariants.initial} className="flex flex-col gap-6 px-4 md:px-8 pt-9 pb-7 md:pb-9 max-w-[1800px] w-full mx-auto h-full">
            <div className="flex items-center bg-white p-1.5 rounded-xl">
                {
                    routes.map((route, index) => (
                        <NavLink key={index} to={route.path} className="relative p-3">
                            {({ isActive }) => (
                                <Fragment>
                                    {isActive && <motion.div layoutId="vehicles-layout-tab" className="absolute inset-0 bg-green rounded-md" />}
                                    <span className={cn("isolate", isActive ? "text-white font-semibold" : "text-grey-dark-1")}>{route.name}</span>
                                </Fragment>
                            )}
                        </NavLink>
                    ))
                }
            </div>
            <Outlet />
        </motion.div>
    )
}