import DriverAndVehicle from "@/pages/users/riders/components/riderDetails/riderTrips/riderTripsDetails/DriverAndVehicle";
import LocationAndDistanceDetails from "@/pages/users/riders/components/riderDetails/riderTrips/riderTripsDetails/LocationAndDistance";
import Time from "@/pages/users/riders/components/riderDetails/riderTrips/riderTripsDetails/Time";
import TripFare from "@/pages/users/riders/components/riderDetails/riderTrips/riderTripsDetails/TripFare";
import TripReference from "@/pages/users/riders/components/riderDetails/riderTrips/riderTripsDetails/TripReference";
import TripRiderDetails from "@/pages/users/riders/components/riderDetails/riderTrips/riderTripsDetails/TripRiderDetails";
import { Dispatch, SetStateAction } from "react";
import { BsArrowLeft } from "react-icons/bs";

type Props = {
  tripId: string;
  viewedTrip?: { [key: string]: string };
  riderDetails: { [key: string]: any };
  setTripId: Dispatch<SetStateAction<string>>;
};

const RiderTripsDetails = (props: Props) => {
  const { tripId, setTripId, viewedTrip, riderDetails } = props;

  console.log(tripId, viewedTrip, riderDetails);

  //   const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between whitespace-nowrap flex-wrap">
        <div className="flex items-center">
          {/* <div className="fw-bold">{getRiderType(riderType)} Riders</div> */}
          <div className="ms-4">
            <div className="flex items-center">
              <BsArrowLeft
                size={30}
                className="cursor-pointer"
                onClick={() => {
                  setTripId("");
                  //   navigate(-1);
                }}
              />
              <div className="font-bold ms-3 fs-5">Wade Warren‘s trip Details</div>
              {/* <div className="font-bold ms-3 fs-5">{`${riderDetails?.first_name} ${riderDetails.last_name}'s `}trip Details</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <TripRiderDetails viewedTrip={viewedTrip} />
      </div>
      <div className="mt-3">
        <TripFare riderDetails={riderDetails} viewedTrip={viewedTrip} />
      </div>
      <div className="mt-3">
        <TripReference viewedTrip={viewedTrip} />
      </div>
      <div className="mt-3">
        <LocationAndDistanceDetails riderDetails={riderDetails} viewedTrip={viewedTrip} />
      </div>
      <div className="mt-3">
        <Time riderDetails={riderDetails} viewedTrip={viewedTrip} />
      </div>
      <div className="mt-3">
        <DriverAndVehicle viewedTrip={viewedTrip} />
      </div>
    </div>
  );
};

export default RiderTripsDetails;
