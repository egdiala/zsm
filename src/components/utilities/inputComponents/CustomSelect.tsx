import { Label, Select } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import React from "react";

interface ICustomSelectProps {
  options: {
    value: string;
    label: string;
  }[];
  label?: string;
  id?: string;
  name?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>; // Update type here
  required?: boolean;
}

const CustomSelect: React.FC<ICustomSelectProps> = ({ options, id, name, value, label, required, onChange }) => {
  return (
    <div className="">
      {label && (
        <Label className="text-xs font-medium text-dark-brand" htmlFor={id}>
          {label}
          {required && <sup className="compulsory-field-indicator">*</sup>}
        </Label>
      )}
      <div className="relative">
        <Select id={id} name={name} className={clsx("select-input-styles", "select-input-focus-styles")} required={required} value={value} onChange={onChange}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
        {/* <ChevronDownIcon className="group pointer-events-none absolute top-2.5 right-2.5 size-4 " aria-hidden="true" /> */}
      </div>
    </div>
  );
};

export default CustomSelect;
