import React from "react";
import { cn } from "@/libs/cn";
import { Button } from "@/components/core";
import { Icon } from "@iconify/react";

interface TotalEmergenciesHomeProps {
    [x: string]: any
}

export const TotalEmergencies: React.FC<TotalEmergenciesHomeProps> = ({ className }) => {
    return (
        <div className={cn("flex flex-col p-6 gap-[3.125rem] rounded-2xl bg-[#FFEEEE]", className)}>
            <div className="flex items-start justify-between">
                <div className="grid">
                    <h1 className="text-grey-dark-1 text-xl font-semibold">Total Emergencies</h1>
                    <p className="text-grey-dark-2 text-sm">View snapshot emergency data on all asset companies</p>
                </div>
                <Button className="bg-semantics-red text-white px-2 py-2.5 rounded-lg"><span className="hidden lg:flex font-medium">View Emergencies</span><Icon icon="radix-icons:arrow-top-right" className="size-5" /></Button>
            </div>
        </div>
    )
}