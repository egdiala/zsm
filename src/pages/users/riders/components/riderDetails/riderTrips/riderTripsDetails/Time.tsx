import DetailsLayout from "@/pages/users/components/DetailsLayout";
import { ObjectType } from "@/types/global.types";
// import { getActualAddress } from "../../../../../../../../helpers/locationHelper";
// import { ObjectType } from "../../../../../../../../types/common";

type Props = {
  viewedTrip?: { [key: string]: any };
  riderDetails: { [key: string]: any };
};
const Time = (props: Props) => {
  const { viewedTrip, riderDetails } = props;

  const focusedUser = viewedTrip?.riders?.find((item: ObjectType) => item.rider_id === riderDetails?.auth_id);

  console.log(focusedUser);

  const items = [
    { label: "Accepted Time", value: "12:00:24" },
    { label: "Arrive-Pickup Time", value: "40:26:16" },
    { label: "Waiting Time", value: "40:26:13" },
    { label: "Delay Time", value: "40:26:16" },
    { label: "Estimated Time", value: "40:26:16" },
    { label: "Start Time", value: "0:26:16" },
    { label: "End Time", value: "40:26:16" },
    { label: "Time Spent", value: "50:26:16" },
    { label: "Delayed Trip At", value: "33.91km" },
  ];
  return (
    <div className="p-4 border">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center px-3 pb-3 mt-1 flex-grow-1">
          <div className="flex-grow-1">
            <div className="text-blue-1 font-semibold flex">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="26" height="26" rx="5" fill="#F5FBFD" />
                <path
                  d="M13.0002 8.09834C9.81355 8.09834 7.22021 10.6917 7.22021 13.8783C7.22021 17.065 9.81355 19.665 13.0002 19.665C16.1869 19.665 18.7802 17.0717 18.7802 13.885C18.7802 10.6983 16.1869 8.09834 13.0002 8.09834ZM13.5002 13.665C13.5002 13.9383 13.2735 14.165 13.0002 14.165C12.7269 14.165 12.5002 13.9383 12.5002 13.665V10.3317C12.5002 10.0583 12.7269 9.83167 13.0002 9.83167C13.2735 9.83167 13.5002 10.0583 13.5002 10.3317V13.665ZM14.9269 7.29967H11.0735C10.8069 7.29967 10.5935 7.08634 10.5935 6.81967C10.5935 6.55301 10.8069 6.33301 11.0735 6.33301H14.9269C15.1935 6.33301 15.4069 6.54634 15.4069 6.81301C15.4069 7.07967 15.1935 7.29967 14.9269 7.29967Z"
                  fill="#058CEC"
                />
              </svg>
              <span className=" ms-1">Time</span>
            </div>
            <DetailsLayout gridCols={4} items={items} itemsCols={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
