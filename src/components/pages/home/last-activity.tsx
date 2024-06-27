import React from "react";
import { cn } from "@/libs/cn";
import { Button } from "@/components/core";

interface LastActivityHomeProps {
    [x: string]: any
}

export const LastActivity: React.FC<LastActivityHomeProps> = ({ className }) => {
    return (
        <div className={cn("flex flex-col p-6 justify-between h-full gap-3.5 rounded-2xl bg-white", className)}>
            <div className="grid gap-2.5 content-start">
                <h1 className="text-grey-dark-1 text-xl font-semibold">Last Activity</h1>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-2">
                        <h1 className="text-green text-base font-medium">Joshua Mike</h1>
                        <span className="text-grey-dark-2 text-xs italic">2 mins ago</span>
                    </div>
                    <p className="text-grey-dark-2 text-sm">Lorem ipsum dolor sit amet consectetur. Mauris id egestas dui viverra commodo in odio sed placeestas quis in metus. Viverra nulla pellentesque eu orci nulla molestie conguenas lectus tempus viverra.</p>
                </div>
            </div>
            <Button theme="arrow-cta-1">View Activity Log</Button>
        </div>
    )
}