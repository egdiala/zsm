import DetailsLayout from "@/pages/users/components/DetailsLayout";
import { Dispatch, SetStateAction } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router";

type Props = {
  paymentId: string;
  setPaymentId: Dispatch<SetStateAction<string>>;
  riderDetails?: {
    [key: string]: any;
  };
  riderTripPayment?: {
    [key: string]: any;
  };
};

const RiderTripPaymentsDetails = (props: Props) => {
  const { paymentId, setPaymentId, riderTripPayment } = props;
  const navigate = useNavigate();
  const tripPayment = riderTripPayment?.find((item: any) => item.payment_id === paymentId);

  console.log(navigate, tripPayment);
  // const Prototype = ({ label, value }) => (

  const items = [
    { label: "Payment ID", value: "729864400" },
    { label: "Amount", value: "₦4400" },
    { label: "Charge Amount", value: "₦2500" },
    { label: "Payment Method", value: "Transfer" },
    { label: "Rider’s Name", value: "Wade Warren’s" },
    { label: "Rider’s Type", value: "Demand" },
    { label: "Rider’s Phone Number", value: "08164028202" },
    { label: "Rider’s Email", value: "Rider@gmail.com" },
    { label: "Trip ID", value: "729864400" },
    { label: "Number of Trail", value: "04" },
    { label: "Date", value: "5th of May, 2022" },
    { label: "Payment Status", value: "Transfer" },
  ];

  return (
    <div>
      <div className="flex justify-between whitespace-nowrap flex-wrap ">
        <div className="flex align-center">
          {/* <div className="fw-bold">{getRiderType(riderType)} Riders</div> */}
          <div className="ms-4">
            <div className="flex items-center  ">
              <BsArrowLeft size={30} className="cursor-pointer" onClick={() => setPaymentId("")} />
              {/* <div className="font-bold ms-3 fs-5">{`${tripPayment?.first_name}'s Trip Payment Details`}</div> */}
              <div className="font-bold ms-3 fs-5">Wade Waren'sTrip Payment </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 mt-3 border rounded-lg ">
        <div className="flex justify-between">
          <div className="flex items-center px-3 pb-3 mt-1 flex-grow-1 w-full">
            <div className=" w-full">
              <div className="text-blue-1 font-semibold">
                <span className="mt-1 ms-1"> Trip Payment Details</span>
              </div>
              <DetailsLayout gridCols={4} items={items} itemsCols={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderTripPaymentsDetails;
