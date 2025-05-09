import CustomSelect from "@/components/utilities/inputComponents/CustomSelect";
import { years } from "@/helepers/stringsHelper";
import { useState } from "react";

type Props = {
  startYear: string;
  endYear: string;
  // setYears: (start: any, end: any) => void;
  setYears: any;
  handleToggle: any;
};

const YearsRangeCalender = (props: Props) => {
  const { setYears, startYear, endYear, handleToggle } = props;
  const [selectedStartYear, setSelectedStartYear] = useState(startYear);
  const [selectedEndYear, setSelectedEndYear] = useState(endYear);

  return (
    <div>
      <div className="fw-bold">Select year range</div>
      <div className="p-2 mt-2 font-normal">
        <CustomSelect label="" value={selectedStartYear} name="selectedStartYear" onChange={(e) => setSelectedStartYear(e.target.value)} options={[{ value: "", label: "YYYY" }, ...years]} required />
        <div className="mb-2 text-center">To</div>
        <CustomSelect label="" value={selectedEndYear} name="selectedEndYear" onChange={(e) => setSelectedEndYear(e.target.value)} options={[{ value: "", label: "YYYY" }, ...years]} required />
        <div style={{ width: 100 }}>
          {/* <Button
            text="Apply"
            className="btn-sm py-1"
            onClick={() => {
              setYears(selectedStartYear + "-01", selectedEndYear + "-12");
              handleToggle();
            }}
          /> */}
          <button
            onClick={() => {
              setYears(selectedStartYear + "-01", selectedEndYear + "-12");
              handleToggle();
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default YearsRangeCalender;
