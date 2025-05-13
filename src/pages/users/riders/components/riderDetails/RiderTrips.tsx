import { TableAction } from "@/components/core";
import ExportComponent from "@/components/utilities/filterComponents/ExportComponent";
import NewFilter from "@/components/utilities/filterComponents/NewFilter";
import EmptyPage from "@/components/utilities/table/EmptyPage";
import SearchComponent from "@/components/utilities/table/SearchComponent";
import TableBase from "@/components/utilities/table/TableBase";
import WaitingLoader from "@/components/utilities/table/WaitingLoader";
import { tripsClassOptions, tripsStatusOptions, tripstypesOptions } from "@/data/filterOptions";
import { formatTime } from "@/helepers/dateTimeHelper";
import { usePaginationHelper } from "@/helepers/paginationHelper";
import { useQueryStringHelper } from "@/helepers/queryStringHelper";
import { cn } from "@/libs/cn";
import RiderTripsDetails from "@/pages/users/riders/components/riderDetails/riderTrips/RiderTripsDetails";
import RiderTripsSumaryCards from "@/pages/users/riders/components/riderDetails/riderTrips/RiderTripsSummaryCards";
import { ObjectType } from "@/types/global.types";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type Props = {
  riderType?: any;
  setActiveTab?: any;
  riderDetails: {
    [key: string]: any;
  };
};

