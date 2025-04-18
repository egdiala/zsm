import EmptyPage from "@/components/utilities/table/EmptyPage";
import TableBase from "@/components/utilities/table/TableBase";
import WaitingLoader from "@/components/utilities/table/WaitingLoader";
import { formatTime } from "@/helepers/dateTimeHelper";
import { usePaginationHelper } from "@/helepers/paginationHelper";
import { useQueryStringHelper } from "@/helepers/queryStringHelper";
import { ObjectType } from "@/types/global.types";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// type declaration

type Props = {
  riderType?: any;
  setActiveTab?: any;
  riderDetails?: {
    [key: string]: any;
  };
};

const RiderTripRating = (props: Props) => {
  const { riderDetails } = props;
  const { getPageNoFromQueryString } = useQueryStringHelper();
  const [currentPage, setCurrentPage] = useState(getPageNoFromQueryString());
  //   const { getTripRatingsToast } = useTripsApiService();
  const [isLoading] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [viewedRating, setViewedRating] = useState<ObjectType | null>(null);

  console.log(modalOpen, viewedRating);
  const { paginate } = usePaginationHelper();
  const onPaginate = (pageNumber: number) => {
    paginate({
      pageNumber,
      setCurrentPage,
      // callbackFunction: null,
    });
  };
  console.log(riderDetails);
  const navigate = useNavigate();

  //   const { isLoading, data: ratings } = useQuery(
  //     [queryKeys.ratings, currentPage, riderDetails],
  //     () =>
  //       getTripRatingsToast({
  //         page: currentPage,
  //         user_type: "rider",
  //         auth_id: riderDetails?.auth_id,
  //       }),
  //     {
  //       select: (data) => data?.data,
  //       keepPreviousData: true,
  //     }
  //   );

  //   const { isLoading: isLoadingForCount, data: ratingsCount } = useQuery(
  //     [queryKeys.ratingsCount, currentPage, riderDetails],
  //     () =>
  //       getTripRatingsToast({
  //         page: currentPage,
  //         user_type: "rider",
  //         auth_id: riderDetails?.auth_id,
  //         component: "count",
  //       }),
  //     {
  //       select: (data) => data?.data[0]?.total || 0,
  //     }
  //   );

  //   const { isLoading: isLoadingForAvg, data: ratingsAvg } = useQuery(
  //     [queryKeys.ratingsAverage, currentPage, riderDetails],
  //     () =>
  //       getTripRatingsToast({
  //         page: currentPage,
  //         user_type: "rider",
  //         auth_id: riderDetails?.auth_id,
  //         component: "avg",
  //       }),
  //     {
  //       select: (data) => data?.data[0]?.avg || 0,
  //     }
  //   );

  const ratings = [
    {
      _id: "1",
      createdAt: new Date(),
      sender_data: { first_name: "Wade", last_name: "Warren" },
      rating: 5,
      trip_id: "24268958966660",
    },
    {
      _id: "2",
      createdAt: new Date(),
      sender_data: { first_name: "Wade", last_name: "Warren" },
      rating: 5,
      trip_id: "24268958966660",
    },
    {
      _id: "3",
      createdAt: new Date(),
      sender_data: { first_name: "Wade", last_name: "Warren" },
      rating: 5,
      trip_id: "24268958966660",
    },
    {
      _id: "4",
      createdAt: new Date(),
      sender_data: { first_name: "Wade", last_name: "Warren" },
      rating: 5,
      trip_id: "24268958966660",
    },
    {
      _id: "5",
      createdAt: new Date(),
      sender_data: { first_name: "Wade", last_name: "Warren" },
      rating: 5,
      trip_id: "24268958966660",
    },
    {
      _id: "6",
      createdAt: new Date(),
      sender_data: { first_name: "Wade", last_name: "Warren" },
      rating: 5,
      trip_id: "24268958966660",
    },
    {
      _id: "7",
      createdAt: new Date(),
      sender_data: { first_name: "Wade", last_name: "Warren" },
      rating: 5,
      trip_id: "24268958966660",
    },
  ];

  const ratingsCount = 600;

  if (isLoading) {
    return <WaitingLoader />;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between flex-wrap">
        <div className="lg:flex items-center">
          <BsArrowLeft size={30} className="cursor-pointer" onClick={() => navigate(-1)} />
          <div className="font-semibold ml-3 text-lg">{"Wade Warren's Wallet"}</div>
        </div>
      </div>

      <div className="mt-2">
        <div className="bg-[#fcf7ea] h-28 rounded p-4 flex items-center justify-between w-full max-w-sm">
          <div className="flex items-center">
            <div className="bg-[#f7f0d5] p-2 rounded">
              <AiFillStar className="text-yellow-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-grey-dark-1">Total Rating Received</p>
              <h5 className="text-grey-dark-1 font-bold mt-1">{ratingsCount}</h5>
            </div>
          </div>
        </div>
      </div>

      <div>
        {ratings?.length === 0 && <EmptyPage text="No Ratings" />}

        {ratings?.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-blue-4 text-left">
                  <th className="px-2 py-4">Date</th>
                  <th className="px-2 py-4">Sender's Name</th>
                  <th className="px-2 py-4">Rating</th>
                  <th className="px-2 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {ratings.map((item: any) => (
                  //  key={index}
                  //       className="cursor-pointer hover:bg-light-green"
                  //       onClick={() => {
                  //         setTripId(item.trip_id);
                  //         setViewedTrip(item);
                  //       }}

                  <tr key={item._id} className=" hover:bg-light-green">
                    <td className="px-2 py-4">{formatTime(item.createdAt).fullDate}</td>
                    <td className="px-2 py-4">{`${item?.sender_data?.first_name} ${item?.sender_data?.last_name}`}</td>
                    <td className="px-2 py-4 flex items-center space-x-1">
                      {Array.from({ length: item?.rating }).map((_, index) => (
                        <AiFillStar key={index} className="text-yellow-500" />
                      ))}
                    </td>
                    <td
                      className="px-4 py-2 cursor-pointer"
                      onClick={() => {
                        setViewedRating(item);
                        setModalOpen(true);
                      }}
                    >
                      See Details
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {ratings?.length > 0 && (
          <div className="mt-6">
            <TableBase itemsCount={ratingsCount} currentPage={currentPage} paginate={onPaginate} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RiderTripRating;
