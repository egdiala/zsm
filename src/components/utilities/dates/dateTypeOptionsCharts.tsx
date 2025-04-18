import MonthsCalendar from "@/components/utilities/filterComponents/MonthsCalender";
import { Dispatch, SetStateAction } from "react";
import YearsCalendar from "@/components/utilities/filterComponents/YearsCalender";
import YearsRangeCalender from "@/components/utilities/filterComponents/YearsRangeCalender";

interface IDateTypeOption {
  handleToggle: () => void;
  startDate: string;
  endDate: string;
  setStartDate: Dispatch<SetStateAction<string>>;
  setEndDate: Dispatch<SetStateAction<string>>;
}
export const dateTypeOptionCharts = ({ handleToggle, startDate, endDate, setStartDate, setEndDate }: IDateTypeOption) => [
  {
    value: "daily",
    label: "Daily",
    subOptionComponent: (
      <MonthsCalendar
        handleToggle={handleToggle}
        month={startDate}
        setMonth={(month: string) => {
          setStartDate(month);
          setEndDate(month);
        }}
      />
    ),
  },
  {
    value: "monthly",
    label: "Monthly",
    subOptionComponent: (
      <YearsCalendar
        handleToggle={handleToggle}
        month={startDate}
        setYear={(year: string) => {
          setStartDate(year);
          setEndDate(year);
        }}
      />
    ),
  },
  {
    value: "yearly",
    label: "Yearly",
    subOptionComponent: (
      <YearsRangeCalender
        handleToggle={handleToggle}
        startYear={startDate}
        endYear={endDate}
        setYears={(start: string, end: string) => {
          setStartDate(start);
          setEndDate(end);
        }}
      />
    ),
  },
];
