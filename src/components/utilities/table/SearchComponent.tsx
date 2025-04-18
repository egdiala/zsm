import React, { Dispatch, SetStateAction, useState } from "react";

type Props = {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
};

// let debounceTimer: NodeJS.Timeout;
let debounceTimer: any;

const SearchComponent = ({ keyword, setKeyword }: Props) => {
  const [inputValue, setInputValue] = useState(keyword);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    debounceSearch(newValue);
  };

  const debounceSearch = (value: string) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      setKeyword(value);
    }, 1000);
  };

  return (
    <div className="flex w-full rounded-md py-2 bg-[#F5FBFD] ms-3">
      <div className="flex items-center border-0 bg-transparent pl-3">
        <img alt="icon" src="/svgs/search.svg" className="h-5 w-5" />
      </div>
      <input type="text" value={inputValue} placeholder="Search" onChange={handleInputChange} className="w-full border-0 bg-transparent px-3 py-1 text-base focus:outline-none placeholder-[#354959] border-none" />
    </div>
  );
};

export default SearchComponent;
