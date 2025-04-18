import { ReactChangeEventType } from "@/types/global.types";
import { Dispatch, ReactNode, SetStateAction } from "react";
type Props = {
  label?: string;
  placeholder?: string;
  right?: ReactNode;
  left?: ReactNode;
  id: string;
  name: string;
  type?:
    | "textarea"
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  fileReplacement?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  leftBorderEnd?: boolean;
  onFocus?: () => void;
  formik?: any;
  // eslint-disable-next-line no-unused-vars
  onChange?: Dispatch<SetStateAction<unknown>> | ((event: ReactChangeEventType) => void);
  accept?: string;
  value?: string;
};

const CustomInput = (props: Props) => {
  const { type, label, placeholder, right, left, id, name, fileReplacement, required, onFocus, formik, onChange, accept, disabled, value } = props;
  const { values: fieldValue, errors, touched } = formik || {};

  return (
    <div>
      <div className="w-full mx-auto">
        <label htmlFor="password" className="block text-gray-700">
          <div className="text-sm mb-1">{label}</div>
          <div className="relative mt-1">
            {left && <div className="absolute inset-y-0 left-0 flex items-center px-3">{left}</div>}
            {type !== "file" ? (
              <input
                className={`shadow-sm block border  border-grey-dark-3 bg-input-bg rounded-md w-full py-3 px-2 ${right && "pe-10"} ${left && "pl-8"} text-gray-700 mb-1 text-sm leading-tight focus:outline-none focus:shadow-outline`}
                name={name}
                id={id}
                type={type ? type : "text"}
                placeholder={placeholder}
                value={formik ? fieldValue[name] : value}
                onBlur={formik?.handleBlur}
                onChange={formik ? formik?.handleChange : onChange}
                required={required}
                onFocus={() => {
                  onFocus && onFocus();
                }}
              />
            ) : (
              <>
                {/* watch to see if hidden or not */}
                <input
                  className="shadow-sm block  border border-grey-dark-3 hidden rounded w-full py-2 px-4 pr-10 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                  type={type ? type : "text"}
                  placeholder={placeholder}
                  style={{ border: "none", outline: "none" }}
                  id={id}
                  name={name}
                  value={formik ? fieldValue[name] : value}
                  onBlur={formik?.handleBlur}
                  onChange={onChange}
                  required={required}
                  disabled={disabled}
                  accept={accept}
                />

                {fileReplacement && fileReplacement}
              </>
            )}

            {right && <div className="absolute inset-y-0 right-0 flex items-center px-3">{right}</div>}
          </div>

          {formik && errors[name] && touched[name] && <small className="text-red-400">{errors[name]}</small>}
        </label>
      </div>
    </div>
  );
};

export default CustomInput;
