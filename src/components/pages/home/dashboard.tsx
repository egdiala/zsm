import React from "react";
import { cn } from "@/libs/cn";
import { Button } from "@/components/core";

interface DashboardHomeProps {
    [x: string]: any
}

export const Dashboard: React.FC<DashboardHomeProps> = ({ className }) => {
    const verificationButtons = ["vNIN", "Drivers’ License", "LASSRA", "LASDRI"];
    return (
        <div className={cn("flex flex-col p-6 gap-[3.125rem] rounded-2xl bg-white", className)}>
            <div className="flex items-start justify-between">
                <div className="grid">
                    <h1 className="text-grey-dark-1 text-xl font-semibold">Dashboard</h1>
                    <p className="text-grey-dark-2 text-sm">View snapshot data on all asset companies</p>
                </div>
                <Button theme="arrow-cta-1"><span className="hidden lg:flex">View Dashboard</span></Button>
            </div>
            <div className="grid gap-2">
                {
                    verificationButtons.map((item) =>
                        <Button theme="arrow-cta-2" key={item}>{item}</Button>
                    )
                }
            </div>
        </div>
    )
}