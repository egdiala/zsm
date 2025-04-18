import React, { Fragment, useMemo } from "react";
import { cn } from "@/libs/cn";
import { Button } from "@/components/core";

interface PaymentsHomeProps {
  [x: string]: any;
}

export const Payments: React.FC<PaymentsHomeProps> = ({ className }) => {
  const data = [
    {
      label: "Total",
      amount: 130349,
      color: "bg-blue-1",
    },
    {
      label: "Successful",
      amount: 73462,
      color: "bg-blue-2",
    },
    {
      label: "Unsuccessful",
      amount: 56887,
      color: "bg-semantics-amber",
    },
  ];

  const circleSizes = useMemo(() => {
    let sizes: number[] = [];
    const otherAmounts = data.filter((item) => item.label !== "Total").map((item) => item.amount);
    otherAmounts.forEach((amount) => {
      sizes.push((amount / data[0].amount) * 100);
    });
    return sizes;
  }, []);
  return (
    <div className={cn("flex flex-col justify-between p-6 gap-3.5 rounded-2xl bg-white", className)}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col p-3 gap-4 w-fit">
          {data.map((referral) => (
            <Fragment>
              <div key={referral.label} className="grid gap-2">
                <div className="flex items-center gap-1">
                  <div className={cn("size-2 rounded", referral.color)} />
                  <span className="text-grey-dark-2 text-sm capitalize">{referral.label} payment</span>
                </div>
                <h4 className="text-2xl text-grey-dark-1">₦{referral.amount}</h4>
              </div>
              <hr className="last:hidden" />
            </Fragment>
          ))}
        </div>
        <Button theme="arrow-cta-1">View</Button>
      </div>
      <div className="relative w-full h-full max-w-64 max-h-64 bg-blue-1 rounded-full mx-auto">
        {circleSizes.map((item, idx) => (
          <div className={cn("rounded-full absolute bottom-0 left-0 right-0 mx-auto", data[idx + 1].color)} style={{ width: `${item}%`, height: `${item}%` }} />
        ))}
      </div>
    </div>
  );
};
