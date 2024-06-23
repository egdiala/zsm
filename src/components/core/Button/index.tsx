import React, { type ReactNode } from "react";
import { RenderIf } from "../RenderIf";
import { Loader } from "./Loader";
import { cn } from "@/libs/cn";
import "./button.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Shows a loading state on Button component
   */
  loading?: boolean;
  /**
   * Should the button fill it's parent container?
   */
  block?: boolean;
  /**
   * What variant to render
   */
  theme?: "primary" | "secondary" | "tertiary" | "grey" | "ghost";
  /**
   * Renders child nodes passed into Button component
   */
  children?: string | ReactNode;
  /**
   * Other unknown attributes
   */
  [x: string]: any;
}

/**
 * Button component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  className,
  loading,
  block,
  theme = "primary",
  children,
  ...props
}) => {
  const btn = {
    themes: {
      primary: "zsm-button--primary",
      secondary: "zsm-button--secondary",
      tertiary: "zsm-button--tertiary",
      grey: "zsm-button--grey",
      ghost: "zsm-button--ghost",
    },
  };

  const width = block && "zsm-button--block";
  
  return (
    <button className={cn("w-fit", "zsm-button", btn.themes[theme as keyof typeof btn.themes], width, className)} {...props}>
        <RenderIf condition={loading!}>
            <div className="flex items-center justify-center">
                <Loader className="spinner" />
            </div>
        </RenderIf>
        <RenderIf condition={!loading}>
            {children}
        </RenderIf>
    </button>
  );
};