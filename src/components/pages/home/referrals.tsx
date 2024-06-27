import React from "react";
import { cn } from "@/libs/cn";
import { Button } from "@/components/core";

interface ReferralsHomeProps {
    [x: string]: any
}

export const Referrals: React.FC<ReferralsHomeProps> = ({ className }) => {
    return (
        <div className={cn("flex flex-col justify-between p-6 gap-3.5 h-full rounded-2xl bg-white", className)}>
            <div className="grid">
                <h1 className="text-grey-dark-1 text-xl font-semibold">Referrals</h1>
                <p className="text-grey-dark-3 text-sm">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <Button theme="arrow-cta-1">View all referrals</Button>
        </div>
    )
}