import React from "react";
import { cn } from "@/libs/cn";
import { Button } from "@/components/core";

interface IDVerificationHomeProps {
    [x: string]: any
}

export const IDVerification: React.FC<IDVerificationHomeProps> = ({ className }) => {
    const verificationButtons = ["vNIN", "Drivers’ License", "LASSRA", "LASDRI"];
    return (
        <div className={cn("flex flex-col p-6 gap-[3.125rem] rounded-2xl bg-white", className)}>
            <div className="grid">
                <h1 className="text-grey-dark-1 text-xl font-semibold">ID Verification</h1>
                <p className="text-grey-dark-2 text-sm">Quickly validate and verify a user identity</p>
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