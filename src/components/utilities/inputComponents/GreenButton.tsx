import { cn } from "@/libs/cn";
import { ReactNode } from "react";

type Props = {
  text?: string | ReactNode;
  onClick?: any;
  forwardArrow?: boolean;
  disabled?: boolean;
  size?: string;
  className?: string;
  type?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const GreenButton = (props: Props) => {
  const { text, onClick, rightIcon, disabled, className, type, leftIcon } = props;

  return (
    <button
      type={type ? (type as "button") : "submit"}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        `
        w-full bg-green 
        border-none whitespace-nowrap rounded-md font-bold
        text-sm px-[18px] py-[11px] text-white
        transition-all duration-200
        hover:brightness-110
        disabled:opacity-50 disabled:cursor-not-allowed
      `,
        className
      )}
    >
      <div className="flex items-center justify-center">
        {leftIcon && <span className="mr-1">{leftIcon}</span>}
        {text}
        {rightIcon && <span className="ml-1">{rightIcon}</span>}
      </div>
      {/* <img alt="arrow" src="/svgs/fwd-arrow.svg" /> */}
    </button>
  );
};

export default GreenButton;
