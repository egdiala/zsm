import { useState, useEffect, useRef } from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { getDateLabelFromDates } from "@/helepers/stringsHelper";

const FilterOptions = ({ toggled, handleToggle, selectedOption, optionChange, options, name, toggleComponent, topComponent, bottomComponent, width, direction, startDate, endDate }: any) => {
  const [tempOption, setTempOption] = useState(selectedOption);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Sync external toggle with Headless UI
  useEffect(() => {
    if (toggled && buttonRef.current) {
      buttonRef.current.click(); // Open Menu
    }
  }, [toggled]);

  const handleClick = () => {
    optionChange(tempOption);
    handleToggle(); // Close Menu from parent state
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => {
        console.log(open);
        return (
          <>
            <MenuButton ref={buttonRef} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none">
              {toggleComponent ? (
                <div onClick={handleToggle}>{toggleComponent}</div>
              ) : (
                <div className="flex items-center text-green">
                  {options?.find((item: any) => item?.value === selectedOption)?.label.slice(0, 13)}
                  {startDate !== undefined && getDateLabelFromDates(startDate, endDate, selectedOption)}
                  <svg className="ml-1 h-2.5 w-2.5" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.3002 0.5L4.58353 2.78772C4.2627 3.05789 3.7377 3.05789 3.41686 2.78772L0.700195 0.5" stroke="#808D97" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </MenuButton>

            <MenuItems
              className={`absolute ${
                direction === "up" ? "bottom-full mb-2" : "mt-2"
              } right-0 w-[${width ? width : "200px"}] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50`}
            >
              <div className="px-4 py-2">
                <div className="mb-3">
                  <small className="font-bold text-gray-700">Show for</small>
                </div>

                {topComponent && topComponent}

                <div className="space-y-2">
                  {options?.map((item: any) => (
                    <div key={item.value} className="relative">
                      <label className="flex items-center space-x-2 py-1">
                        <input type="radio" name={name} value={item.value} checked={selectedOption === item.value} onChange={(e) => setTempOption(e.target.value)} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <span className={`block text-sm ${selectedOption === item.value ? "bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent" : "text-gray-700"}`}>{item.label}</span>
                      </label>

                      {item?.subOptionComponent && selectedOption === item.value && <div className="fixed top-5 left-full ml-2 w-56 rounded-lg bg-white p-3 shadow-xl">{item.subOptionComponent}</div>}
                    </div>
                  ))}
                </div>

                {bottomComponent && bottomComponent}

                <div className="mt-4 w-full">
                  <button onClick={handleClick} className="w-full rounded-md bg-gradient-to-r from-blue-400 to-teal-400 px-4 py-1.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]">
                    APPLY
                  </button>
                </div>
              </div>
            </MenuItems>
          </>
        );
      }}
    </Menu>
  );
};

export default FilterOptions;

// import { useState } from "react";
// import { Menu, MenuButton, MenuItems } from "@headlessui/react";
// import { getDateLabelFromDates } from "../../Pages/others/users/helpers/strings";

// const FilterOptions = ({ toggled, handleToggle, selectedOption, optionChange, options, name, toggleComponent, topComponent, bottomComponent, width, direction, startDate, endDate }: any) => {
//   const [tempOption, setTempOption] = useState(selectedOption);

//   const handleClick = () => {
//     optionChange(tempOption);
//     handleToggle();
//   };

//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       {({ open }) => (
//         <>
//           <MenuButton className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none">
//             {toggleComponent ? (
//               <div onClick={handleToggle}>{toggleComponent}</div>
//             ) : (
//               <div className="flex items-center">
//                 {options?.find((item: any) => item?.value === selectedOption)?.label.slice(0, 13)}
//                 {startDate !== undefined && getDateLabelFromDates(startDate, endDate, selectedOption)}
//                 <svg className="ml-1 h-2.5 w-2.5" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M7.3002 0.5L4.58353 2.78772C4.2627 3.05789 3.7377 3.05789 3.41686 2.78772L0.700195 0.5" stroke="#04A7A7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </div>
//             )}
//           </MenuButton>

//           <MenuItems
//             className={`absolute ${
//               direction === "up" ? "bottom-full mb-2" : "mt-2"
//             } right-0 w-[${width ? width : "200px"}] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50`}
//           >
//             <div className="px-4 py-2">
//               <div className="mb-3">
//                 <small className="font-bold text-gray-700">Show for</small>
//               </div>

//               {topComponent && topComponent}

//               <div className="space-y-2">
//                 {options?.map((item: any) => (
//                   <div key={item.value} className="relative">
//                     <label className="flex items-center space-x-2 py-1">
//                       <input type="radio" name={name} value={item.value} checked={selectedOption === item.value} onChange={(e) => setTempOption(e.target.value)} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
//                       <span className={`block text-sm ${selectedOption === item.value ? "bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent" : "text-gray-700"}`}>{item.label}</span>
//                     </label>

//                     {item?.subOptionComponent && selectedOption === item.value && <div className="fixed top-5 left-full ml-2 w-56 rounded-lg bg-white p-3 shadow-xl">{item.subOptionComponent}</div>}
//                   </div>
//                 ))}
//               </div>

//               {bottomComponent && bottomComponent}

//               <div className="mt-4 w-full">
//                 <button onClick={handleClick} className="w-full rounded-md bg-gradient-to-r from-blue-400 to-teal-400 px-4 py-1.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]">
//                   APPLY
//                 </button>
//               </div>
//             </div>
//           </MenuItems>
//         </>
//       )}
//     </Menu>
//   );
// };

// export default FilterOptions;
