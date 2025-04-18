import NewFilter from "@/components/utilities/filterComponents/NewFilter";
import EmptyPage from "@/components/utilities/table/EmptyPage";
import RidersLayout from "@/pages/users/riders/components/RidersLayout";
import { useState } from "react";
// import { useQuery } from "react-query";
// import { Table } from "reactstrap";
import ExportComponent from "@/components/utilities/filterComponents/ExportComponent";
import TableBase from "@/components/utilities/table/TableBase";
import WaitingLoader from "@/components/utilities/table/WaitingLoader";
// import queryKeys from "../../../../constants/queryKeys";
// import { usePaginationHelper } from "../../../../helpers/paginationHelper";
// import { useQueryStringHelper } from "../../../../helpers/queryStringHelper";
// import { useRiderApiService } from "../../../../services/ridersService";
// import { getKycStatusFromRiderType, getRiderType } from "../helpers/strings";
import { TableAction } from "@/components/core";
import SearchComponent from "@/components/utilities/table/SearchComponent";
import { calculatePostDate } from "@/helepers/dateTimeHelper";
import { usePaginationHelper } from "@/helepers/paginationHelper";
import { useQueryStringHelper } from "@/helepers/queryStringHelper";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

// type Props = {
//   riderType: string;
//   setActiveTab: Dispatch<SetStateAction<string>>;
//   setActiveId: Dispatch<SetStateAction<string>>;
//   areaSearch: { area: string; lga: string };
// };

