import Skeleton from "react-loading-skeleton";
import React, { ReactNode } from "react";

interface ICustomCardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  baseColor?: string;
}

const Shimmer = (props: ICustomCardProps) => {
  // "input-bg": "#F2F4F5",
  //       "input-border": "#DADCDD",

  const { className, style, baseColor } = props;
  const Wrapper = ({ children }: { children?: ReactNode }) => <div className={className}>{children}</div>;

  return (
    <div className={`rounded-lg ${className}`} style={style}>
      <Skeleton className="h-full" wrapper={Wrapper} baseColor={baseColor || "#f8f9fa"} />
    </div>
  );
};

export default Shimmer;
