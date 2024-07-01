import React from "react";
import { cn } from "@/libs/cn";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

interface TotalTripsDashboardProps {
    [x: string]: any
}

export const TotalTrips: React.FC<TotalTripsDashboardProps> = ({ className }) => {
    return (
        <div className={cn("flex flex-col pt-11 pb-6 bg-[url('@/assets/total_trips.svg')] bg-cover bg-bottom bg-no-repeat rounded-2xl bg-white", className)}>
            <div className="flex flex-col gap-7 px-4">
                <div className="grid gap-1.5">
                    <span className="font-medium text-base text-grey-dark-1">Total Trips</span>
                    <h4 className="font-light text-5xl text-grey-dark-1">4,300</h4>
                </div>
                <Link to="#" className="flex items-center gap-1">
                    <span className="text-xs text-grey-dark-1">Click for More</span>
                    <Icon icon="radix-icons:arrow-top-right" className="size-3 text-grey-dark-1" />
                </Link>
            </div>
        </div>
    )
}