const RidersLog = () => {
  // const { attachQueryStringToUrl } = useQueryStringHelper();
  // const { riderType, setActiveTab, setActiveId, areaSearch } = props;
  const [toggled, setToggled] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { getPageNoFromQueryString } = useQueryStringHelper();
  const [currentPage, setCurrentPage] = useState(getPageNoFromQueryString());
  const [keyword, setKeyword] = useState("");
  const [isLoading] = useState(false);
  const [filterState, setFilterState] = useState({
    startDate,
    endDate,
  });

  console.log(filterState);
  const navigate = useNavigate();

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

  // const { isLoading, data: riders } = useQuery(
  //   [queryKeys.allRiders, currentPage, keyword, filterState],
  //   () =>
  //     getRidersToast({
  //       page: currentPage,
  //       q: keyword,
  //       start_date: startDate,
  //       end_date: endDate,
  //       kyc_status: getKycStatusFromRiderType(riderType),
  //       registration_lga: areaSearch.lga,
  //       registration_area: areaSearch.area,
  //     }),
  //   {
  //     select: (data: ObjectType) => data?.data,
  //     keepPreviousData: true,
  //   }
  // );
  // const { data: ridersCount } = useQuery(
  //   [queryKeys.allRidersCount, currentPage, keyword, filterState],
  //   () =>
  //     getRidersToast({
  //       page: currentPage,
  //       q: keyword,
  //       start_date: startDate,
  //       end_date: endDate,
  //       kyc_status: getKycStatusFromRiderType(riderType),
  //       registration_lga: areaSearch.lga,
  //       registration_area: areaSearch.area,
  //       component: "count",
  //     }),
  //   {
  //     select: (data: ObjectType) => data?.data?.total || 0,
  //     keepPreviousData: true,
  //   }
  // );
  // const { refetch: exportRiders } = useQuery(
  //   [queryKeys.userExport, currentPage, keyword, filterState],
  //   () =>
  //     getRidersToast({
  //       page: currentPage,
  //       q: keyword,
  //       start_date: startDate,
  //       end_date: endDate,
  //       kyc_status: getKycStatusFromRiderType(riderType),
  //       registration_lga: areaSearch.lga,
  //       registration_area: areaSearch.area,
  //       component: "export",
  //     }),
  //   {
  //     select: (data: ObjectType) => data?.data?.total || 0,
  //     keepPreviousData: true,
  //     enabled: false,
  //   }
  // );

  const onApply = () => {
    setFilterState({ startDate, endDate });
    handleToggle();
  };

  // Dummy Data
  const riders = [
    {
      auth_id: "1",
      createdAt: "2025-04-10T09:00:00Z",
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@email.com",
      phone_number: "08012345601",
      trip_data: { total_completed: 12, total_cancelled: 10, total_dnf: 5 },
    },
    {
      auth_id: "2",
      createdAt: "2025-04-09T10:30:00Z",
      first_name: "Jane",
      last_name: "Smith",
      email: "jane.smith@email.com",
      phone_number: "08012345602",
      trip_data: { total_completed: 8 },
    },
    {
      auth_id: "3",
      createdAt: "2025-04-08T14:15:00Z",
      first_name: "Victor",
      last_name: "Ike",
      email: "victor.ike@email.com",
      phone_number: "08012345603",
      trip_data: { total_completed: 20 },
    },
    {
      auth_id: "4",
      createdAt: "2025-04-07T18:45:00Z",
      first_name: "Chioma",
      last_name: "Ade",
      email: "chioma.ade@email.com",
      phone_number: "08012345604",
      trip_data: { total_completed: 5 },
    },
    {
      auth_id: "5",
      createdAt: "2025-04-06T08:00:00Z",
      first_name: "Emeka",
      last_name: "Obi",
      email: "emeka.obi@email.com",
      phone_number: "08012345605",
      trip_data: { total_completed: 18 },
    },
    {
      auth_id: "6",
      createdAt: "2025-04-05T12:20:00Z",
      first_name: "Fatima",
      last_name: "Bello",
      email: "fatima.bello@email.com",
      phone_number: "08012345606",
      trip_data: { total_completed: 14 },
    },
    {
      auth_id: "7",
      createdAt: "2025-04-04T16:35:00Z",
      first_name: "Kelechi",
      last_name: "Eze",
      email: "kelechi.eze@email.com",
      phone_number: "08012345607",
      trip_data: { total_completed: 10 },
    },
    {
      auth_id: "8",
      createdAt: "2025-04-03T11:10:00Z",
      first_name: "Blessing",
      last_name: "Usman",
      email: "blessing.usman@email.com",
      phone_number: "08012345608",
      trip_data: { total_completed: 9 },
    },
    {
      auth_id: "9",
      createdAt: "2025-04-02T15:25:00Z",
      first_name: "Tunde",
      last_name: "Lawal",
      email: "tunde.lawal@email.com",
      phone_number: "08012345609",
      trip_data: { total_completed: 7 },
    },
    {
      auth_id: "10",
      createdAt: "2025-04-01T13:50:00Z",
      first_name: "Ada",
      last_name: "Nwachukwu",
      email: "ada.nwachukwu@email.com",
      phone_number: "08012345610",
      trip_data: { total_completed: 16 },
    },
    {
      auth_id: "11",
      createdAt: "2025-03-31T17:40:00Z",
      first_name: "David",
      last_name: "Okoro",
      email: "david.okoro@email.com",
      phone_number: "08012345611",
      trip_data: { total_completed: 11 },
    },
    {
      auth_id: "12",
      createdAt: "2025-03-30T09:25:00Z",
      first_name: "Gloria",
      last_name: "Ahmed",
      email: "gloria.ahmed@email.com",
      phone_number: "08012345612",
      trip_data: { total_completed: 19 },
    },
    {
      auth_id: "13",
      createdAt: "2025-03-29T10:45:00Z",
      first_name: "Kelvin",
      last_name: "George",
      email: "kelvin.george@email.com",
      phone_number: "08012345613",
      trip_data: { total_completed: 13 },
    },
    {
      auth_id: "14",
      createdAt: "2025-03-28T14:55:00Z",
      first_name: "Rita",
      last_name: "Ibrahim",
      email: "rita.ibrahim@email.com",
      phone_number: "08012345614",
      trip_data: { total_completed: 6 },
    },
    {
      auth_id: "15",
      createdAt: "2025-03-27T19:10:00Z",
      first_name: "Ifeanyi",
      last_name: "Umeh",
      email: "ifeanyi.umeh@email.com",
      phone_number: "08012345615",
      trip_data: { total_completed: 22 },
    },
    {
      auth_id: "16",
      createdAt: "2025-03-26T08:30:00Z",
      first_name: "Ngozi",
      last_name: "Mohammed",
      email: "ngozi.mohammed@email.com",
      phone_number: "08012345616",
      trip_data: { total_completed: 17 },
    },
    {
      auth_id: "17",
      createdAt: "2025-03-25T12:00:00Z",
      first_name: "Samuel",
      last_name: "Ogundele",
      email: "samuel.ogundele@email.com",
      phone_number: "08012345617",
      trip_data: { total_completed: 15 },
    },
    {
      auth_id: "18",
      createdAt: "2025-03-24T16:00:00Z",
      first_name: "Zainab",
      last_name: "Aliyu",
      email: "zainab.aliyu@email.com",
      phone_number: "08012345618",
      trip_data: { total_completed: 4 },
    },
    {
      auth_id: "19",
      createdAt: "2025-03-23T10:00:00Z",
      first_name: "Chuka",
      last_name: "Nwosu",
      email: "chuka.nwosu@email.com",
      phone_number: "08012345619",
      trip_data: { total_completed: 21 },
    },
    {
      auth_id: "20",
      createdAt: "2025-03-22T13:00:00Z",
      first_name: "Yetunde",
      last_name: "Balogun",
      email: "yetunde.balogun@email.com",
      phone_number: "08012345620",
      trip_data: { total_completed: 3 },
    },
  ];

  const ridersCount = riders.length;

  return (
    <RidersLayout>
      {isLoading && <WaitingLoader />}
      {!isLoading && (
        <>
          <div className="flex justify-between items-center gap-4">
            {/* <CountComponent text={`${ridersCount} riders`} /> */}
            <div className="flex items-center">
              <div className="font-bold capitalize whitespace-nowrap text-lg ">All Riders</div>
              <SearchComponent keyword={keyword} setKeyword={setKeyword} />
            </div>
            <div className="flex items-center gap-3">
              {riders?.length > 0 && <ExportComponent onClick={() => null} />}
              <NewFilter
                direction="start"
                toggleComponent={
                  <TableAction theme="secondary">
                    <Icon icon="ion:funnel" className="size-3" />
                    Date
                  </TableAction>
                }
                toggled={toggled}
                handleToggle={handleToggle}
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                onApply={onApply}
              />
            </div>
          </div>

          <div className="mt-4">
            {riders?.length === 0 && <EmptyPage text="No Riders" />}
            {riders?.length > 0 && (
              <div className="overflow-x-auto rounded-md">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="bg-[#F5FBFD] font-bold ">
                      <th className="table-th">Date & Time of Reg.</th>
                      <th className="table-th">Name</th>
                      <th className="table-th">Email Address</th>
                      <th className="table-th">Phone Number</th>
                      <th className="table-th">Completed Trips</th>
                      <th className="table-th">Cancelled Trips</th>
                      <th className="table-th">Driver N/founds</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {riders.map((item, index) => (
                      <tr key={index} className="cursor-pointer hover:bg-light-green whitespace-nowrap" onClick={() => navigate(`/user/riders/${item.auth_id}`)}>
                        <td className="px-2 py-4">{calculatePostDate(item.createdAt)}</td>
                        <td className="px-2 py-4">
                          {item?.first_name} {item?.last_name}
                        </td>
                        <td className="px-2 py-4">{item?.email}</td>
                        <td className="px-2 py-4">{item?.phone_number}</td>
                        <td className="px-2 py-4">{item?.trip_data?.total_completed || 0}</td>
                        <td className="px-2 py-4">{item?.trip_data?.total_cancelled || 0}</td>
                        <td className="px-2 py-4">{item?.trip_data?.total_dnf || 0}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {riders?.length > 0 && (
              <div className="mt-4">
                <TableBase itemsCount={ridersCount} currentPage={currentPage} paginate={onPaginate} />
                {/* <div className="flex justify-between items-center mt-4 flex-wrap">
                  <div className="mt-2">
                    <TableDataCounter item={riders} currentPage={currentPage} totalCount={ridersCount} />
                  </div>
                  <div className="mt-2">
                    <PaginationComponent activePage={currentPage} itemsCountPerPage={50} totalItemsCount={ridersCount} onChange={onPaginate} />
                  </div>
                </div> */}
              </div>
            )}
          </div>
        </>
      )}
    </RidersLayout>
  );
};

export default RidersLog;
