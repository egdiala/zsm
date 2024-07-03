import React from "react";
import { cn } from "@/libs/cn";
import { Icon } from "@iconify/react";

interface InfoCardDashboardProps {
    [x: string]: any
}

export const InfoCard: React.FC<InfoCardDashboardProps> = ({ className }) => {
    return (
        <div className={cn("flex flex-col gap-6 py-[1.875rem] px-6 bg-[url('@/assets/driver_character.svg')] bg-right-bottom bg-no-repeat rounded-2xl bg-light-green", className)}>
            <div className="grid gap-2">
                <div className="flex items-center gap-2">
                    <span className="font-normal text-base text-grey-dark-2">Drivers</span>
                    <Icon icon="radix-icons:arrow-top-right" className="size-3 text-[#429200]" />
                </div>
                <h4 className="text-2xl text-grey-dark-1">4,300</h4>
            </div>
            <div className="grid gap-2">
                <div className="flex items-center gap-2">
                    <span className="font-normal text-base text-grey-dark-2">Riders</span>
                    <Icon icon="radix-icons:arrow-top-right" className="size-3 text-[#429200]" />
                </div>
                <h4 className="text-2xl text-grey-dark-1">4,300</h4>
            </div>
            <div className="grid gap-2">
                <div className="flex items-center gap-2">
                    <span className="font-normal text-base text-grey-dark-2">Business</span>
                    <Icon icon="radix-icons:arrow-top-right" className="size-3 text-[#429200]" />
                </div>
                <h4 className="text-2xl text-grey-dark-1">4,300</h4>
            </div>
        </div>
    )
}