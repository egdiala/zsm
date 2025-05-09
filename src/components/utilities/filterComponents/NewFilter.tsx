import { Menu, MenuButton } from "@headlessui/react";
import { formatByDateType } from "@/helepers/dateTimeHelper";
import { ObjectType } from "@/types/global.types";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const NewFilter = ({ toggled, handleToggle, options, toggleComponent, width, direction, startDate, endDate, setStartDate, setEndDate, onApply }: ObjectType) => {
  const [shown, setShown] = useState("");

  return (
    <Menu as="div" className="relative inline-block text-left">
      <>
        <MenuButton className="inline-flex items-center text-sm text-gray-500 bg-white  rounded-md px-3 py-1.5 hover:bg-gray-50 focus:outline-none" onClick={handleToggle}>
          {!options && startDate && endDate && (
            <div className="mr-2">
              {formatByDateType(startDate, "daily")}
              <span className="font-semibold mx-1">-</span>
              {formatByDateType(endDate, "daily")}
            </div>
          )}
          {toggleComponent || <IoIosArrowDown className="ml-1 h-4 w-4" aria-hidden="true" />}
        </MenuButton>

        {toggled && (
          <MenuButton
            // static // prevents Headless UI from auto-controlling open state
            className={`absolute ${direction === "up" ? "bottom-full mb-2" : "mt-2"} right-0 z-50 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            style={{ width: width || 300 }}
          >
            <div className="p-4">
              <div className="mb-3">
                <small className="font-bold text-gray-700">Show for</small>
              </div>

              {(startDate !== undefined || endDate !== undefined) && (
                <div className="px-2">
                  <div className="text-gray-500 text-sm">Date Range</div>
                  <div className="flex gap-2 mt-2 mb-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                      <input type="date" className="w-full p-1 border rounded-md text-sm" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                      <input type="date" className="w-full p-1 border rounded-md text-sm" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                  </div>
                </div>
              )}

              {options?.map((item: ObjectType, index: number) => (
                <div key={index} className="py-3 border-b border-gray-100">
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => setShown(shown === item.title ? "" : item.title)}>
                    <div className="text-gray-500">{item.title}</div>
                    <IoIosArrowDown className="text-gray-400 h-4 w-4" />
                  </div>

                  <div className={`space-y-2 mt-2 ${shown === item.title ? "block" : "hidden"}`}>
                    {item.options.map((option: ObjectType) => (
                      <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name={item.name} value={option.value} checked={item.currentValue === option.value} onChange={(e) => item.onChange(e.target.value)} className="form-radio h-4 w-4 text-blue-600" />
                        <span className={`text-sm ${item.currentValue === option.value ? "bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent" : "text-gray-700"}`}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex gap-2 mt-4">
                <button onClick={onApply} className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-md text-sm hover:opacity-90 transition-opacity">
                  Apply
                </button>

                {(startDate || endDate) && (
                  <button
                    onClick={() => {
                      setStartDate("");
                      setEndDate("");
                    }}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 transition-colors"
                  >
                    Clear Dates
                  </button>
                )}
              </div>
            </div>
          </MenuButton>
        )}
      </>
    </Menu>
  );
};

export default NewFilter;
