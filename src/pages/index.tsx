import React from "react";
import { Accounts, AssetCo, Dashboard, IDVerification, Notification, UserCard } from "@/components/pages/home";

export const HomePage: React.FC = () => {
    const assetCos = [
        { name: "Bamikale Inc.", email: "example@email.com", phone: "0801 234 5678"},
        { name: "Access Bank", email: "example@email.com", phone: "0801 234 5678"},
        { name: "GAC motors", email: "example@email.com", phone: "0801 234 5678"},
        { name: "Wade Warren", email: "example@email.com", phone: "0801 234 5678"},
        { name: "Wade Warren", email: "example@email.com", phone: "0801 234 5678"},
    ]
    return (
        <div className="px-4 md:px-8 pt-4 md:pt-8 pb-6 md:pb-12 max-w-[1800px] w-full mx-auto h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <Dashboard className="lg:col-span-2" />
                <Notification />
                <IDVerification />
                <Accounts />
                <AssetCo assets={assetCos} className="lg:col-span-2" />
                <UserCard />
            </div>
        </div>
    )
}