import FilterOptions from "@/components/utilities/filterComponents/Filter";
import { getFirstDayOfMonth, getFirstDayOfTheYear, getLastDayOfMonth, getLastDayOfTheYear, getTodayDate } from "@/helepers/dateTimeHelper";
import { ObjectType, ReactChangeEventType } from "@/types/global.types";
import { useState } from "react";

const RidersRating = () => {
  //   const { getUserStatsToast } = useUsersApiService();
  const [dateType, setDateType] = useState("monthly");
  const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  const [endDate, setEndDate] = useState(getLastDayOfMonth());
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => setToggled(!toggled);

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

  // Actual query (commented out)
  // const { data: ridersRating } = useQuery(
  //   [queryKeys.ridersRatings, dateType, startDate, endDate],
  //   () => getUserStatsToast({
  //     user_type: "rider",
  //     request_type: "rating",
  //     date_type: dateType,
  //     start_date: startDate,
  //     end_date: endDate
  //   }),
  //   {
  //     select: (data) => data?.data,
  //   }
  // );

  // Mock data structure matching API response
  const ridersRating = [
    { avg: 5, total: 150 },
    { avg: 4, total: 100 },
    { avg: 5, total: 200 },
    { avg: 3, total: 75 },
    { avg: 2, total: 50 },
    { avg: 1, total: 25 },
    { avg: 4, total: 80 },
  ];

  const totalRating = ridersRating?.reduce((partialSum: number, a: ObjectType) => partialSum + a?.total, 0) || 0;
  const getProgress = (value: number) => (((value / totalRating || 0) * 100).toString() || "0") + "%";
  const getTotalForAnAverage = (value: number) => ridersRating?.filter((item: ObjectType) => item.avg === value).reduce((sum: number, item: ObjectType) => sum + item.total, 0) || 0;

  const dateTypeOption = [
    { value: "daily", label: "Today" },
    { value: "monthly", label: "This Month" },
    { value: "yearly", label: "This Year" },
  ];

  const ratingsStat = [5, 4, 3, 2, 1].map((star) => ({
    label: `${star} stars`,
    progress: getProgress(getTotalForAnAverage(star)),
    figure: getTotalForAnAverage(star),
  }));

  return (
    <div className="border rounded-lg shadow-sm p-6 h-[300px]">
      <div className="mb-4">
        <div className="flex justify-between items-start w-full">
          <div className="w-full flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold text-gray-800 ">Riders Overall Ratings</h2>
            <div className="">
              <FilterOptions toggled={toggled} handleToggle={handleToggle} options={dateTypeOption} selectedOption={dateType} optionChange={handleDateTypeChange} name="rating-Filter" />
            </div>
          </div>

          {/* ExportComponent (commented out) */}
          {/* <ExportComponent /> */}
        </div>
      </div>

      <div className="space-y-6">
        {ratingsStat.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className="text-sm text-gray-600 w-20">{item.label}</span>
            <div className="flex-1 h-2 bg-[#F2F9FE] rounded-full overflow-hidden">
              <div className="h-full bg-[#058CEC] rounded-full transition-all duration-300" style={{ width: item.progress }} />
            </div>
            <span className="text-sm text-gray-600 w-12">{item.figure}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RidersRating;
