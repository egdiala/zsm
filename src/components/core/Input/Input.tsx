import React from "react";
import { Icon } from "@iconify/react";
import type { IconifyIcon } from "@iconify/types";
import { RenderIf } from "../RenderIf";
import "./input.css";
import { cn } from "@/libs/cn";

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
export const Input: React.FC<InputProps> = ({className, label, error, optional, iconRight, iconLeft, ...props}) => {
  return (
    <div className="zsm-input--outer">
      <RenderIf condition={!!label}>
        <div className="text-sm tracking-custom flex items-center">
          <label htmlFor={props?.name} className="zsm-input--label">
            {label}
          </label>
          {!!optional && (
            <span className="font-normal text-[#A2AAA9] ml-1">(Optional)</span>
          )}
        </div>
      </RenderIf>
      <div className="zsm-input--inner">
        <RenderIf condition={!!iconLeft}>
          <Icon
            icon={iconLeft as string | IconifyIcon}
            className="size-5 left-3 text-grey-dark-3 mt-2.5 inset-x-0 absolute z-10"
          />
        </RenderIf>
        <input
          className={cn([
            "zsm-input peer",
            iconLeft ? "pl-10" : "pl-4",
            iconRight ? "pr-10" : "pr-4",
          ]
            .join(" ")
            .trim(), className)}
          {...props}
        />
        <RenderIf condition={!!iconRight}>
          <Icon
            icon={iconRight as string | IconifyIcon}
            className="size-5 right-3 text-grey-dark-3 -mt-[34px] absolute z-10"
          />
        </RenderIf>
      </div>
      <RenderIf condition={!!error}>
        <span className="zsm-input--error">{error}</span>
      </RenderIf>
    </div>
  );
};