import { LineChart } from "@/components/core";
import { dateTypeOptionCharts } from "@/components/utilities/dates/dateTypeOptionsCharts";
import FilterOptions from "@/components/utilities/filterComponents/Filter";
import { getCurrentMonthAndYear } from "@/helepers/dateTimeHelper";
import { cn } from "@/libs/cn";
import { ReactChangeEventType } from "@/types/global.types";
import React, { useState } from "react";

interface RevenueDashboardProps {
  [x: string]: any;
}

const RegistrationChart: React.FC<RevenueDashboardProps> = ({ className }) => {
  const [startDate, setStartDate] = useState(getCurrentMonthAndYear());
  const [endDate, setEndDate] = useState(getCurrentMonthAndYear());
  const [dateType, setDateType] = useState("monthly");
  const [toggled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled(!toggled);
  };
  const handleDateTypeChange = (e: ReactChangeEventType) => {
    setStartDate(getCurrentMonthAndYear());
    setEndDate(getCurrentMonthAndYear());
    setDateType(e.target.value);
  };

  const data = [
    {
      id: "norway",
      color: "hsla(93, 100%, 29%, 1)",
      data: [
        {
          x: "Jan",
          y: 17,
        },
        {
          x: "Feb",
          y: 139,
        },
        {
          x: "Mar",
          y: 151,
        },
        {
          x: "Apr",
          y: 227,
        },
        {
          x: "May",
          y: 150,
        },
        {
          x: "Jun",
          y: 157,
        },
        {
          x: "Jul",
          y: 242,
        },
        {
          x: "Aug",
          y: 69,
        },
        {
          x: "Sep",
          y: 243,
        },
        {
          x: "Oct",
          y: 266,
        },
        {
          x: "Nov",
          y: 122,
        },
        {
          x: "Dec",
          y: 299,
        },
      ],
    },
  ];
  return (
    <div className={cn("flex flex-col p-5 gap-[3.125rem] rounded-xl bg-white", className)}>
      <div className="flex items-start justify-between">
        <h5 className="font-semibold">Riders Registration</h5>
        <div>
          <FilterOptions
            toggled={toggled}
            handleToggle={handleToggle}
            options={dateTypeOptionCharts({ handleToggle, startDate, endDate, setStartDate, setEndDate })}
            selectedOption={dateType}
            optionChange={handleDateTypeChange}
            name="registration-chart"
            startDate={startDate}
            endDate={endDate}
          />{" "}
        </div>
      </div>
      <LineChart
        data={data}
        className="w-full h-48 md:h-full md:min-h-60"
        margin={{ top: 25, right: 10, bottom: 25, left: 10 }}
        xScale={{ type: "point" }}
        colors={"hsla(93, 100%, 29%, 1)"}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        tooltip={({ point }) => {
          return (
            <div className="relative bg-grey-dark-1 p-2 px-5 min-w-[100px] flex flex-col gap-1.5 rounded text-white w-30">
              <div className="flex justify-center">{point.data.x as string}</div>
              <span className="text-center font-semibold">{(point.data.y as number).toFixed()}</span>
              <div className="size-3 absolute inset-x-full left-[46.3%] -bottom-1 rotate-45 flex items-center justify-center bg-grey-dark-1" />
            </div>
          );
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
          truncateTickAt: 0,
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
  );
};

export default RegistrationChart;

// // import CustomCard from "@/components/CustomCard";
// // import FilterButton from "@/components/FilterButton";
// import Shimmer from "@/components/utilities/Shimmer";
// import CustomTick from "@/components/utilities/chartComponents.tsx/CustomTick";
// import CustomTooltip from "@/components/utilities/chartComponents.tsx/CustomToolTip";
// // import { QueryKeys } from "@/services/Keys";
// // import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
// import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// const RegistrationChart = () => {
//   const [currentHoverIndex, setCurrentHoverIndex] = useState<number | null>(null);
//   // const [startDate, setStartDate] = useState(getFirstDayOfTheYear());
//   // const [endDate, setEndDate] = useState(getLastDayOfTheYear());
//   const [isFetching] = useState(false);
//   // const [filterState, setFilterState] = useState({
//   //   startDate,
//   //   endDate,
//   // });

//   // const onApply = () => {
//   //   setFilterState({ startDate, endDate });
//   // };

//   // const { getTripsToast } = useTripsService();

//   // const { data: tripsMonthly, isFetching } = useQuery({
//   //   queryFn: () =>
//   //     getTripsToast({
//   //       start_date: startDate,
//   //       end_date: endDate,
//   //       component: "count-monthly",
//   //     }),
//   //   queryKey: [QueryKeys.GET_TRIPS_MONTHLY, filterState],
//   //   select: (res) => res?.data,
//   // });
//   //   const { data: tripsCount } = useQuery({
//   //     queryFn: () =>
//   //       getTripsToast({
//   //         start_date: startDate,
//   //         end_date: endDate,
//   //         component: "count",
//   //       }),
//   //     queryKey: [QueryKeys.GET_TRIPS_COUNT, filterState],
//   //     select: (res) => res?.data?.total || 0,
//   //   });

//   const handleMouseMove = (state: any) => {
//     if (state.isTooltipActive) {
//       setCurrentHoverIndex(state.activeTooltipIndex);
//     } else {
//       setCurrentHoverIndex(null);
//     }
//   };

//   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//   const getChartData = (index: number) => {
//     console.log(index);
//     // const monthlyData = tripsMonthly?.find((item: ObjectType) => item?.month === index + 1);
//     // return { name: months[index], fulfilled: monthlyData?.total_fulfill || 0, approved: "_", unfulfilled: monthlyData?.total_unfulfilled || 0 };
//     // months.map(() => ({
//     //   registration: 20,
//     // }));
//     return { name: months[index], registration: 30 + index * 5 };
//   };

//   const data = months.map((_, index) => getChartData(index));

//   return isFetching ? (
//     <Shimmer className="h-full min-h-48" baseColor={"white"} />
//   ) : (
//     <div className="px-5 py-4 rounded-md h-full border ">
//       <div className="flex justify-between items-start">
//         <div className="py-3 px-4 bg-dept-bg rounded-md">
//           <div className="text-xs text-grey-brand">Total Trip Request</div>
//           {/* <div className="text-xl">{tripsCount?.toLocaleString()}</div> */}
//           {/* <div className="text-xl">{300}</div> */}
//         </div>
//         <div>{/* <FilterButton justStartAndEndDate mode2 startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} /> */}</div>
//       </div>
//       <ResponsiveContainer width="105%" height={300}>
//         <LineChart onMouseMove={handleMouseMove} height={300} data={data} className="w-full -ms-12">
//           {/* <CartesianGrid strokeDasharray="3 3" /> */}
//           <XAxis axisLine={false} tickLine={false} dataKey="name" className="text-sm text-gray-500" tick={<CustomTick currentHoverIndex={currentHoverIndex} />} />
//           <YAxis axisLine={false} tick={false} />
//           <Tooltip content={<CustomTooltip />} />
//           <Line type="monotone" dataKey="registration" stroke="#4EA507" strokeWidth={3} dot={false} />
//           {/* <Line type="monotone" dataKey="approved" stroke="#DF9900" dot={false} /> */}
//           {/* <Line type="monotone" dataKey="unfulfilled" stroke="#DD2418" dot={false} /> */}
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default RegistrationChart;
