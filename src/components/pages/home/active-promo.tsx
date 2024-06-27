import React from "react";
import { cn } from "@/libs/cn";
import { Button } from "@/components/core";

interface ActivePromoHomeProps {
    [x: string]: any
}

export const ActivePromo: React.FC<ActivePromoHomeProps> = ({ className }) => {
    return (
        <div className={cn("flex flex-col justify-between p-6 gap-3.5 h-full rounded-2xl bg-white", className)}>
            <div className="flex items-start">
                <div className="grid gap-2.5 content-start">
                    <h1 className="text-grey-dark-1 text-xl font-semibold">Active Promo</h1>
                    <div className="text-grey-dark-1 text-5xl font-light">46</div>
                </div>
            </div>
            <Button theme="arrow-cta-1">View all Promos</Button>
        </div>
    )
}