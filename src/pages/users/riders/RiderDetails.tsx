import RidersLayout from "@/pages/users/riders/components/RidersLayout";
import RiderActivityLog from "@/pages/users/riders/components/riderDetails/RiderActivityLog";
import RiderProfile from "@/pages/users/riders/components/riderDetails/RiderProfile";
import RiderTripPayments from "@/pages/users/riders/components/riderDetails/RiderTripPayments";
import RiderTripRating from "@/pages/users/riders/components/riderDetails/RiderTripRatings";
import RiderTrips from "@/pages/users/riders/components/riderDetails/RiderTrips";
import RiderWallet from "@/pages/users/riders/components/riderDetails/RiderWallet";
import { useState } from "react";

const RiderDetails = () => {
  const tabs = ["Rider Profile", "Trips", "Wallet", "Trip Payments", "Trip Rating", "Activity Log"];
  const [activeTabSubTab, setActiveTabSubTab] = useState(tabs[0]);

  const riderDetails = { a: "" };

  return (
    <RidersLayout>
      <div className="grid grid-cols-7 gap-4">
        {/* Left Sidebar */}
        <div className="col-span-10 lg:col-span-1 sticky top-0 lg:h-[500px] rounded-md">
          <div className="bg-white p-4 rounded-lg border">
            {tabs.map((item) => (
              <div
                key={item}
                onClick={() => setActiveTabSubTab(item)}
                className={`mb-3 p-2 px-3 whitespace-nowrap cursor-pointer rounded transition-colors
                  ${activeTabSubTab === item ? "bg-light-green font-medium font-semibold text-green" : "font-normal hover:bg-light-green"}`}
              >
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right Content Area */}
        <div className="col-span-12 lg:col-span-6">
          {activeTabSubTab === "Rider Profile" && <RiderProfile riderDetails={riderDetails} />}
          {activeTabSubTab === "Trips" && <RiderTrips riderDetails={riderDetails} />}
          {activeTabSubTab === "Wallet" && <RiderWallet userDetails={riderDetails} />}
          {activeTabSubTab === "Trip Payments" && <RiderTripPayments riderDetails={riderDetails} />}
          {activeTabSubTab === "Trip Rating" && <RiderTripRating riderDetails={riderDetails} />}
          {activeTabSubTab === "Activity Log" && <RiderActivityLog riderDetails={riderDetails} userType="rider" />}
        </div>
      </div>
    </RidersLayout>
  );
};

export default RiderDetails;
