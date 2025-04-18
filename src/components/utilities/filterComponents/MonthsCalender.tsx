import { months } from "@/helepers/stringsHelper";
import { useState } from "react";

type Props = {
  month: string;
  // setMonth: Dispatch<SetStateAction<string>>;
  setMonth: any;
  handleToggle: any;
};

const MonthsCalendar = (props: Props) => {
  const { month, setMonth, handleToggle } = props;
  const [selectedMonth, setSelectedMonth] = useState(month);

  return (
    <div className="p-2">
      <div className="font-bold text-gray-700 mb-2">Select month</div>
      <div className="grid grid-cols-6 gap-4 mt-3 font-normal">
        {months.map((item) => (
          <div key={item.label} className="mb-4 cursor-pointer" onClick={() => setSelectedMonth(item.value)}>
            <span className={selectedMonth === item.value ? "bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent font-bold" : "text-gray-600"}>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 w-full flex justify-end">
        <button
          onClick={() => {
            setMonth(selectedMonth);
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

export default MonthsCalendar;
