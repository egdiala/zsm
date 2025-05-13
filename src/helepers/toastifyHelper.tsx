// import { getRootStoreState, StoreState } from "@/store/rootStore";
// import { toast, TypeOptions } from "react-toastify";

// export const toastify = ({ type, message }: { type: TypeOptions | undefined; message: string }) =>
//   toast(message, {
//     type: type,
//     // icon: icon ? icon : "false",
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: true,
//     progress: undefined,
//   });
// export const useToastifyPromises = () => {
//   const { setPostLoading, setGetLoading }: StoreState = getRootStoreState();

//   const getRequest = async ({ asyncFunction, forExport }: any) => {
//     setGetLoading(true);
//     const id = forExport && toast.loading("Exporting File");

//     try {
//       const res = await asyncFunction;
//       if (res.data.status === "error") {
//         toast(res.data.msg, {
//           type: "error",
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: false,
//           draggable: true,
//           progress: undefined,
//           isLoading: false,
//         });
//       }
//       setGetLoading(false);
//       forExport &&
//         toast.update(id, {
//           // render: res?.data?.message,
//           render: res?.data?.message || "Exported Succesfully",
//           // render: SuccessMsg,
//           type: "success",
//           isLoading: false,
//           autoClose: 2000,
//         });

//       return res?.data;
//     } catch (err: any) {
//       // console.log(err?.response);

//       if (err.code === "ERR_NETWORK") {
//         toast("Network error", {
//           type: "error",
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: false,
//           draggable: true,
//           progress: undefined,
//           isLoading: false,
//         });
//       } else {
//         if (err?.response?.data?.code !== 401) {
//           toast(err?.response?.data?.message, {
//             type: "error",
//             position: "top-right",
//             autoClose: 2000,
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: false,
//             draggable: true,
//             progress: undefined,
//             isLoading: false,
//           });
//         }
//       }

//       forExport &&
//         toast.update(id, {
//           render: err?.response?.data?.message || "File Export failed",
//           type: "error",
//           isLoading: false,
//           autoClose: 2000,
//         });

//       setGetLoading(false);

//       throw err;
//     }
//   };

//   const otherReq = async ({ asyncFunction, pendingMsg, SuccessMsg }: any) => {
//     setPostLoading(true);
//     const id = pendingMsg && toast.loading(pendingMsg);
//     try {
//       const res = await asyncFunction;
//       if (res.data.status === "error") {
//         toast.update(id, {
//           render: res?.data?.message || res?.data?.msg,
//           type: "error",
//           isLoading: false,
//           autoClose: 2000,
//         });
//       } else {
//         toast.update(id, {
//           render: res?.data?.message || SuccessMsg,
//           type: "success",
//           isLoading: false,
//           autoClose: 2000,
//         });
//       }
//       setPostLoading(false);
//       return res;
//     } catch (err: any) {
//       toast.update(id, {
//         render: err?.response?.data?.message?.msg || err?.response?.data?.message || err?.response?.data?.msg || err?.message,
//         type: "error",
//         isLoading: false,
//         autoClose: 2000,
//       });
//       setPostLoading(false);
//       throw err;
//     }
//   };

//   return {
//     get: getRequest,
//     post: otherReq,
//     put: otherReq,
//     delete: otherReq,
//   };
// };
