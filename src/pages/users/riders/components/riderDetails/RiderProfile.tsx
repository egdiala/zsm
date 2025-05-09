import EditComponent from "@/components/utilities/buttonComponents/EditComonent";
import { default as GradientButton, default as GreenButton } from "@/components/utilities/inputComponents/GreenButton";
import RedButton from "@/components/utilities/inputComponents/RedButton";
import { getTodayDate } from "@/helepers/dateTimeHelper";
import { cn } from "@/libs/cn";
import ContactInfo from "@/pages/users/riders/components/riderDetails/profile/Contactinfo";
import FavouriteLocations from "@/pages/users/riders/components/riderDetails/profile/FavouriteLocations";
import OtherInfo from "@/pages/users/riders/components/riderDetails/profile/OtherInfo";
import Verification from "@/pages/users/riders/components/riderDetails/profile/Verification";
import { suspensionReasonsRider } from "@/pages/users/riders/daata/options";
import { ReactChangeEventType } from "@/types/global.types";
import { Field, Input, Label, Textarea } from "@headlessui/react";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowLeft, BsExclamationDiamondFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router";
// import ContactInfo from "./riderDetailsComponents/profileCards/contactInfo";
// import FavouriteLocations from "./riderDetailsComponents/profileCards/favouriteLocations";
// import OtherInfo from "./riderDetailsComponents/profileCards/otherInfo";
// import Verification from "./riderDetailsComponents/profileCards/verification";

type Props = {
  riderDetails: {
    [key: string]: any;
  };
};

