import React from "react";
import { cn } from "@/libs/cn";
import { Button } from "@/components/core";

type Asset = {
    name: string
    trips: string
    vehicles: string
    drivers: string
    revenue: string
}

interface AssetCoDashboardProps {
    assets: Asset[]
    [x: string]: any
}

export const AssetCos: React.FC<AssetCoDashboardProps> = ({ assets, className }) => {
    return (
        <div className={cn("flex flex-col px-6 pt-6 pb-9 gap-[3.125rem] rounded-2xl bg-white justify-between", className)}>
            <div className="flex items-start justify-between">
                <div className="grid">
                    <h1 className="text-grey-dark-1 text-xl font-semibold">Asset Co.</h1>
                    <p className="text-grey-dark-2 text-sm">Manage all asset companies on the platform</p>
                </div>
                <Button theme="arrow-cta-1"><span className="hidden lg:flex">View all Asset Co(s)</span></Button>
            </div>
            <div className="flex flex-col justify-end h-full lg:w-full lg:left-auto lg:relative lg:right-auto lg:overflow-x-clip left-0 right-0 overflow-x-scroll scrollbar-hide">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-[#F5FBFD]">
                            <th className="text-grey-dark-1 font-semibold text-xs py-2.5 px-2 text-left">Asset Co</th>
                            <th className="text-grey-dark-1 font-semibold text-xs py-2.5 pr-4 text-right">Total Trips</th>
                            <th className="text-grey-dark-1 font-semibold text-xs py-2.5 pr-4 text-right">Total Vehicles</th>
                            <th className="text-grey-dark-1 font-semibold text-xs py-2.5 pr-4 text-right">Total Drivers</th>
                            <th className="text-grey-dark-1 font-semibold text-xs py-2.5 pr-4 text-right">Total Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            assets.map((item) =>
                                <tr className="group rounded bg-white hover:bg-light-green transition-all ease-out duration-300" key={item.name}>
                                    <td className="pl-1.5 pr-4 lg:pr-0 py-3.5 text-left">
                                        <div className="text-sm text-grey-dark-2 group-hover:text-grey-dark-1 whitespace-nowrap">{item.name}</div>
                                    </td>
                                    <td className="pr-4 py-3.5 text-right">
                                        <div className="text-sm text-grey-dark-2 group-hover:text-grey-dark-1 whitespace-nowrap">{item.trips}</div>
                                    </td>
                                    <td className="pr-4 py-3.5 text-right">
                                        <div className="text-sm text-grey-dark-2 group-hover:text-grey-dark-1 whitespace-nowrap">{item.vehicles}</div>
                                    </td>
                                    <td className="pr-4 py-3.5 text-right">
                                        <div className="text-sm text-grey-dark-2 group-hover:text-grey-dark-1 whitespace-nowrap">{item.drivers}</div>
                                    </td>
                                    <td className="pr-4 py-3.5 text-right">
                                        <div className="text-sm text-grey-dark-2 group-hover:text-grey-dark-1 whitespace-nowrap">{item.revenue}</div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}