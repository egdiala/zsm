import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { TableAction } from "@/components/core";
import { pageVariants } from "@/constants/animateVariants";
import { AssetCos, Downloads, InfoCard, Payments, Revenue, TotalAssets, TotalTrips } from "@/components/pages/dashboard";

export const DashboardPage: React.FC = () => {
    const assetCos = [
        { name: "Ibile Holdings", trips: "5,346", vehicles: "5,346", drivers: "5,346", revenue: "₦56,887" },
        { name: "Bamikale Inc.", trips: "5,346", vehicles: "5,346", drivers: "5,346", revenue: "₦56,887" },
        { name: "GAC Motors", trips: "5,346", vehicles: "5,346", drivers: "5,346", revenue: "₦56,887" },
        { name: "Daugherty-Goyette", trips: "5,346", vehicles: "5,346", drivers: "5,346", revenue: "₦56,887" },
        { name: "Wade Warre", trips: "5,346", vehicles: "5,346", drivers: "5,346", revenue: "₦56,887" },
    ]

    return (
        <motion.div variants={pageVariants} initial='initial' animate='final' exit={pageVariants.initial} className="flex flex-col gap-6 px-4 md:px-8 pt-9 pb-7 md:pb-9 max-w-[1800px] w-full mx-auto h-full">
            <div className="flex justify-end items-center gap-2">
                <TableAction theme="primary">
                    Weekly Report
                    <Icon icon="ph:caret-down" className="size-6" />
                </TableAction>
            </div>
            <div className="grid lg:grid-flow-row-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="grid lg:grid-flow-row-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 col-span-2 xl:col-span-3">
                    <Revenue className="lg:col-span-2" />
                    <TotalAssets className="sm:pb-28" />
                    <div className="grid gap-4 col-span-1">
                        <TotalTrips />
                        <Downloads className="sm:pb-52" />
                    </div>
                    <AssetCos assets={assetCos} className="lg:col-span-2" />
                </div>
                <div className="grid lg:grid-flow-col-dense gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-none xl:grid-rows-3 col-span-2 xl:col-span-1">
                    <InfoCard className="xl:row-span-1" />
                    <Payments className="xl:row-span-2" />
                </div>
            </div>
        </motion.div>
    )
}