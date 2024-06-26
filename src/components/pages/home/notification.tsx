import React from "react";
import { cn } from "@/libs/cn";
import { Button } from "@/components/core";
import bell3d from "@/assets/bell_3d.webp";

interface NotificationHomeProps {
    [x: string]: any
}

export const Notification: React.FC<NotificationHomeProps> = ({ className }) => {
    return (
        <div className={cn("flex flex-col p-6 gap-[3.125rem] rounded-2xl bg-white", className)}>
            <h1 className="text-grey-dark-1 text-xl font-semibold">Notifications</h1>
            <div className="flex flex-col justify-center items-center flex-1 gap-1">
                <img src={bell3d} className="-rotate-45 size-28 mr-6" alt="bell_3d" loading="lazy" />
                <h2 className="text-grey-dark-2 text-xl font-medium">Woohoo!</h2>
                <p className="text-grey-dark-2 text-xs font-normal">You have 0 unread notifications</p>
            </div>
            <Button theme="arrow-cta-1">View all notifications</Button>
        </div>
    )
}