import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Button, TableAction } from "@/components/core";
import { useNavigate } from "react-router-dom";
import { pageVariants } from "@/constants/animateVariants";
import { ActivePromo, LastActivity} from "@/components/pages/home";
import { Revenue } from "@/components/pages/dashboard";

export const DashboardPage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <motion.div variants={pageVariants} initial='initial' animate='final' exit={pageVariants.initial} className="flex flex-col gap-6 px-4 md:px-8 pt-9 md:pt-[3.25rem] pb-7 md:pb-9 max-w-[1800px] w-full mx-auto h-full">
            <div className="flex items-start justify-between">
                <div className="grid">
                    <h1 className="text-white text-3xl font-medium">Dashboard</h1>
                    <p className="text-grey-dark-4 text-base">View snapshot data on all asset companies</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button theme="white" onClick={() => navigate("/")}>
                        <Icon icon="ic:round-home" className="size-6" />
                        Home
                    </Button>
                    <TableAction theme="secondary">
                        Weekly Report
                        <Icon icon="ph:caret-down" className="size-6" />
                    </TableAction>
                </div>
            </div>
            <div className="grid lg:grid-flow-row-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <Revenue className="lg:col-span-2" />
                    <LastActivity className="w-full" />
                <div className="flex flex-col lg:flex-row items-center gap-4 col-span-1 lg:col-span-2 xl:col-span-3">
                    <LastActivity className="w-full" />
                    <ActivePromo className="w-full" />
                </div>
            </div>
        </motion.div>
    )
}