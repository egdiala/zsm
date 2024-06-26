import React from "react";
import { cn } from "@/libs/cn";
import { Button } from "@/components/core";

type Asset = {
    name: string
    email: string
    phone: string
}

interface AssetCoHomeProps {
    assets: Asset[]
    [x: string]: any
}

export const AssetCo: React.FC<AssetCoHomeProps> = ({ assets, className }) => {
    return (
        <div className={cn("flex flex-col p-6 gap-[3.125rem] rounded-2xl bg-white justify-between", className)}>
            <div className="flex items-start justify-between">
                <div className="grid">
                    <h1 className="text-grey-dark-1 text-xl font-semibold">Asset Co.</h1>
                    <p className="text-grey-dark-2 text-sm">Manage all asset companies on the platform</p>
                </div>
                <Button theme="arrow-cta-1"><span className="hidden lg:flex">View all Asset Co(s)</span></Button>
            </div>
            <div className="flex flex-col justify-end h-full lg:w-full lg:left-auto lg:relative lg:right-auto lg:overflow-x-clip left-0 right-0 overflow-x-scroll scrollbar-hide">
                <table className="table-auto w-full">
                    <tbody>
                        {
                            assets.map((item) =>
                                <tr className="group rounded bg-white hover:bg-light-green last:border-b-0 border-b-[0.5px] border-b-[#CDDCE0] hover:border-b-light-green transition-all ease-out duration-300" key={item.name}>
                                    <td className="pl-1.5 pr-4 lg:pr-0 py-3.5">
                                        <div className="text-sm text-grey-dark-2 group-hover:text-grey-dark-1 whitespace-nowrap">{item.name}</div>
                                    </td>
                                    <td className="pr-4 lg:pr-0 py-3.5">
                                        <div className="text-sm text-grey-dark-2 group-hover:text-grey-dark-1 whitespace-nowrap">{item.email}</div>
                                    </td>
                                    <td className="pr-4 py-3.5 text-right">
                                        <div className="text-sm text-grey-dark-2 group-hover:text-grey-dark-1 whitespace-nowrap">{item.phone}</div>
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