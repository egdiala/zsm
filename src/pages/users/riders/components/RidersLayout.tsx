import * as React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { pageVariants } from "@/constants/animateVariants";
import { cn } from "@/libs/cn";

interface IRidersLayoutProps {
  children: React.ReactNode;
}

const RidersLayout: React.FunctionComponent<IRidersLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const pages = [
    {
      label: "Overview",
      routeTo: "/user/riders",
    },
    {
      label: "Rider's Log",
      routeTo: "/user/riders/log",
    },
    {
      label: "Profile",
      routeTo: "/user/riders/1", // default, but will match dynamic below
    },
  ];

  const isProfileRoute = /^\/user\/riders\/(?!log$)[a-zA-Z0-9_-]+$/.test(location.pathname);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="final" exit={pageVariants.initial} className="flex flex-col gap-6 px-4 md:px-8 pt-9 pb-7 md:pb-9 max-w-[1800px] w-full mx-auto h-full">
      <div className="bg-white rounded-md overflow-hidden">
        <div className="bg-light-green h-[46px]">
          <div className="flex">
            {pages.map((item) => {
              const isActive = item.label === "Profile" ? isProfileRoute : location.pathname === item.routeTo;

              const isProfileHidden = item.label === "Profile" && !isActive;

              return (
                <div
                  key={item.label}
                  className={cn("px-5 py-[11px] cursor-pointer text-sm", {
                    "bg-green text-white font-semibold": isActive,
                    "text-gray-700 hover:text-primary": !isActive,
                    hidden: isProfileHidden,
                  })}
                  onClick={() => navigate(item.routeTo)}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </motion.div>
  );
};

export default RidersLayout;
