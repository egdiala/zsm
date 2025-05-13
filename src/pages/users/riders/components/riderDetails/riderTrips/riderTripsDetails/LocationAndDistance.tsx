import DetailsLayout from "@/pages/users/components/DetailsLayout";
import { ObjectType } from "@/types/global.types";
import { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
// import { getActualAddress } from "../../../../../../../../helpers/locationHelper";
// import { ObjectType } from "../../../../../../../../types/common";

type Props = {
  viewedTrip?: { [key: string]: any };
  riderDetails: { [key: string]: any };
};
const LocationAndDistanceDetails = (props: Props) => {
  const { viewedTrip, riderDetails } = props;
  const [actualLocation, setActualLocation] = useState("");

  const focusedUser = viewedTrip?.riders?.find((item: ObjectType) => item.rider_id === riderDetails?.auth_id);

  console.log(focusedUser);

  const getAddress = async (lat: string, lon: string) => {
    console.log(lat, lon);
    // const res = await getActualAddress(lat, lon);
    const res = " random address";
    setActualLocation(res);
  };

  // const ActualLocationUI = ({ lat, lon }) => <div>{actualLocation ? "empp qwjoresdlkvnqer efdjlvkerds" : <div>{actualLocation}</div>}</div>;
  const ActualLocationUI = ({ lat, lon }: { lat: string; lon: string }) => <div> {actualLocation ? actualLocation : <BsEyeFill onClick={() => getAddress(lat, lon)} />}</div>;

  console.log(ActualLocationUI);
  const items = [
    { label: "Pickup Location", value: "67 Henry Close, Eti Osa" },
    { label: "Drop off Location", value: "67 Henry Close, Eti Osa" },
    { label: "Estimated Distance", value: "20.021km" },
    { label: "View actual Drop off Address ", value: "J9P3+QX3, Isheri Rd, Omole Phase 1 101233, Ikeja, Lagos, Nigeria" },
    { label: "Pickup Distance", value: "0.021km" },
    { label: "End distance", value: "3.91km" },
    { label: "Pickup Latitude", value: "3.3547928" },
    { label: "Drop off Latitude", value: "3.3547928" },
    { label: "Pickup Longitude", value: "3.3547928" },
    { label: "Drop off Longitude", value: "0.3.3547928" },
    { label: "Updated Destination", value: "Eti-Osa Lekki 1" },
    { label: "Total Distance Covered", value: "Eti-Osa Lekki 1" },
    { label: "Actual map of transit", value: <div className="underline">Lekki Phase 1 to Ajah</div> },
  ];
  return (
    <div className="p-4 border">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center px-3 pb-3 mt-1 flex-grow-1">
          <div className="flex-grow-1">
            <div className="text-blue-1 flex font-semibold">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="26" height="26" rx="5" fill="#F5FBFD" />
                <path
                  d="M18.7472 10.6337C18.0472 7.55366 15.3606 6.16699 13.0006 6.16699H12.9939C10.6406 6.16699 7.94722 7.54699 7.24722 10.627C6.46722 14.067 8.57389 16.9803 10.4806 18.8137C11.1564 19.4678 12.06 19.8335 13.0006 19.8337C13.9072 19.8337 14.8139 19.4937 15.5139 18.8137C17.4206 16.9803 19.5272 14.0737 18.7472 10.6337ZM13.0006 13.9737C12.7248 13.9737 12.4517 13.9193 12.1969 13.8138C11.9421 13.7083 11.7106 13.5536 11.5156 13.3586C11.3206 13.1636 11.1659 12.9321 11.0604 12.6773C10.9549 12.4225 10.9006 12.1494 10.9006 11.8737C10.9006 11.5979 10.9549 11.3248 11.0604 11.07C11.1659 10.8152 11.3206 10.5837 11.5156 10.3887C11.7106 10.1937 11.9421 10.039 12.1969 9.93351C12.4517 9.82798 12.7248 9.77366 13.0006 9.77366C13.5575 9.77366 14.0916 9.99491 14.4855 10.3887C14.8793 10.7826 15.1006 11.3167 15.1006 11.8737C15.1006 12.4306 14.8793 12.9648 14.4855 13.3586C14.0916 13.7524 13.5575 13.9737 13.0006 13.9737Z"
                  fill="#058CEC"
                />
              </svg>
              <span className="ms-1"> Location and Distance Details</span>
            </div>

            <DetailsLayout gridCols={3} items={items} itemsCols={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAndDistanceDetails;
