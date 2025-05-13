import OverviewSumaryCards from "@/pages/users/riders/components/OverviewSummaryCards";
import RegistrationChart from "@/pages/users/riders/components/RegistrationChart";
import RidersLayout from "@/pages/users/riders/components/RidersLayout";
import RidersLeaderboard from "@/pages/users/riders/components/RidersLeaderboard";
import RidersRating from "@/pages/users/riders/components/RidersRating";
import DownloadsByLga from "@/pages/users/riders/components/downloadsByLga";
import * as React from "react";

const Riders: React.FunctionComponent = () => {
  return (
    <RidersLayout>
      <div className="">
        <h5 className="font-semibold text-lg">Riders Overview</h5>
        <div className="mt-3">
          <OverviewSumaryCards />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 lg:grid-flow-row-dense">
          <RegistrationChart className="border mt-3" />
          <div className="mt-3">
            <DownloadsByLga />
          </div>
          <div className="mt-3">
            <RidersLeaderboard />
          </div>
          <div className="mt-3">
            <RidersRating />
          </div>
        </div>
      </div>
    </RidersLayout>
  );
};

export default Riders;
