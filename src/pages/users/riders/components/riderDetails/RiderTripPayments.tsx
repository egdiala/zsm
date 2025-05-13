import { TableAction } from "@/components/core";
import ExportComponent from "@/components/utilities/filterComponents/ExportComponent";
import NewFilter from "@/components/utilities/filterComponents/NewFilter";
import EmptyPage from "@/components/utilities/table/EmptyPage";
import SearchComponent from "@/components/utilities/table/SearchComponent";
import TableBase from "@/components/utilities/table/TableBase";
import WaitingLoader from "@/components/utilities/table/WaitingLoader";
import { usePaginationHelper } from "@/helepers/paginationHelper";
import { useQueryStringHelper } from "@/helepers/queryStringHelper";
import { cn } from "@/libs/cn";
import RiderTripPaymentsDetails from "@/pages/users/riders/components/riderDetails/riderTrips/PaymentDetails";
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

const RiderTripPayments = (props: Props) => {
  console.log(props);

  const navigate = useNavigate();

  const [toggled, setToggled] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { getPageNoFromQueryString } = useQueryStringHelper();
  const [currentPage, setCurrentPage] = useState(getPageNoFromQueryString());
  const [keyword, setKeyword] = useState("");
  const [tripPaymentId, setTripPaymentId] = useState("");
  const [tripsType] = useState("");
  const [tripsStatus] = useState("");
  const [tripsClass] = useState("");
  const [riderDetails] = useState(props.riderDetails);
  const [filterState, setFilterState] = useState({
    startDate,
    endDate,
    tripsType,
    tripsClass,
    tripsStatus,
    riderDetails,
  });

  const filterOptions: [] = [];

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

  // Dummy data for testing
  const riderTripPayments = [
    {
      trip_reference: "24268958966660",
      amount: "₦3,200",
      actual_amount: "₦3,200",
      date: "22th May,2023",
      payment_method: "Wallet",
      status: "Successful",
    },
    {
      trip_reference: "24268958966660",
      amount: "₦3,200",
      actual_amount: "₦3,200",
      date: "22th May,2023",
      payment_method: "Wallet",
      status: "Unsuccessful",
    },
    {
      trip_reference: "24268958966660",
      amount: "₦3,200",
      actual_amount: "₦3,200",
      date: "22th May,2023",
      payment_method: "Wallet",
      status: "Undecided",
    },
    {
      trip_reference: "24268958966660",
      amount: "₦3,200",
      actual_amount: "₦3,200",
      date: "22th May,2023",
      payment_method: "Wallet",
      status: "Successful",
    },
    {
      trip_reference: "24268958966660",
      amount: "₦3,200",
      actual_amount: "₦3,200",
      date: "22th May,2023",
      payment_method: "Wallet",
      status: "Unsuccessful",
    },
    {
      trip_reference: "24268958966660",
      amount: "₦3,200",
      actual_amount: "₦3,200",
      date: "22th May,2023",
      payment_method: "Wallet",
      status: "Undecided",
    },
    {
      trip_reference: "24268958966660",
      amount: "₦3,200",
      actual_amount: "₦3,200",
      date: "22th May,2023",
      payment_method: "Wallet",
      status: "Successful",
    },
    {
      trip_reference: "24268958966660",
      amount: "₦3,200",
      actual_amount: "₦3,200",
      date: "22th May,2023",
      payment_method: "Wallet",
      status: "Unsuccessful",
    },
    {
      trip_reference: "24268958966660",
      amount: "₦3,200",
      actual_amount: "₦3,200",
      date: "22th May,2023",
      payment_method: "Wallet",
      status: "Undecided",
    },
    {
      trip_reference: "24268958966660",
      amount: "₦3,200",
      actual_amount: "₦3,200",
      date: "22th May,2023",
      payment_method: "Wallet",
      status: "Successful",
    },
    {
      trip_reference: "24268958966660",
      amount: "₦3,200",
      actual_amount: "₦3,200",
      date: "22th May,2023",
      payment_method: "Wallet",
      status: "Successful",
    },
    {
      trip_reference: "24268958966660",
      amount: "₦3,200",
      actual_amount: "₦3,200",
      date: "22th May,2023",
      payment_method: "Wallet",
      status: "Unsuccessful",
    },
  ];

  const riderTripPaymentsCount = riderTripPayments.length;
  const isLoading = false;

  if (tripPaymentId) {
    return <RiderTripPaymentsDetails riderDetails={riderDetails} paymentId={tripPaymentId} setPaymentId={setTripPaymentId} />;
  } else {
    return (
      <div className="p-4">
        {/* Header Section */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center">
            <BsArrowLeft size={30} className="cursor-pointer" onClick={() => navigate(-1)} />
            <div className="font-semibold ml-3 text-lg">Wade Warren’s Trip Payments</div>
            <div className="min-w-[200px]">
              <SearchComponent keyword={keyword} setKeyword={setKeyword} />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {riderTripPayments?.length > 0 && (
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

        {isLoading && <WaitingLoader />}
        {!isLoading && (
          <div className="mt-4">
            {riderTripPayments?.length === 0 && <EmptyPage text="No Trips" />}
            {riderTripPayments?.length > 0 && (
              <>
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-blue-4 font-bold ">
                        <th className="table-th">Trip Reference</th>
                        <th className="table-th">Amount</th>
                        <th className="table-th">Actual Amount</th>
                        <th className="table-th">Date</th>
                        <th className="table-th">Payment Method</th>
                        <th className="table-th">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {riderTripPayments.map((item, index) => (
                        <tr
                          key={index}
                          className="cursor-pointer hover:bg-light-green"
                          onClick={() => {
                            setTripPaymentId(item.trip_reference);
                          }}
                        >
                          <td className="py-3 whitespace-nowrap">{item.trip_reference}</td>
                          <td className="py-3 whitespace-nowrap">{item.amount}</td>
                          <td className="py-3 whitespace-nowrap">{item.actual_amount}</td>
                          <td className="py-3 whitespace-nowrap">{item.date}</td>
                          <td className="py-3 whitespace-nowrap">{item.payment_method}</td>
                          <td
                            className={cn("px-4 py-3 font-semibold capitalize", {
                              "text-green": item.status === "Successful",
                              "text-semantics-red": item.status === "Unsuccessful",
                              "text-blue-500": item.status === "Undecided",
                            })}
                          >
                            {item.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {riderTripPayments?.length > 0 && (
                  <div className="mt-6">
                    <TableBase itemsCount={riderTripPaymentsCount} currentPage={currentPage} paginate={onPaginate} />
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

export default RiderTripPayments;
