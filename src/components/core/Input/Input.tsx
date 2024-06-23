import React from "react";
import { Icon } from "@iconify/react";
import type { IconifyIcon } from "@iconify/types";
import { RenderIf } from "../RenderIf";
import "./input.css";

interface InputProps extends React.AllHTMLAttributes<HTMLInputElement> {
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
   * Right icon to render
   */
  iconRight?: string | IconifyIcon;
  /**
   * Left icon to render
   */
  iconLeft?: string | IconifyIcon;
  /**
   * Other unknown attributes
   */
  [x: string]: unknown;
}

/**
 * Input component for entering user data
 */
export const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="zsm-input--outer">
      <RenderIf condition={!!props?.label}>
        <div className="text-sm tracking-custom flex items-center">
          <label htmlFor={props?.name} className="zsm-input--label">
            {props?.label}
          </label>
          {!!props?.optional && (
            <span className="font-normal text-[#A2AAA9] ml-1">(Optional)</span>
          )}
        </div>
      </RenderIf>
      <div className="zsm-input--inner">
        <RenderIf condition={!!props?.iconLeft}>
          <Icon
            icon={props?.iconLeft as string | IconifyIcon}
            className="size-5 left-3 text-neutral-base mt-[13px] inset-x-0 absolute z-10"
          />
        </RenderIf>
        <input
          className={[
            "zsm-input",
            props?.iconLeft ? "pl-10" : "pl-4",
            props?.iconRight ? "pr-10" : "pr-4",
          ]
            .join(" ")
            .trim()}
          {...props}
        />
        <RenderIf condition={!!props?.iconRight}>
          <Icon
            icon={props?.iconRight as string | IconifyIcon}
            className="size-5 right-3 text-neutral-base -mt-[34px] absolute z-10"
          />
        </RenderIf>
      </div>
      <RenderIf condition={!!props?.error}>
        <span className="zsm-input--error">{props?.error}</span>
      </RenderIf>
    </div>
  );
};