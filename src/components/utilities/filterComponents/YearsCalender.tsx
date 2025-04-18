import { years } from "@/helepers/stringsHelper";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  month: string;
  setYear: any;
  setYearEnd?: Dispatch<SetStateAction<string>>;
  handleToggle: any;
};

const YearsCalendar = (props: Props) => {
  const { month, setYear, handleToggle, setYearEnd } = props;
  const [selectedMonth, setSelectedMonth] = useState(month);

  return (
    <div className="p-2">
      <div className="font-bold text-gray-700 mb-2">Select year</div>
      <div className="grid grid-cols-3 gap-4 mt-3 font-normal">
        {years.map((item: any) => (
          <div key={item.label} className="mb-4 whitespace-nowrap cursor-pointer" onClick={() => setSelectedMonth(item.value)}>
            <span className={selectedMonth.split("-")[0] === item.value.split("-")[0] ? "bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent font-bold" : "text-gray-600"}>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 w-full flex justify-end">
        <button
          onClick={() => {
            setYear(`${selectedMonth}-01-01`);
            setYearEnd?.(`${selectedMonth}-12-31`);
            handleToggle();
          }}
          className="bg-gradient-to-r from-blue-400 to-teal-400 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default YearsCalendar;
