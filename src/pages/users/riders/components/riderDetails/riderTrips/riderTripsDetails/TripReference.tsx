import GreenButton from "@/components/utilities/inputComponents/GreenButton";
import DetailsLayout from "@/pages/users/components/DetailsLayout";

type Props = {
  viewedTrip?: { [key: string]: string };
};
const TripReference = (props: Props) => {
  const { viewedTrip } = props;
  console.log(viewedTrip);
  const items = [
    { label: "Trips Reference", value: "5672758870925552" },
    { label: "Trips ID", value: "5672758870925552" },
    {
      label: "Trips Type",
      value: (
        <div className="text-white">
          <GreenButton text={"On-demand"} className="py-1 rounded-full mt-1 text-capitalize px-10 w-auto" />
        </div>
      ),
    },
    {
      label: "Trips Status",
      value: (
        <div className="text-white">
          <GreenButton text={"Completed"} className="py-1 rounded-full mt-1 text-white text-capitalize px-10 w-auto" />
        </div>
      ),
    },
    // { label: "Trips Type", value: <GreenButton text={viewedTrip?.ride_type} className="py-1 rounded-full mt-1 text-white text-capitalize" /> },
    // { label: "Trips Status", value: <GreenButton text={viewedTrip?.ride_status} className="py-1 rounded-full mt-1 text-white text-capitalize w-24" /> },
  ];
  return (
    <div className=" p-4 border">
      <div className="d-flex justify-between">
        <div className="flex items-center px-3 pb-3 mt-1 flex-1">
          <div className="flex-1">
            <div className="text-blue-1 fw-medium flex items-center">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="26" height="26" rx="5" fill="#F5FBFD" />
                <path
                  d="M10.9202 8.06649C10.3868 5.75982 6.91351 5.75315 6.38018 8.06649C6.06685 9.41982 6.92685 10.5665 7.67351 11.2798C8.22018 11.7932 9.08018 11.7932 9.62685 11.2798C10.3735 10.5665 11.2268 9.41982 10.9202 8.06649ZM8.67351 9.13315C8.30685 9.13315 8.00685 8.83315 8.00685 8.46649C8.00685 8.09982 8.30018 7.79982 8.66685 7.79982H8.67351C9.04685 7.79982 9.34018 8.09982 9.34018 8.46649C9.34018 8.83315 9.04685 9.13315 8.67351 9.13315ZM19.6068 16.0665C19.0735 13.7598 15.5868 13.7532 15.0468 16.0665C14.7335 17.4198 15.5935 18.5665 16.3468 19.2798C16.8935 19.7932 17.7602 19.7932 18.3068 19.2798C19.0602 18.5665 19.9202 17.4198 19.6068 16.0665ZM17.3535 17.1332C16.9868 17.1332 16.6868 16.8332 16.6868 16.4665C16.6868 16.0998 16.9802 15.7998 17.3468 15.7998H17.3535C17.7202 15.7998 18.0202 16.0998 18.0202 16.4665C18.0202 16.8332 17.7202 17.1332 17.3535 17.1332ZM13.0002 18.1672H11.2135C10.4402 18.1672 9.76685 17.7005 9.50018 16.9805C9.22685 16.2605 9.42685 15.4672 10.0068 14.9538L15.3335 10.2938C15.6535 10.0138 15.6602 9.63382 15.5668 9.37382C15.4668 9.11382 15.2135 8.83382 14.7868 8.83382H13.0002C12.7268 8.83382 12.5002 8.60715 12.5002 8.33382C12.5002 8.06049 12.7268 7.83382 13.0002 7.83382H14.7868C15.5602 7.83382 16.2335 8.30049 16.5002 9.02049C16.7735 9.74049 16.5735 10.5338 15.9935 11.0472L10.6668 15.7072C10.3468 15.9872 10.3402 16.3672 10.4335 16.6272C10.5335 16.8872 10.7868 17.1672 11.2135 17.1672H13.0002C13.2735 17.1672 13.5002 17.3938 13.5002 17.6672C13.5002 17.9405 13.2735 18.1672 13.0002 18.1672Z"
                  fill="#058CEC"
                />
              </svg>
              <span className="ms-1 text-blue-1 font-semibold">Trip Detail </span>
            </div>
            <div className="">
              <DetailsLayout gridCols={4} items={items} itemsCols={1} />
            </div>
            {/* 
            <div className="flex flex-wrap">
              <div className="mt-2 detail-card-data">
                <div>
                  <small className="text-grey">Trips Reference</small>
                </div>
                <div className="mt-1 fw-semibold">{viewedTrip?.trip_ref}</div>
              </div>
              <div className="mt-2 detail-card-data">
                <div>
                  <small className="text-grey">Trips ID</small>
                </div>
                <div className="mt-1 fw-semibold">{viewedTrip?.trip_id}</div>
              </div>{" "}
              <div className="mt-2 detail-card-data">
                <div>
                  <small className="text-grey">Date/Time</small>
                </div>
                <div className="mt-1 fw-semibold">{viewedTrip?.trip_id}</div>
              </div>
              <div className="mt-3 detail-card-data">
                <div>
                  <small className="text-grey">Trips Type</small>
                </div>
                <GreenButton text={viewedTrip?.ride_type} className="py-1 rounded-full mt-1 text-capitalize" />
              </div>
              <div className="mt-3 detail-card-data">
                <div>
                  <small className="text-grey">Trips Status</small>
                </div>
                <GreenButton text={viewedTrip?.ride_status} className="py-1 rounded-full mt-1 text-capitalize" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripReference;
