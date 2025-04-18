import { ObjectType } from "@/types/global.types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
// import { useQuery } from "react-query";
// import { Card, CardTitle, Modal, ModalBody } from "reactstrap";
// import ExportComponent from "../../../../../components/shared/exportComponent";

const DownloadsByLga = () => {
  //   const [order, setOrder] = useState("Descending");
  const [mode, setMode] = useState("LGA");
  const [modalOpen, setModalOpen] = useState(false);
  //   const { getUserStatsToast } = useUsersApiService();

  //   const { data: downloadsData } = useQuery([queryKeys.userDownloadsByLga], () => getUserStatsToast({ user_type: "rider", request_type: "download-lga" }), {
  //     select: (data) => data?.data,
  //   });

  //   const { refetch: exportDownloads } = useQuery([queryKeys.userDownloads], () => getUserStatsToast({ user_type: "rider", request_type: "download-lga", component: "export" }), {
  //     select: (data) => data?.data,
  //     enabled: false,
  //   });

  //   const lgas = downloadsData?.map((item: ObjectType) => ({
  //     name: item?.lga,
  //     number: item?.data?.reduce((partialSum: number, a: ObjectType) => partialSum + a.total, 0),
  //   }));

  //   const areas = downloadsData
  //     ?.map((item: ObjectType) => {
  //       return item?.data?.map((innerItem: ObjectType) => ({ name: innerItem?.area_name, number: innerItem?.total }));
  //     })
  //     .flat();

  const lgas = [
    { name: "Agege", number: 738 },
    { name: "Ajeromi-Ifelodun", number: 451 },
    { name: "Alimosho", number: 902 },
    { name: "Amuwo-Odofin", number: 317 },
    { name: "Apapa", number: 665 },
    { name: "Badagry", number: 234 },
    { name: "Epe", number: 598 },
    { name: "Eti-Osa", number: 781 },
    { name: "Ibeju-Lekki", number: 487 },
    { name: "Ifako-Ijaiye", number: 303 },
    { name: "Ikeja", number: 645 },
    { name: "Ikorodu", number: 829 },
    { name: "Kosofe", number: 559 },
    { name: "Lagos Island", number: 724 },
    { name: "Lagos Mainland", number: 432 },
    { name: "Mushin", number: 911 },
    { name: "Ojo", number: 295 },
    { name: "Oshodi-Isolo", number: 689 },
    { name: "Shomolu", number: 516 },
    { name: "Surulere", number: 368 },
  ];
  const areas = [
    { name: "Lekki", number: 845 },
    { name: "Ikoyi", number: 392 },
    { name: "Victoria Island", number: 734 },
    { name: "Yaba", number: 501 },
    { name: "Surulere", number: 298 },
    { name: "Ajah", number: 689 },
    { name: "Ikeja", number: 913 },
    { name: "Maryland", number: 176 },
    { name: "Ogba", number: 852 },
    { name: "Ojota", number: 240 },
    { name: "Gbagada", number: 476 },
    { name: "Magodo", number: 707 },
    { name: "Oshodi", number: 358 },
    { name: "Mushin", number: 927 },
    { name: "Agege", number: 111 },
    { name: "Iyana Ipaja", number: 864 },
    { name: "Egbeda", number: 623 },
    { name: "Ojodu", number: 215 },
    { name: "Apapa", number: 346 },
    { name: "Festac", number: 572 },
    { name: "Okota", number: 703 },
    { name: "Isolo", number: 487 },
    { name: "Ijesha", number: 154 },
    { name: "Amuwo-Odofin", number: 602 },
    { name: "Ojo", number: 738 },
    { name: "Aguda", number: 124 },
    { name: "Bariga", number: 681 },
    { name: "Ilupeju", number: 559 },
    { name: "Alimosho", number: 334 },
    { name: "Abule Egba", number: 919 },
  ];

  const readData = mode === "LGA" ? lgas : areas;

  const UiComponent = ({ modal }: { modal: boolean }) => {
    const truncated = modal ? readData : readData?.slice(0, 5);
    return (
      <div className="flex flex-col h-full p-4 rounded-xl">
        <div className="flex justify-between w-full">
          <div className="font-semibold">Riders Download By LGA</div>
          <div className="ml-4 flex">
            <button className={`px-2 py-1 rounded text-xs ${mode === "LGA" ? "bg-green text-white" : "bg-light-green"}`} onClick={() => setMode("LGA")}>
              LGA
            </button>
            <button className={`px-2 py-1 rounded text-xs ${mode === "Area" ? "bg-green text-white" : "bg-light-green"}`} onClick={() => setMode("Area")}>
              Area
            </button>
          </div>
        </div>
        {/* <div className="flex items-center mt-1">
          <div className="flex items-center cursor-pointer" onClick={() => setOrder(order === "Descending" ? "Ascending" : "Descending")}>
            <CgArrowsExchangeAltV className="text-[rgba(0,208,168,0.8)] w-4 h-4" />
            <span className="ml-1 text-sm">{order}</span>
          </div>
        </div> */}

        <div className="flex flex-col justify-between flex-grow mt-5">
          <div className="space-y-3">
            {truncated?.map((item: ObjectType) => (
              <div key={item?.name} className="flex items-center justify-between hover:bg-gray-50 p-1 rounded">
                <div className="flex items-center">
                  <TiLocation className="text-grey-dark-3 w-5 h-5" />
                  <span className="ml-3 text-sm">{item?.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm">{item.number}</span>
                  <MdArrowForwardIos className="ml-2 text-[rgba(113,147,156,1)] w-2 h-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="">
            <div className="flex mt-2 justify-between font-bold px-1">
              <span className="text-sm">Total</span>
              <span className="text-sm">{readData?.reduce((partialSum: number, a: ObjectType) => partialSum + a?.number, 0)}</span>
            </div>
            {readData?.length > 6 && (
              <button className="mt-5 px-2 py-1 rounded text-sm font-semibold bg-light-green hover:bg-gray-100 transition-colors" onClick={() => setModalOpen(!modalOpen)}>
                {modal ? "See less" : "See more"}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Main Card */}
      <div className="bg-white border rounded-lg shadow-sm h-full">
        <UiComponent modal={false} />
      </div>

      {/* Modal */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="bg-white rounded-lg  max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto z-50">
          <DialogPanel>
            <UiComponent modal={true} />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
export default DownloadsByLga;
