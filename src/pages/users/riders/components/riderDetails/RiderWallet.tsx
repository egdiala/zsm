import { TableAction } from "@/components/core";
import ExportComponent from "@/components/utilities/filterComponents/ExportComponent";
import NewFilter from "@/components/utilities/filterComponents/NewFilter";
import EmptyPage from "@/components/utilities/table/EmptyPage";
import SearchComponent from "@/components/utilities/table/SearchComponent";
import TableBase from "@/components/utilities/table/TableBase";
import WaitingLoader from "@/components/utilities/table/WaitingLoader";
import { paymentMethodOptions, paymentStatusOptions } from "@/data/filterOptions";
import { formatTime } from "@/helepers/dateTimeHelper";
import { usePaginationHelper } from "@/helepers/paginationHelper";
import { useQueryStringHelper } from "@/helepers/queryStringHelper";
import RiderWalletSumaryCards from "@/pages/users/riders/components/riderDetails/riderWallet/RiderWalletSummaryCards";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type Props = {
  riderType?: any;
  setActiveTab?: any;
  userDetails: {
    [key: string]: any;
  };
};

// Mock data for rider wallet
const mockRiderWallet = [
  {
    transaction_id: "TRX001",
    reference: "24268958966660",
    description: "Trip payment",
    amount: 5000,
    actual_amount: 4500,
    createdAt: "2023-05-15T10:30:00Z",
    payment_method: "card",
    status: 1,
  },
  {
    transaction_id: "TRX002",
    reference: "24268958966660",
    description: "Wallet top-up",
    amount: 10000,
    actual_amount: 10000,
    createdAt: "2023-05-14T15:45:00Z",
    payment_method: "bank transfer",
    status: 1,
  },
  {
    transaction_id: "TRX003",
    reference: "24268958966660",
    description: "Service fee",
    amount: -1000,
    actual_amount: -1000,
    createdAt: "2023-05-13T09:15:00Z",
    payment_method: "system",
    status: -1,
  },
  {
    transaction_id: "TRX004",
    reference: "24268958966660",
    description: "Failed trip refund",
    amount: 2500,
    actual_amount: 2500,
    createdAt: "2023-05-12T14:20:00Z",
    payment_method: "wallet",
    status: 2,
  },
  {
    transaction_id: "TRX005",
    reference: "24268958966660",
    description: "Bonus credit",
    amount: 2000,
    actual_amount: 2000,
    createdAt: "2023-05-11T11:10:00Z",
    payment_method: "system",
    status: 1,
  },
];

// Mock data for wallet summary
const mockRiderInOutflow = {
  inflow: 19500,
  outflow: 1000,
};
const mockRidereWalletDetails = {
  wallet_balance: 15000,
  total_earnings: 20000,
  total_spending: 5000,
};

