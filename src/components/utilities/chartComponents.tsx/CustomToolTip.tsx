import { ObjectType } from "@/types/global.types";
import { TooltipProps } from "recharts";

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: ObjectType[];
  label?: string;
  forCost?: boolean;
}

const CustomTooltip = ({ active, payload, label, forCost }: CustomTooltipProps) => {
  const fullMonthNames: { [key: string]: string } = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };

  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip text-center" style={{ backgroundColor: "#021C2F", padding: "10px 25px", borderRadius: "5px", color: "#fff" }}>
        <p style={{ color: "white" }}>{`${fullMonthNames[label as keyof typeof fullMonthNames]}`}</p>
        {!forCost ? (
          <div className="text-white text-sm font-medium">
            <div className="items-center">
              <span className="font-bold"> {`${payload[0]?.value?.toLocaleString()}`}</span>
            </div>

            {/* <div className="mt-2 flex items-center">
              <span>
                <FaCircle size={10} color="#DF9900" />
              </span>
              <span className="ms-2"> {`Approved  ${payload[1]?.value?.toLocaleString()}`}</span>
            </div> */}
          </div>
        ) : (
          <div className="text-white text-sm font-medium">
            <div className="mt-2 flex items-center">{`${payload[0]?.value?.toLocaleString()}`}</div>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
// import { ObjectType } from "@/types/global.types";
// import { FaCircle } from "react-icons/fa";
// import { TooltipProps } from "recharts";

// interface CustomTooltipProps extends TooltipProps<number, string> {
//   active?: boolean;
//   payload?: ObjectType[];
//   label?: string;
//   forCost?: boolean;
// }

// const CustomTooltip = ({ active, payload, label, forCost }: CustomTooltipProps) => {
//   const fullMonthNames: { [key: string]: string } = {
//     Jan: "January",
//     Feb: "February",
//     Mar: "March",
//     Apr: "April",
//     May: "May",
//     Jun: "June",
//     Jul: "July",
//     Aug: "August",
//     Sep: "September",
//     Oct: "October",
//     Nov: "November",
//     Dec: "December",
//   };

//   if (active && payload && payload.length) {
//     return (
//       <div className="custom-tooltip text-center" style={{ backgroundColor: "#021C2F", padding: "10px 25px", borderRadius: "5px", color: "#fff" }}>
//         <p style={{ color: "#FCEE21" }}>{`${fullMonthNames[label as keyof typeof fullMonthNames]} Trips`}</p>
//         {!forCost ? (
//           <div className="text-white text-sm font-medium">
//             <div className="mt-2 flex items-center">
//               <span>
//                 <FaCircle size={10} color="#55B648" />
//               </span>
//               <span className="ms-2"> {`Completed  ${payload[0]?.value?.toLocaleString()}`}</span>
//             </div>

//             {/* <div className="mt-2 flex items-center">
//               <span>
//                 <FaCircle size={10} color="#DF9900" />
//               </span>
//               <span className="ms-2"> {`Approved  ${payload[1]?.value?.toLocaleString()}`}</span>
//             </div> */}

//             <div className="mt-2 flex items-center">
//               <span>
//                 <FaCircle size={10} color="#DD2418" />
//               </span>
//               <span className="ms-2"> {`Uncompleted  ${payload[1]?.value?.toLocaleString()}`}</span>
//             </div>
//           </div>
//         ) : (
//           <div className="text-white text-sm font-medium">
//             <div className="mt-2 flex items-center">{`${payload[0]?.value?.toLocaleString()}`}</div>
//           </div>
//         )}
//       </div>
//     );
//   }

//   return null;
// };

// export default CustomTooltip;