const RiderProfile = ({ riderDetails }: Props) => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [suspensionModalOpen, setSuspensionModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [data, setData] = useState({
    firstName: riderDetails?.first_name,
    lastName: riderDetails?.last_name,
    profilePicture: riderDetails?.avatar,
  });
  const [suspensionData, setSuspensionData] = useState({
    suspensionReason: "",
    details: "",
    reactivationDate: "",
  });
  const { firstName, lastName } = data || {};
  const { suspensionReason, details, reactivationDate } = suspensionData;
  // const { deleteModalConfig } = useContext(AppPrefrenceContext);
  const [isIndefinite, setIsIndefinite] = useState(false);
  // const { uploadFileToast } = UseFileUploadService();
  // const { updateUserToast, deleteUserToast, updateUserStatusToast } = useUsersApiService();
  // const { postLoading } = useContext(LoadingContext) || {};
  const [deletionReason, setDeletionReason] = useState("");
  // const queryClient = useQueryClient();

  // const uploadFileMutation = useMutation(uploadFileToast, {
  //   onSuccess: (res) => {
  //     setData({ ...data, profilePicture: res?.data?.url });
  //   },
  // });
  // const updateUserMutation = useMutation(updateUserToast, {
  //   onSuccess: (res) => {
  //     queryClient.invalidateQueries(queryKeys.riderDetails);
  //     setSuspensionModalOpen(false);
  //   },
  // });

  useEffect(() => {
    setData({
      firstName: riderDetails?.first_name,
      lastName: riderDetails?.last_name,
      profilePicture: "",
    });
  }, [riderDetails]);

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0].size / 1024 > 500) {
      alert("File size too large");
    } else if (e.target.files) {
      const body = new FormData();
      body.append("photo", e.target.files[0]);
      // uploadFileMutation.mutate({ body, auth_id: riderDetails?.auth_id });
    }
  };

  const handleToggle = () => {
    setModalOpen((prev) => !prev);
    setDeletionReason("");
  };

  const handleSuspensionToggle = () => {
    setSuspensionModalOpen((prev) => !prev);
    setSuspensionData({
      suspensionReason: "",
      details: "",
      reactivationDate: "",
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleChangeSuspension = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSuspensionData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   updateUserMutation.mutate({
  //     auth_id: riderDetails?.auth_id,
  //     first_name: firstName,
  //     last_name: lastName,
  //     avatar: profilePicture,
  //   });
  // };

  // const deleteUserMutation = useMutation(deleteUserToast, {
  //   onSuccess: async (res) => {
  //     if (res.data.status !== "error") {
  //       queryClient.invalidateQueries(queryKeys.allRiders);
  //       queryClient.invalidateQueries(queryKeys.verifiedRiders);
  //       queryClient.invalidateQueries(queryKeys.unverifiedRiders);
  //       setActiveTab && setActiveTab("Rider's Log");
  //     }
  //     setDeleteModalOpen(false);
  //   },
  // });
  // const updateUserStatusMutation = useMutation(updateUserStatusToast, {
  //   onSuccess: async (res) => {
  //     if (res.data.status !== "error") {
  //       queryClient.invalidateQueries(queryKeys.riderDetails);
  //     }
  //     setSuspensionModalOpen(false);
  //   },
  // });

  // useEffect(() => {
  //   setBreadCrumbData(["Riders", "Riders Log", `${riderDetails?.first_name} ${riderDetails?.last_name}'s Profile`]);
  // }, [riderDetails]);

  // const handleSuspensionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setSuspensionModalOpen(false);
  //   deleteModalConfig({
  //     type: "suspend",
  //     firstText: `Suspend  ${riderDetails?.first_name} ${riderDetails?.last_name}`,
  //     secondText: `This action would suspend  ${riderDetails?.first_name} ${riderDetails?.last_name} from the portal.`,
  //     callback: () => {
  //       updateUserStatusMutation.mutate({
  //         auth_id: riderDetails.auth_id,
  //         suspend_reason: suspensionReason,
  //         unsuspend_date: reactivationDate,
  //         user_type: "rider",
  //         status: "2",
  //       });
  //     },
  //   });
  // };

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center">
          <BsArrowLeft size={30} className="cursor-pointer" onClick={() => navigate(-1)} />
          <div className="font-semibold ml-3 text-lg">{"Wade Warren’s Profile's Profile"}</div>
        </div>
        <div className="flex items-center">
          <RedButton text="Delete Rider" className="py-2" leftIcon={<RiDeleteBin6Line />} onClick={() => setDeleteModalOpen(true)} />
          <GradientButton
            text={riderDetails?.status !== 2 ? "Suspend Rider" : " Reactivate Rider"}
            className="py-2.5 ms-2"
            leftIcon={<BsExclamationDiamondFill />}
            onClick={() => {
              setSuspensionModalOpen(true);

              // riderDetails?.status !== 2;
              // ? setSuspensionModalOpen(true)
              // : deleteModalConfig({
              //     type: "re-activate",
              //     firstText: `Reactivate  ${riderDetails?.first_name} ${riderDetails?.last_name}`,
              //     secondText: `This action would reactivate  ${riderDetails?.first_name} ${riderDetails?.last_name}.`,
              //     callback: () =>
              //       updateUserStatusMutation.mutate({
              //         auth_id: riderDetails.auth_id,
              //         user_type: "rider",
              //         status: "1",
              //       }),
              //   });
            }}
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="bg-[#F2F9FE] mt-3 p-4 rounded-lg shadow-sm flex justify-between">
          <div className="items-center px-3 pb-3  grid grid grid-cols-9 gap-4 whitespace-nowrap">
            <div className="col-span-4 lg:col-span-1 rounded-full bg-gray-200 overflow-hidden mr-2 flex items-center justify-center w-16 h-16">
              {/* {riderDetails?.avatar ? <img alt="avatar" src={riderDetails.avatar } className="w-full h-full object-cover" /> : <FaUser className="text-gray-100" size={30} />} */}
              <img alt="avatar" src="/leaderboard/avatar1.svg" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-9 md:col-span-4 lg:col-span-2 ml-3">
              <div className="text-sm">Rider's Name</div>
              <div className="font-medium mt-1">Wade Warren</div>
              <div className="">{/* {riderDetails?.first_name} {riderDetails?.last_name} */}</div>
            </div>
            <div className="ml-3 col-span-9 md:col-span-4 lg:col-span-2">
              <div className="text-sm">Carbon Identity Number</div>
              <div className="font-medium mt-1">23 64 13a</div>
            </div>
            <div className="ml-3 col-span-9 md:col-span-4 lg:col-span-2">
              <div className="text-sm">Carbon credit</div>
              <div className="font-medium mt-1">2,000</div>
            </div>
            <div className="ml-2 col-span-9 md:col-span-4 lg:col-span-1">
              <div className="text-sm">Carbon badge</div>
              <img alt="badge" src="/svgs/leaderboard/badge-pink.svg" className="w-6 h-6 mt-1" />
            </div>
          </div>
          <div className="text-right">
            <EditComponent onClick={() => setModalOpen(true)} />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <ContactInfo riderDetails={riderDetails} />
      </div>
      <div className="mt-3">
        <Verification riderDetails={riderDetails} />
      </div>
      <div className="mt-3">
        <FavouriteLocations riderDetails={riderDetails} />
      </div>
      <div className="mt-3">
        <OtherInfo riderDetails={riderDetails} />
      </div>
      {/* Edit Profile Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold">Edit Henry Cane Profile</div>
              <AiOutlineClose size={20} className="cursor-pointer" onClick={handleToggle} />
            </div>
            <form onSubmit={() => null}>
              <div className="mb-4">
                <Field className="col-span-12">
                  <Label className="block mb-1 text-gray-dark-2 text-sm">First Name</Label>
                  <Input id="firstName" name="firstName" placeholder="Enter First Name" type="text" className={clsx("input-styles", "w-full")} value={firstName} onChange={handleChange} />
                </Field>
              </div>

              <div className="mb-4">
                <Field className="col-span-12">
                  <Label className="block mb-1 text-gray-dark-2">Last Name</Label>
                  <Input id="lastName" name="lastName" placeholder="Enter Last Name" type="text" className={clsx("input-styles", "w-full")} value={lastName} onChange={handleChange} />
                </Field>
              </div>

              <div className="mb-4">
                {/* <Field className="col-span-12">
                  <Label className="block mb-2 w-full">Profile Picture</Label>
                  <input id="pp" name="pp" type="file" className="hidden" onChange={uploadFile} />
                  <FileReplacement />
                </Field> */}
                <FileUploader onChange={uploadFile} name="file" accept types={["csv"]}>
                  <label htmlFor="file" className="text-grey-dark-2">
                    Profile Pic
                    <input
                      id="file"
                      type="file"
                      style={{ display: "none" }}
                      accept=".csv"
                      // onChange={fileChange}
                    />
                    <div className="w-full  mx-auto mt-2">
                      <div className="custom-dashed-box bg-[#FBFBF6] h-52 w-full rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <img src="/svgs/upload.svg" className="mx-auto" />
                          <p className="text-grey-brand text-xs mt-1 mb-2">Drag & drop file here or</p>
                          <span className="font-medium text-green underline cursor-pointer"> Select file</span>
                        </div>
                      </div>
                    </div>
                  </label>
                </FileUploader>
              </div>

              <div className="justify-end flex gap-4 mt-6 me-0">
                <GreenButton
                  text="Cancel"
                  className="bg-grey-dark-4 text-grey-dark-1 w-36"
                  onClick={() => {
                    setDeleteModalOpen(false);
                  }}
                />
                <GreenButton
                  text="Update Profile"
                  className="w-36"
                  onClick={() => {
                    setDeleteModalOpen(false);
                    // deleteModalConfig({
                    //   firstText: `Delete  ${riderDetails?.first_name} ${riderDetails?.last_name}`,
                    //   secondText: `This action would remove  ${riderDetails?.first_name} ${riderDetails?.last_name} from the portal and is irreversible.`,
                    //   callback: () =>
                    //     deleteUserMutation.mutate({
                    //       auth_id: riderDetails.auth_id,
                    //       reason: deletionReason,
                    //       user_type: "rider",
                    //     }),
                    // });
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Suspension Modal */}
      {suspensionModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold">Suspend [Rider Profile]?</div>
              <AiOutlineClose size={16} className="cursor-pointer" onClick={handleSuspensionToggle} />
            </div>
            <div className="text-gray-dark-2 text-sm mb-4">This action would remove [Rider profile] from the portal and is irreversible.</div>
            <form onSubmit={() => null}>
              <div className="mb-4">
                <Field className="col-span-12">
                  <select id="suspensionReason" name="suspensionReason" className={clsx("input-styles", "w-full")} value={suspensionReason} onChange={handleChangeSuspension}>
                    {suspensionReasonsRider.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="mb-4">
                <Field className="col-span-12">
                  <Textarea
                    id="details"
                    name="details"
                    rows={6}
                    placeholder="Details"
                    value={details}
                    className={clsx("input-styles", "resize-none")}
                    onChange={(e: ReactChangeEventType<HTMLTextAreaElement>) => setSuspensionData({ ...suspensionData, details: e.target.value })}
                  />
                </Field>
              </div>
              <div className="border border-[#CDCEDA] rounded-md p-2 flex justify-between items-center text-gray-500 mb-4">
                <span>Indefinite suspension</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={isIndefinite} onChange={() => setIsIndefinite((prev) => !prev)} />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green"></div>
                </label>
              </div>
              {!isIndefinite && (
                <div className="mb-4">
                  <Field className="col-span-12">
                    <Label className="text-grey-dark-2" htmlFor="reactivationDate">
                      Reactivation Date
                      <input id="reactivationDate" min={getTodayDate()} name="reactivationDate" type="date" className={cn("border-[#CDCEDA] rounded-md")} value={reactivationDate} onChange={handleChangeSuspension} />
                    </Label>
                  </Field>
                </div>
              )}
              <div className="justify-end flex gap-4 mt-10 me-0">
                <GreenButton
                  text="Cancel"
                  className="bg-grey-dark-4 text-grey-dark-1 w-36"
                  onClick={() => {
                    setSuspensionModalOpen(false);
                  }}
                />
                <GreenButton
                  text="Suspend"
                  className="w-36"
                  onClick={() => {
                    setSuspensionModalOpen(false);
                    // deleteModalConfig({
                    //   type: "suspend",
                    //   firstText: `Suspend  ${riderDetails?.first_name} ${riderDetails?.last_name}`,
                    //   secondText: `This action would suspend  ${riderDetails?.first_name} ${riderDetails?.last_name} from the portal.`,
                    //   callback: () => {
                    //     updateUserStatusMutation.mutate({
                    //       auth_id: riderDetails.auth_id,
                    //       suspend_reason: suspensionReason,
                    //       unsuspend_date: reactivationDate,
                    //       user_type: "rider",
                    //       status: "2",
                    //     });
                    //   },
                    // });
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Delete Modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold">Delete [Rider Profile]?</div>
              <AiOutlineClose size={16} className="cursor-pointer" onClick={() => setDeleteModalOpen(false)} />
            </div>
            <div className="text-gray-500 text-sm mb-4">
              This action would remove [Rider profile] from the portal and is irreversible.
              {/* This action would delete {riderDetails?.first_name} {riderDetails?.last_name} from the portal and is irreversible. */}
            </div>
            <form onSubmit={() => null}>
              <div className="mb-4">
                <Field className="col-span-12">
                  <Textarea id="hod" name="hod" rows={6} placeholder="Reason" value={deletionReason} className={clsx("input-styles", "resize-none")} onChange={(e: ReactChangeEventType<HTMLTextAreaElement>) => setDeletionReason(e.target.value)} />
                </Field>
              </div>
              <div className="justify-end flex gap-4 mt-6 me-0">
                <GreenButton
                  text="Cancel"
                  className="bg-grey-dark-4 text-grey-dark-1 w-36"
                  onClick={() => {
                    setDeleteModalOpen(false);
                  }}
                />
                <GreenButton
                  text="Delete"
                  className="w-36"
                  onClick={() => {
                    setDeleteModalOpen(false);
                    // deleteModalConfig({
                    //   firstText: `Delete  ${riderDetails?.first_name} ${riderDetails?.last_name}`,
                    //   secondText: `This action would remove  ${riderDetails?.first_name} ${riderDetails?.last_name} from the portal and is irreversible.`,
                    //   callback: () =>
                    //     deleteUserMutation.mutate({
                    //       auth_id: riderDetails.auth_id,
                    //       reason: deletionReason,
                    //       user_type: "rider",
                    //     }),
                    // });
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default RiderProfile;
