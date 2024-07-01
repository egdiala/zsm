import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "@/constants/animateVariants";
import { Accounts, ActivePromo, AssetCo, Dashboard, IDVerification, LastActivity, Notifications, Referrals, SendNotifications, TotalEmergencies, UserCard } from "@/components/pages/home";

export const HomePage: React.FC = () => {
    const assetCos = [
        { name: "Bamikale Inc.", email: "example@email.com", phone: "0801 234 5678"},
        { name: "Access Bank", email: "example@email.com", phone: "0801 234 5678"},
        { name: "GAC motors", email: "example@email.com", phone: "0801 234 5678"},
        { name: "Wade Warren", email: "example@email.com", phone: "0801 234 5678"},
        { name: "Wade Warren", email: "example@email.com", phone: "0801 234 5678"},
    ]
    return (
        <motion.div variants={pageVariants} initial='initial' animate='final' exit={pageVariants.initial} className="px-4 md:px-8 pt-4 md:pt-8 pb-6 md:pb-12 max-w-[1800px] w-full mx-auto h-full">
            <div className="grid lg:grid-flow-row-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <Dashboard className="lg:col-span-2" />
                <Notifications />
                <IDVerification />
                <Accounts />
                <AssetCo assets={assetCos} className="lg:col-span-2" />
                <UserCard />
                <TotalEmergencies className="lg:col-span-2" />
                <SendNotifications />
                <Referrals className="xl:row-span-2" />
                <div className="flex flex-col lg:flex-row items-center gap-4 col-span-1 lg:col-span-2 xl:col-span-3">
                    <LastActivity className="w-full" />
                    <ActivePromo className="w-full" />
                </div>
            </div>
        </motion.div>
    )
}