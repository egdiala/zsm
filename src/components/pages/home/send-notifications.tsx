import React from "react";
import { cn } from "@/libs/cn";
import { Button } from "@/components/core";

interface SendNotificationsHomeProps {
    [x: string]: any
}

export const SendNotifications: React.FC<SendNotificationsHomeProps> = ({ className }) => {
    const verificationButtons = ["All Drivers", "All Riders", "Selected Drivers", "Selected Riders"];
    return (
        <div className={cn("flex flex-col p-6 gap-[3.125rem] rounded-2xl bg-white", className)}>
            <div className="grid">
                <h1 className="text-grey-dark-1 text-xl font-semibold">Send Notification</h1>
                <p className="text-grey-dark-3 text-sm">Send notification to users on the platform</p>
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