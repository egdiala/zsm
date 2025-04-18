import { ReactNode } from "react";

type Props = {
  text: string;
  onClick?: any;
  disabled?: boolean;
  cancelIcon?: boolean;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const RedButton = (props: Props) => {
  const { text, onClick, disabled, rightIcon, className, leftIcon } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full bg-red-100 border-0 font-krub-semibold 
        whitespace-nowrap rounded-md font-medium text-red-600
        px-[18px] py-[11px] text-sm
        transition-colors duration-200
        hover:bg-red-200
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center
        ${className || ""}
      `}
    >
      <div className="flex items-center justify-center">
        {leftIcon && <span className="mr-1">{leftIcon}</span>}
        {text}
        {rightIcon && <span className="ml-1">{rightIcon}</span>}
      </div>
    </button>
  );
};

export default RedButton;