const RiderTrips = (props: Props) => {
  console.log(props);

  const navigate = useNavigate();

  const [toggled, setToggled] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { getPageNoFromQueryString } = useQueryStringHelper();
  const [currentPage, setCurrentPage] = useState(getPageNoFromQueryString());
  const [keyword, setKeyword] = useState("");
  const [tripId, setTripId] = useState("");
  const [viewedTrip, setViewedTrip] = useState<ObjectType | undefined>();
  const [tripsType, setTripType] = useState("");
  const [tripsStatus, setTripsStatus] = useState("");
  const [tripsClass, setTripsClass] = useState("");
  const [riderDetails] = useState(props.riderDetails);
  const [filterState, setFilterState] = useState({
    startDate,
    endDate,
    tripsType,
    tripsClass,
    tripsStatus,
    riderDetails,
  });

  const filterOptions = [
    {
      title: "Trips Type",
      options: tripstypesOptions,
      currentValue: tripsType,
      onChange: setTripType,
      name: "tripType",
    },
    {
      title: "Trips Status",
      options: tripsStatusOptions,
      currentValue: tripsStatus,
      onChange: setTripsStatus,
      name: "tripStatus",
    },
    {
      title: "Trips Class",
      options: tripsClassOptions,
      currentValue: tripsClass,
      onChange: setTripsClass,
      name: "tripClass",
    },
  ];

  console.log(filterState);
  const { paginate } = usePaginationHelper();
  const onPaginate = (pageNumber: number) => {
    paginate({
      pageNumber,
      setCurrentPage,
    });
  };

  const handleToggle = () => {
    setToggled(!toggled);
  };

  const onApply = () => {
    setFilterState({
      startDate,
      endDate,
      tripsType,
      tripsStatus,
      tripsClass,
      riderDetails,
    });
    handleToggle();
  };
  console.log(viewedTrip);

  // Dummy data for testing
  const riderTrips: ObjectType[] = [
    {
      createdAt: "2023-05-13T17:08:00",
      trip_ref: "672 7676 876",
      ride_type: "On-demand",
      ride_status: "awaiting",
      trip_id: "672 7676 876",
    },
    {
      createdAt: "2023-05-13T17:08:00",
      trip_ref: "672 7676 876",
      ride_type: "Schedule",
      ride_status: "completed",
      trip_id: "672 7676 876",
    },
    {
      createdAt: "2023-05-13T17:08:00",
      trip_ref: "672 7676 876",
      ride_type: "Schedule",
      ride_status: "canceled",
      trip_id: "672 7676 876",
    },
    {
      createdAt: "2023-05-13T17:08:00",
      trip_ref: "672 7676 876",
      ride_type: "Schedule",
      ride_status: "ongoing",
      trip_id: "672 7676 876",
    },
    {
      createdAt: "2023-05-13T17:08:00",
      trip_ref: "672 7676 876",
      ride_type: "Schedule",
      ride_status: "completed",
      trip_id: "672 7676 876",
    },
    {
      createdAt: "2023-05-13T17:08:00",
      trip_ref: "672 7676 876",
      ride_type: "Schedule",
      ride_status: "completed",
      trip_id: "672 7676 876",
    },
    {
      createdAt: "2023-05-13T17:08:00",
      trip_ref: "672 7676 876",
      ride_type: "Schedule",
      ride_status: "completed",
      trip_id: "672 7676 876",
    },
    {
      createdAt: "2023-05-13T17:08:00",
      trip_ref: "672 7676 876",
      ride_type: "Schedule",
      ride_status: "completed",
      trip_id: "672 7676 876",
    },
  ];

  const ridersCount = riderTrips.length;
  const isLoading = false;

  if (tripId) {
    return <RiderTripsDetails riderDetails={riderDetails} tripId={tripId} viewedTrip={viewedTrip} setTripId={setTripId} />;
  } else {
    return (
      <div className="p-4">
        {/* Header Section */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center">
            <BsArrowLeft size={30} className="cursor-pointer" onClick={() => navigate(-1)} />
            <div className="font-semibold ml-3 text-lg">{"Wade Warren’s Trips"}</div>
            <div className="min-w-[200px]">
              <SearchComponent keyword={keyword} setKeyword={setKeyword} />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {riderTrips?.length > 0 && (
              <div className="mr-3">
                <ExportComponent />
              </div>
            )}
            <div>
              <NewFilter
                direction="start"
                // toggleComponent={<FilterComponent />}
                toggleComponent={
                  <TableAction theme="secondary">
                    <Icon icon="ion:funnel" className="size-3" />
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

        {/* <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center">
            <BsArrowLeft size={30} className="cursor-pointer" onClick={() => navigate(-1)} />
            <div className="font-semibold ml-3 text-lg">{"Wade Warren’s Trips"}</div>
            <div className="min-w-[200px]">
              <SearchComponent keyword={keyword} setKeyword={setKeyword} />
            </div>
          </div>
          <div className="flex items-center">
            <RedButton text="Delete Rider" className="py-2" leftIcon={<RiDeleteBin6Line />} onClick={() => setDeleteModalOpen(true)} />
            <div>
              <NewFilter
                direction="start"
                toggleComponent={<FilterComponent />}
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
        </div> */}

        {/* Summary Cards */}
        <div className="mt-6 mb-8">
          <RiderTripsSumaryCards riderDetails={riderDetails} />
        </div>

        {isLoading && <WaitingLoader />}
        {!isLoading && (
          <div className="mt-4">
            {riderTrips?.length === 0 && <EmptyPage text="No Trips" />}
            {riderTrips?.length > 0 && (
              <>
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-blue-4 font-bold ">
                        <th className="table-th">Date & Time of Reg.</th>
                        <th className="table-th">Trip Reference</th>
                        <th className="table-th">Trip ID</th>
                        <th className="table-th">Trip Type</th>
                        <th className="table-th">Trip Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {riderTrips.map((item: ObjectType, index: number) => (
                        <tr
                          key={index}
                          className="cursor-pointer hover:bg-light-green"
                          onClick={() => {
                            setTripId(item.trip_id);
                            setViewedTrip(item);
                          }}
                        >
                          <td className="px-2 py-4">{formatTime(item.createdAt).fullDateTime}</td>

                          <td className="py-4 whitespace-nowrap"> {item.trip_ref} </td>
                          <td className="py-4 whitespace-nowrap"> {item.trip_id} </td>
                          <td className=" py-4 whitespace-nowrap capitalize">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-4 text-grey-dark-1">{item.ride_type}</span>
                          </td>
                          <td
                            className={cn("py-4 whitespace-nowrap font-semibold capitalize", {
                              "text-[#A50798]": item.ride_status === "awaiting",
                              "text-green": item.ride_status === "completed",
                              "text-semantics-red": item.ride_status === "canceled",
                              "text-blue-1": item.ride_status === "ongoing",
                            })}
                          >
                            {item.ride_status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {riderTrips?.length > 0 && (
                  <div className="mt-6">
                    <TableBase itemsCount={ridersCount} currentPage={currentPage} paginate={onPaginate} />
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    );
  }
};

export default RiderTrips;
