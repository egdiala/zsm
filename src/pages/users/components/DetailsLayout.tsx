import { cn } from "@/libs/cn";
import * as React from "react";

interface IDetailsLayoutProps {
  gridCols: number;
  items: { label: React.ReactNode; value: React.ReactNode }[];
  itemsCols: number;
}

// Tailwind only allows known class names, so map numeric props to class strings
const gridColsClass = (cols: number) =>
  ({
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
  })[cols] || "grid-cols-1";

const colSpanClass = (cols: number) =>
  ({
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    5: "lg:col-span-5",
    6: "lg:col-span-6",
  })[cols] || "col-span-1";

const DetailsLayout: React.FunctionComponent<IDetailsLayoutProps> = ({ gridCols, items, itemsCols }) => {
  return (
    <div className={cn("grid gap-3 w-full", gridColsClass(gridCols))}>
      {items?.map((item, index) => (
        <div key={index} className={cn("mt-5 col-span-3", colSpanClass(itemsCols))}>
          <p className="text-grey-dark-2 text-sm">{item.label}</p>
          <p className="font-medium mt-2">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailsLayout;