const RiderWallet = (props: Props) => {
  console.log(props);
  //   const { userDetails, userType } = props;
  const [toggled, setToggled] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  //   const [checkedItems, setCheckedItems] = useState([]);
  const { getPageNoFromQueryString } = useQueryStringHelper();
  const [currentPage, setCurrentPage] = useState(getPageNoFromQueryString());
  //   const { deleteModalConfig } = useContext(AppPrefrenceContext);
  const [keyword, setKeyword] = useState("");
  //   const [filterToggle, setFilterToggle] = useState(false);
  const [tripsType] = useState("");
  const [mode, setMode] = useState("Inflow");
  const [isLoading] = useState(false);
  //   const { getWalletToast, getWalletDvaToast } = useWalletApiService();
  const [chargeMethod, setChargeMethod] = useState("");
  const [status, setStatus] = useState("");

  const [filterState, setFilterState] = useState({
    keyword,
    startDate,
    endDate,
    tripsType,
    mode,
  });

  console.log(filterState);

  // Mock data assignments
  const riderWallet = mockRiderWallet;
  const riderInOutflow = mockRiderInOutflow;
  const ridereWalletDetails = mockRidereWalletDetails;
  const riderWalletCount = mockRiderWallet.length;

  // Helper functions
  const getWalletStatusColor = (status: number) => {
    return status === 1 ? "text-green" : "text-red-500";
  };

  const getWalletStatus = (status: number) => {
    return status === 1 ? "Completed" : status === 2 ? "Cancelled" : "Debited";
  };

  //   const queryClient = useQueryClient();

  const { paginate } = usePaginationHelper();
  const onPaginate = (pageNumber: number) => {
    paginate({
      pageNumber,
      setCurrentPage,
      // callbackFunction: null,
    });
  };

  const handleToggle = () => {
    setToggled(!toggled);
  };

  //   const handleTypeChange = (e: { target: { value: SetStateAction<string> } }) => setTripType(e.target.value);

  //   const {
  //     isLoading,
  //     data: riderWallet,
  //     refetch: refetchRiderWallet,
  //   } = useQuery(
  //     [queryKeys.riderWallet, currentPage, keyword, mode, userDetails, startDate, endDate],
  //     () =>
  //       getWalletToast({
  //         auth_id: userDetails?.auth_id,
  //         // user_type: userType,
  //         status: mode === "Inflow" ? 1 : mode === "Outflow" ? -1 : "",
  //         wallet_type: "user-wallet",
  //         start_date: startDate,
  //         end_date: endDate,
  //         page: currentPage,
  //         q: keyword,
  //       }),
  //     {
  //       select: (data) => data?.data || [],
  //       // enabled: false,
  //       keepPreviousData: true,
  //     }
  //   );
  //   const { data: riderWalletCount, refetch: refetchRiderWalletCount } = useQuery(
  //     [queryKeys.riderWalletCount, currentPage, filterState],
  //     () =>
  //       getWalletToast({
  //         auth_id: userDetails?.auth_id,
  //         wallet_type: "user-wallet",
  //         status: mode === "Inflow" ? 1 : mode === "Outflow" ? -1 : "",
  //         // user_type: userType,
  //         start_date: startDate,
  //         end_date: endDate,
  //         page: currentPage,
  //         q: keyword,
  //         component: "count",
  //       }),
  //     {
  //       select: (data) => data?.data?.total || 0,
  //       // enabled: false,
  //       keepPreviousData: true,
  //     }
  //   );

  //   const { data: riderWalletBalance, refetch: refetchRiderWalletBalance } = useQuery(
  //     [queryKeys.riderWalletBalance, userDetails, mode],
  //     () =>
  //       getWalletToast({
  //         auth_id: userDetails?.auth_id,
  //         wallet_type: "user-wallet",
  //         status: mode === "Inflow" ? 1 : mode === "Outflow" ? -1 : "",
  //         // user_type: userType,
  //         component: "balance",
  //       }),
  //     {
  //       select: (data) => data?.data?.balance,
  //       // enabled: false,
  //       keepPreviousData: true,
  //     }
  //   );

  //   const { data: riderInOutflow, refetch: refetchRiderInOutflow } = useQuery(
  //     [queryKeys.riderInOutflow, userDetails],
  //     () =>
  //       getWalletToast({
  //         auth_id: userDetails?.auth_id,
  //         wallet_type: "user-wallet",
  //         // status: 1,
  //         // user_type: userType,
  //         component: "count-status",
  //       }),
  //     {
  //       select: (data) => data?.data,
  //       // enabled: false,
  //       keepPreviousData: true,
  //     }
  //   );

  //   const { data: ridereWalletDetails } = useQuery(
  //     [queryKeys.vehicleWalletDetails, userDetails],
  //     () =>
  //       getWalletDvaToast({
  //         auth_id: userDetails?.auth_id,
  //         component: "balance",
  //       }),
  //     {
  //       select: (data) => data?.data[0],
  //       // enabled: false,
  //       keepPreviousData: true,
  //     }
  //   );
  const navigate = useNavigate();
  const onApply = () => {
    setFilterState({
      keyword,
      startDate,
      endDate,
      tripsType,
      mode,
    });
  };

  const filterOptions = [
    {
      title: "Charge Method",
      options: paymentMethodOptions,
      currentValue: chargeMethod,
      onChange: setChargeMethod,
      name: "tripType",
    },
    {
      title: "Status",
      options: paymentStatusOptions,
      currentValue: status,
      onChange: setStatus,
      name: "tripStatus",
    },
  ];
  if (isLoading && !riderWallet) {
    return <WaitingLoader />;
  } else {
    return (
      <div className="p-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="lg:flex items-center">
            <BsArrowLeft size={30} className="cursor-pointer" onClick={() => navigate(-1)} />
            <div className="font-semibold ml-3 text-lg">{"Wade Warren's Wallet"}</div>
            <div className="min-w-[200px]">
              <SearchComponent keyword={keyword} setKeyword={setKeyword} />
            </div>
          </div>
          <div className="flex items-center gap-3">
            {riderWallet?.length > 0 && (
              <div className="mr-3">
                <ExportComponent />
              </div>
            )}
            <div>
              <NewFilter
                direction="start"
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

        <div className="mt-6 mb-8">
          <RiderWalletSumaryCards ridereWalletDetails={ridereWalletDetails} riderWalletBalance={{}} riderInOutflow={riderInOutflow} userDetails={{}} userType={props.riderType} mode={mode} />
        </div>

        <div className="flex mt-4 cursor-pointer">
          {["Inflow", "Outflow"].map((item) => (
            <div key={item} className={`px-3 py-1 rounded mr-2 ${item === mode ? "bg-green py-2 text-white font-semibold" : "bg-light-green py-2"}`} onClick={() => setMode(item)}>
              {item}
            </div>
          ))}
        </div>

        <div className="mt-4">
          {riderWallet?.length === 0 && <EmptyPage text="No Transactions" />}

          {riderWallet?.length > 0 && (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-blue-4 font-bold ">
                      <th className="table-th">Description</th>
                      <th className="table-th">Transaction ID</th>
                      <th className="table-th">Amount</th>
                      <th className="table-th">Actual Amount</th>
                      <th className="table-th">Date</th>
                      <th className="table-th">Payment Method</th>
                      <th className="table-th">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mode === "Inflow" ? (
                      <>
                        {riderWallet
                          .filter((item) => item.amount > 0)
                          .map((item) => (
                            <tr key={item.transaction_id} className="cursor-pointer hover:bg-light-green">
                              <td className=" py-4 whitespace-nowrap">{item.description}</td>
                              <td className=" py-4 whitespace-nowrap">{item.reference}</td>
                              <td className="py-4 whitespace-nowrap">₦{item.amount.toLocaleString()}</td>
                              <td className="py-4 whitespace-nowrap">₦{item.actual_amount.toLocaleString()}</td>
                              <td className="py-4 whitespace-nowrap">{formatTime(item.createdAt).fullDateTime}</td>
                              <td className="py-4 whitespace-nowrap capitalize">{item.payment_method}</td>
                              <td className={`py-4 whitespace-nowrap font-semibold ${getWalletStatusColor(item.status)}`}>{getWalletStatus(item.status)}</td>
                            </tr>
                          ))}
                      </>
                    ) : mode === "Outflow" ? (
                      <>
                        {riderWallet
                          .filter((item) => item.amount < 0)
                          .map((item) => (
                            <tr key={item.transaction_id} className="cursor-pointer hover:bg-light-green">
                              <td className="py-4 whitespace-nowrap">{item.description}</td>
                              <td className="py-4 whitespace-nowrap">{item.reference}</td>
                              <td className="py-4 whitespace-nowrap">₦{item.amount.toLocaleString()}</td>
                              <td className="py-4 whitespace-nowrap">₦{item.actual_amount.toLocaleString()}</td>
                              <td className="py-4 whitespace-nowrap">{formatTime(item.createdAt).fullDateTime}</td>
                              <td className="py-4 whitespace-nowrap capitalize">{item.payment_method}</td>
                              <td className={`py-4 whitespace-nowrap font-bold ${getWalletStatusColor(item.status)}`}>{getWalletStatus(item.status)}</td>
                            </tr>
                          ))}
                      </>
                    ) : (
                      <>
                        {riderWallet.map((item) => (
                          <tr key={item.transaction_id} className="cursor-pointer hover:bg-green-50">
                            <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap">₦{item.amount.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap">₦{item.actual_amount.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{formatTime(item.createdAt).fullDateTime}</td>
                            <td className="px-6 py-4 whitespace-nowrap capitalize">{item.payment_method}</td>
                            <td className={`px-6 py-4 whitespace-nowrap font-bold ${getWalletStatusColor(item.status)}`}>{getWalletStatus(item.status)}</td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </table>
              </div>

              {riderWallet?.length > 0 && (
                <div className="mt-6">
                  <TableBase itemsCount={riderWalletCount} currentPage={currentPage} paginate={onPaginate} />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
};

export default RiderWallet;
