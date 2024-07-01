import React from "react";
import { cn } from "@/libs/cn";

interface TotalAssetsDashboardProps {
    [x: string]: any
}

export const TotalAssets: React.FC<TotalAssetsDashboardProps> = ({ className }) => {
    return (
        <div className={cn("flex flex-col bg-[url('@/assets/car_repair.svg')] bg-cover bg-left bg-no-repeat rounded-2xl bg-white", className)}>
            <div className="flex items-center justify-between gap-4 px-6 pt-7 md:pb-0 pb-28">
                <div className="grid gap-2">
                    <span className="font-medium text-base text-grey-dark-1">Total Asset Co.</span>
                    <h4 className="font-light text-5xl text-grey-dark-1">4,678</h4>
                </div>
            </div>
        </div>
    )
}