import { TableAction } from "@/components/core";
import NewFilter from "@/components/utilities/filterComponents/NewFilter";
import EmptyPage from "@/components/utilities/table/EmptyPage";
import SearchComponent from "@/components/utilities/table/SearchComponent";
import WaitingLoader from "@/components/utilities/table/WaitingLoader";
import { cn } from "@/libs/cn";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

type Props = {
  userType?: string;
  setActiveTab?: any;
  riderDetails?: {
    [key: string]: any;
  };
};
const RiderActivityLog = (props: Props) => {
  const { riderDetails } = props;
  const [toggled, setToggled] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isLoading] = useState("");
  const [keyword, setKeyword] = useState("");

  console.log(riderDetails);
  //   const { getPageNoFromQueryString } = useQueryStringHelper();
  //   const [currentPage, setCurrentPage] = useState(getPageNoFromQueryString());
  //   const { getActivityLogDetailsToast } = useActivityLogApiService();
  //   const [filterState, setFilterState] = useState({
  //     startDate,
  //     endDate,
  //   });

  //   const { paginate } = usePaginationHelper();
  //   const onPaginate = (pageNumber: number) => {
  //     paginate({
  //       pageNumber,
  //       setCurrentPage,
  //       // callbackFunction: null,
  //     });
  //   };

  const handleToggle = () => {
    setToggled(!toggled);
  };
  //   const text = userType === "driver" ? "Drivers" : userType === "rider" ? "Riders" : userType === "partner" ? "Partners" : "Businesses";

  //   useEffect(() => {
  //     setBreadCrumbData([text, `${text} Log`, `${riderDetails?.first_name} ${riderDetails?.last_name}'s Activity Log`]);
  //   }, [riderDetails]);

  //   const { isLoading, data: activityLog } = useQuery(
  //     [queryKeys.activityLog, currentPage, filterState],
  //     () =>
  //       getActivityLogDetailsToast({
  //         start_date: startDate,
  //         auth_id: riderDetails?.auth_id,
  //         page: currentPage,
  //         end_date: endDate,
  //       }),
  //     {
  //       select: (data) => data?.data || [],
  //       keepPreviousData: true,
  //     }
  //   );
  //   const { data: activityLogCount } = useQuery(
  //     [queryKeys.activityLogCount, currentPage, filterState],
  //     () =>
  //       getActivityLogDetailsToast({
  //         component: "count",
  //         auth_id: riderDetails?.auth_id,
  //         page: currentPage,
  //         start_date: startDate,
  //         end_date: endDate,
  //       }),
  //     {
  //       select: (data) => data?.data?.total || 0,
  //       keepPreviousData: true,
  //     }
  //   );
  const filterOptions: [] = [];

  const onApply = () => {
    // setFilterState({ startDate, endDate });
    handleToggle();
  };

  const activities = [
    {
      type: "Suspended",
      body: "Lorem ipsum dolor sit amet consectetur. Mauris id egestas dui viverra commodo in odio sed placeestas quis in metus. Viverra nulla pellentesque eu orci nulla molestie conguenas lectus tempus viverra.",
      dateTime: "2nd July, 2023  •  10:43pm",
      author: "James",
    },
    {
      type: "Re-activated",
      body: "Lorem ipsum dolor sit amet consectetur. Mauris id egestas dui viverra commodo in odio sed placeestas quis in metus. Viverra nulla pellentesque eu orci nulla molestie conguenas lectus tempus viverra.",
      dateTime: "2nd July, 2023  •  10:43pm",
      author: "James",
    },
    {
      type: "Deleted",
      body: "Lorem ipsum dolor sit amet consectetur. Mauris id egestas dui viverra commodo in odio sed placeestas quis in metus. Viverra nulla pellentesque eu orci nulla molestie conguenas lectus tempus viverra.",
      dateTime: "2nd July, 2023  •  10:43pm",
        author: "James",
      
    },
  ];

  const getIcons = (type: string) => {
    if (type === "Suspended") {
      return "/svgs/suspended.svg";
    } else if (type === "Re-activated") {
      return "/svgs/reactivated.svg";
    } else if (type === "Deleted") {
      return "/svgs/delete.svg";
    }
  };

  if (isLoading && !activities) {
    return <WaitingLoader />;
  }

  return (
    <div className="md:ml-4">
      <div className="flex justify-between flex-wrap whitespace-nowrap">
        <div className="flex items-center justify-between w-full">
          {/* <div className="font-bold">{getRiderType(riderType)} Riders</div> */}
          <div className="">
            <div className="flex items-center">
              <BsArrowLeft size={30} className="" />
              {/* <div className="font-bold ml-3 text-lg">{`${riderDetails?.first_name} ${riderDetails?.last_name}'s Activity Log`}</div> */}
              <div className="font-bold ml-3 text-lg">Wade Warren’s Activity Log</div>
            </div>
          </div>
          {/* <div className='ml-4'>
            {<SeearchComponent keyword={keyword} setKeyword={setKeyword} />}
          </div> */}
          <div className="flex items-center">
            <div className="min-w-[200px]">
              <SearchComponent keyword={keyword} setKeyword={setKeyword} />
            </div>
            <div className="mr-3">
              <NewFilter
                direction={"start"}
                toggleComponent={
                  <TableAction theme="secondary">
                    <Icon icon="ion:funnel" className="w-3 h-3" />
                    Filter
                  </TableAction>
                }
                toggled={toggled}
                handleToggle={handleToggle}
                options={filterOptions}
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                onApply={onApply}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2">
        {activities?.length === 0 && <EmptyPage text="No Activity logged " />}
        {activities?.length > 0 && (
          <div>
            {activities.map((item, index) => (
              <div
                className={cn("flex", {
                  "pb-7": index !== 0,
                  "pt-7": index !== activities.length - 1 && index !== 0,
                  "border-l-2": index !== activities.length - 1,
                })}
                key={index}
                style={{ marginLeft: -7 }}
              >
                <div className="mr-3">
                  <div
                    className="rounded-full p-2 bg-white mb-[150px]"
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: -17,
                    }}
                  >
                    <img className="mb-2" alt="icon" src={getIcons(item.type)} />
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-bold">{item.type}</div>
                  <div className="p-4 rounded bg-blue-4" style={{ width: 400 }}>
                    <small className="text-grey-dark-1">{item.body}</small>
                    <div className="flex justify-between mt-3">
                      <small className="text-gray-dark-1">{item.dateTime}</small>
                      <small className="text-blue-1 font-semibold">by {item.author}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="cursor-pointer mt-3 text-green font-semibold ml-5">See more activities</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RiderActivityLog;
