import { cn } from "@/libs/cn"
import { AllHTMLAttributes, FC } from "react"
import { Field, Label, Select } from "@headlessui/react"

interface SelectFieldProps extends AllHTMLAttributes<HTMLInputElement> {
  /**
   * Label for input element
   */
  label?: string;
  /**
   * Error message
   */
  error?: string | boolean;
  /**
   * Optional input
   */
  optional?: boolean;
  /**
   * Other unknown attributes
   */
  [x: string]: unknown;
}

export const SelectField: FC<SelectFieldProps> = ({ label }) => {
  return (
      <Field className="zsm-input--outer">
        <Label className="zsm-input--label">{label}</Label>
        <div className="relative">
          <Select
            className={cn(
              "zsm-input px-4 block w-full appearance-none",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
              // Make the text of each option black on Windows
              "*:text-black"
            )}
          >
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="delayed">Delayed</option>
            <option value="canceled">Canceled</option>
          </Select>
        </div>
      </Field>
  )
}
