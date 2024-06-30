import React from "react";
import { cn } from "@/libs/cn";
import { Button, LineChart } from "@/components/core";

interface DashboardHomeProps {
    [x: string]: any
}

export const Dashboard: React.FC<DashboardHomeProps> = ({ className }) => {
    const data = [
        {
            "id": "norway",
            "color": "hsla(93, 100%, 29%, 1)",
            "data": [
            {
                "x": "Jan",
                "y": 17
            },
            {
                "x": "Feb",
                "y": 139
            },
            {
                "x": "Mar",
                "y": 151
            },
            {
                "x": "Apr",
                "y": 227
            },
            {
                "x": "May",
                "y": 150
            },
            {
                "x": "Jun",
                "y": 157
            },
            {
                "x": "Jul",
                "y": 242
            },
            {
                "x": "Aug",
                "y": 69
            },
            {
                "x": "Sep",
                "y": 243
            },
            {
                "x": "Oct",
                "y": 266
            },
            {
                "x": "Nov",
                "y": 122
            },
            {
                "x": "Dec",
                "y": 299
            }
            ]
        }
    ]
    return (
        <div className={cn("flex flex-col p-6 gap-[3.125rem] rounded-2xl bg-white", className)}>
            <div className="flex items-start justify-between">
                <div className="grid">
                    <h1 className="text-grey-dark-1 text-xl font-semibold">Dashboard</h1>
                    <p className="text-grey-dark-2 text-sm">View snapshot data on all asset companies</p>
                </div>
                <Button theme="arrow-cta-1"><span className="hidden lg:flex">View Dashboard</span></Button>
            </div>
            <div className="w-full h-48 md:h-full">
                <LineChart
                    data={data}
                    margin={{ top: 25, right: 10, bottom: 25, left: 10 }}
                    xScale={{ type: "point" }}
                    colors={"hsla(93, 100%, 29%, 1)"}
                    yScale={{
                        type: "linear",
                        min: "auto",
                        max: "auto",
                        stacked: true,
                        reverse: false
                    }}
                    tooltip={({ point }) => {
                        return (
                            <div className="relative bg-grey-dark-1 p-2 flex flex-col gap-1.5 rounded text-white">
                                <div className="flex items-center gap-1">
                                    <div className="bg-green size-1.5 rounded" />
                                    <span className="font-bold text-xs w-16">Total</span>
                                    <span className="text-xs w-16 text-right">{(point.x + point.y).toFixed()}</span> 
                                </div>
                                <div className="flex items-center justify-end gap-1">
                                    <span className="font-bold text-xs w-16">Resolved</span>
                                    <span className="text-xs w-16 text-right">{(point.x).toFixed()}</span> 
                                </div>
                                <div className="flex items-center justify-end gap-1">
                                    <span className="font-bold text-xs w-16">Unresolved</span>
                                    <span className="text-xs w-16 text-right">{(point.y).toFixed()}</span> 
                                </div>
                                <div className="size-3 absolute inset-x-full left-[46.3%] -bottom-1 rotate-45 flex items-center justify-center bg-grey-dark-1" />
                            </div>
                        )
                    }}
                    yFormat=" >-.2f"
                    curve="natural"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 0,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "",
                        legendOffset: 36,
                        legendPosition: "middle",
                        truncateTickAt: 0
                    }}
                    axisLeft={null}
                    enableGridX={false}
                    enableGridY={false}
                    pointSize={11}
                    pointColor={{ from: "color", modifiers: [] }}
                    pointBorderWidth={2}
                    pointBorderColor={"white"}
                    pointLabel="data.yFormatted"
                    crosshairType="bottom"
                    enableTouchCrosshair={true}
                    useMesh={true}
                    pointLabelYOffset={-12}
                    legends={[]}
                />
            </div>
        </div>
    )
}