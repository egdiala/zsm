import { cn } from "@/libs/cn";
import { useState } from "react";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

interface ITableBase {
  itemsCount: number;
  currentPage: number;
  // eslint-disable-next-line no-unused-vars
  paginate: (pageNumber: number) => void;
  overideItemPerPage?: number | "";
}

const TableBase = ({ itemsCount, currentPage, paginate, overideItemPerPage }: ITableBase) => {
  // let debounceTimer: NodeJS.Timeout | number;
  let debounceTimer: any;

  const maxPageNo = Math.ceil(itemsCount / (overideItemPerPage || 50));

  const [inputValue, setInputValue] = useState(currentPage);
  const handleInputChange = (event: any) => {
    const newValue = event.target.value;
    if (newValue <= maxPageNo) {
      setInputValue(newValue);
      debounceSearch(newValue);
    }
  };

  const debounceSearch = (value: any) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      paginate(value);
    }, 3000);
  };

  return (
    <div className="flex justify-between mt-10 text-sm">
      <div className="text-grey-dark-3">
        Showing page{" "}
        <span className="text-grey-dark-1">
          {currentPage} of {maxPageNo}
        </span>
      </div>
      <div className="text-center ">
        <div className="flex items-center">
          <div
            className={cn("h-8 w-8 rounded-md bg-white border flex items-center justify-center cursor-pointer hover:bg-hover-bg", {
              "bg-green text-white": currentPage === maxPageNo && maxPageNo !== 1,
            })}
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
          >
            <PiCaretLeft />
          </div>
          <div className="w-10 h-8 mx-2">
            <input
              id="page"
              name="page"
              type="number"
              min={1}
              max={maxPageNo}
              className="shadow-sm page-input text-center font-bold h-full border border-input-border bg-input-bg rounded-md w-full text-gray-700 mb-1 text-sm focus:outline-none focus:shadow-outline page-input [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div
            className={cn("h-8 w-8 rounded-md bg-white border bg-input-bg flex items-center justify-center cursor-pointer hover:bg-hover-bg", {
              "bg-green text-white": currentPage === 1,
            })}
            onClick={() => currentPage < maxPageNo && paginate(currentPage + 1)}
          >
            <PiCaretRight color="white" />
          </div>
        </div>
        {/* <div className="mt-1 text-xs text-grey-brand">Click to Edit</div> */}
      </div>
    </div>
  );
};

export default TableBase;
