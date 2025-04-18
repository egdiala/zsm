import { FaCarAlt } from "react-icons/fa";

type Props = {
  riderDetails?: {
    [key: string]: any;
  };
};

const RiderTripsSumaryCards = (props: Props) => {
  console.log(props);
  //   const { riderDetails } = props;
  //   const { getTripsToast } = useTripsApiService();

  //   const { data: riderTripsCounts } = useQuery(
  //     [queryKeys.userTripsSummary, riderDetails],
  //     () =>
  //       getTripsToast({
  //         rider_id: riderDetails?.auth_id,
  //         // ride_status: "completed,cancel",
  //         component: "count-status",
  //       }),
  //     {
  //       select: (data) => data?.data,
  //     }
  //   );

  const items = [
    {
      title: "Total Trips Taken",
      //   value: riderTripsCounts?.total_count || 0,
      value: 300,
      cardBgColor: "#03C2FE16",
      icon: <FaCarAlt color="#71939C" />,
      iconCardColor: "#03C2FE16",
    },
    {
      title: "Completed Trips",
      //   value: riderTripsCounts?.completed_count || 0,
      value: 20,
      cardBgColor: "#15A32316",
      icon: <FaCarAlt color="#15A323" />,
      iconCardColor: "#15A32316",
    },
    {
      title: "Cancelled Trips",
      //   value: riderTripsCounts?.driver_cancel_count + riderTripsCounts?.rider_cancel_count || 0,
      value: 50,
      cardBgColor: "#FF373916",
      icon: <FaCarAlt color="#FF3739" />,
      iconCardColor: "#FF373916",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
      {items.map((item) => (
        <div key={item.title} className="mt-2">
          <div className={"rounded py-3 px-3 flex items-center justify-between h-[92px]"} style={{ backgroundColor: item.cardBgColor }}>
            <div className="flex items-center">
              <div className="p-2 rounded" style={{ background: item.iconCardColor }}>
                {item.icon}
              </div>
              <div className="ml-3">
                <div className="text-[#71939C] text-[15px]">{item.title}</div>
                <h5 className="text-blue-black font-bold mt-2">{item.value}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RiderTripsSumaryCards;
