import React from "react";
import { cn } from "@/libs/cn";

interface DownloadsDashboardProps {
    [x: string]: any
}

export const Downloads: React.FC<DownloadsDashboardProps> = ({ className }) => {
    return (
        <div className={cn("flex flex-col pt-4 pb-40 items-center bg-[url('@/assets/download_wave.svg')] bg-cover bg-bottom bg-no-repeat rounded-2xl bg-light-green", className)}>
            <div className="grid gap-1.5 justify-items-center">
                <span className="font-normal text-sm text-grey-dark-1">Downloads</span>
                <h4 className="font-light text-5xl text-grey-dark-1">343,681</h4>
            </div>
        </div>
    )
}