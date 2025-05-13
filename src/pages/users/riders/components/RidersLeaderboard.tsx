import FilterOptions from "@/components/utilities/filterComponents/Filter";
import { getFirstDayOfMonth, getFirstDayOfTheYear, getLastDayOfMonth, getLastDayOfTheYear, getTodayDate } from "@/helepers/dateTimeHelper";
import { ReactChangeEventType } from "@/types/global.types";
import { useState } from "react";

const RidersLeaderboard = () => {
  const [dateType, setDateType] = useState("monthly");
  const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  const [endDate, setEndDate] = useState(getLastDayOfMonth());
  const [types, setTypes] = useState("leaderboard-trip");
  const [toggled, setToggled] = useState(false);
  const [typeToggled, setTypeToggled] = useState(false);

  const handleToggle = () => setToggled(!toggled);
  const handleTypeToggle = () => setTypeToggled(!typeToggled);

  console.log(startDate, endDate);

  const handleDateTypeChange = (e: ReactChangeEventType) => {
    const newDateType = e.target.value;
    setDateType(newDateType);

    switch (newDateType) {
      case "daily":
        setStartDate(getTodayDate());
        setEndDate(getTodayDate());
        break;
      case "monthly":
        setStartDate(getFirstDayOfMonth());
        setEndDate(getLastDayOfMonth());
        break;
      case "yearly":
        setStartDate(getFirstDayOfTheYear());
        setEndDate(getLastDayOfTheYear());
        break;
    }
  };

  const handleTypeChange = (e: ReactChangeEventType) => setTypes(e.target.value);

  const dateTypeOption = [
    { value: "daily", label: "Today" },
    { value: "monthly", label: "This Month" },
    { value: "yearly", label: "This Year" },
  ];

  const typesOptions = [
    { value: "leaderboard-trip", label: "By Trips" },
    { value: "leaderboard-amount", label: "By Amount" },
  ];

  const riderLeaderboard = [
    { first_name: "John", last_name: "Doe", total: 150, avatar: null },
    { first_name: "Jane", last_name: "Smith", total: 2750, avatar: null },
    { first_name: "John", last_name: "Doe", total: 150, avatar: null },
    { first_name: "Jane", last_name: "Smith", total: 2750, avatar: null },
    { first_name: "John", last_name: "Doe", total: 150, avatar: null },
  ];

  return (
    <div className="bg-white border rounded-lg shadow-sm p-6 h-[300px] flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col mb-4">
        <div className="flex justify-between items-start w-full">
          <div className="w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">Riders Leaderboard</h2>
              <div className="flex items-center gap-3">
                <FilterOptions toggled={typeToggled} handleToggle={handleTypeToggle} options={typesOptions} selectedOption={types} optionChange={handleTypeChange} name="types-filter" />
                <FilterOptions toggled={toggled} handleToggle={handleToggle} options={dateTypeOption} selectedOption={dateType} optionChange={handleDateTypeChange} name="leaderboardFilter" />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="flex-1 overflow-y-auto">
        {riderLeaderboard.map((item, index) => (
          <div key={index} className="flex justify-between items-center hover:bg-gray-50 rounded-lg py-2 transition-colors">
            <div className="flex items-center">
              <span className="text-xs font-medium w-4">{index + 1}.</span>
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src="/leaderboard/avatar1.svg" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <span className="ml-3 text-sm text-gray-700">
                {item.first_name} {item.last_name}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-700">{types === "leaderboard-trip" ? item.total : types === "leaderboard-amount" ? `₦${item.total.toLocaleString()}` : "N/A"}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RidersLeaderboard;
