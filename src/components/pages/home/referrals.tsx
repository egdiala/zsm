import React, { Fragment } from "react";
import { cn } from "@/libs/cn";
import { BarChart, Button } from "@/components/core";

interface ReferralsHomeProps {
    [x: string]: any
}

export const Referrals: React.FC<ReferralsHomeProps> = ({ className }) => {
    const referrals = [
        { label: "total", amount: "7,733", color: "bg-green" },
        { label: "confirmed", amount: "3,462", color: "bg-blue-2" },
        { label: "pending", amount: "6,887", color: "bg-semantics-amber" },
    ]
    const data = [
        {
            "label": "Total",
            "total": 16,
            "totalColor": "hsla(93, 92%, 34%, 1)",
        },
        {
            "label": "Confirmed",
            "confirmed": 5,
            "confirmedColor": "hsla(205, 85%, 74%, 1)",
        },
        {
            "label": "Pending",
            "pending": 11,
            "pendingColor": "hsla(35, 99%, 50%, 1)",
        },
    ]
    return (
        <div className={cn("flex flex-col p-6 gap-3.5 h-full rounded-2xl bg-white", className)}>
            <div className="grid">
                <h1 className="text-grey-dark-1 text-xl font-semibold">Referrals</h1>
                <p className="text-grey-dark-3 text-sm">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="flex flex-col p-3 gap-4 w-fit">
                {
                    referrals.map((referral) =>
                        <Fragment>
                        <div key={referral.label} className="grid gap-2">
                            <div className="flex items-center gap-1">
                                <div className={cn("size-2 rounded", referral.color)} />
                                <span className="text-grey-dark-2 text-sm capitalize">{referral.label} Referrals</span>
                            </div>
                            <h4 className="text-2xl text-grey-dark-1">{referral.amount}</h4>
                        </div>
                        <hr className="last:hidden" />
                        </Fragment>
                    )
                }
            </div>
            <BarChart
                className="w-full h-80 flex justify-center"
                keys={[
                    "total",
                    "confirmed",
                    "pending",
                ]}
                colors={["hsla(93, 92%, 34%, 1)", "hsla(205, 85%, 74%, 1)", "hsla(35, 99%, 50%, 1)"]}
                indexBy="label"
                margin={{ top: 25, right: 20, bottom: 25, left: 20 }}
                padding={0.85}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 0,
                    tickRotation: 0,
                    legendOffset: 32,
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendPosition: "middle",
                    legendOffset: 40,
                    truncateTickAt: 0
                }}
                enableLabel={false}
                labelSkipWidth={7}
                labelSkipHeight={12}
                legends={[]}
                role="application"
                data={data}
            />
            <Button theme="arrow-cta-1">View all referrals</Button>
        </div>
    )
}