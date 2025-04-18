export const formatCountdown = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds}`;
};

export const putComma = (text: string | number) => text?.toLocaleString() || 0;

export function formatNumber(number: number | string) {
  const num = typeof number === "string" ? parseInt(number) : number;
  return Number.isInteger(num) ? num : num.toFixed(1);
}

export const okGif =
  "https://s3-alpha-sig.figma.com/img/1a17/af3f/51624392e7d3496c295b8b07c8af7efd?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kx9p2a~4l54aaZ1zrvSyvGMtIWGSfXARGV1N60Jkj23zsIn-hg7WsePh5jtmCHIplQHD~IDTF-BW7RbuYdAyGAqnWxla0VXq071syYTpwZ0dUqBbytTnMMrmU8ny1X4D0AR4Ot1gt2yjzfxv2Ts3Jtkkgctdice3Tkesly7iSzBoNSPx8zSplp41KyeH1xqwZvE5KapalcWwV0cBy21-Sqh8lTYaTnr0xmYY9SzWDHRZdaMjf7fD-Y6dKuhxlSzWhNMkIN~LsoxeOXYnLnTYUXoupB5XtpYZalDSUEdonkO4NfBpf39qcjkVo2Hjq02a40Q1nIILfnDHekdEK~66uw__";

export const trimText = (text: string, length: number) => {
  return text?.length > length ? text.slice(0, length) + "..." : text;
};

const date = new Date();

export const getRiderType = (tag: string, areaSearch: { area: string; lga: string }) => {
  if (areaSearch.lga) {
    return areaSearch.lga;
  } else if (areaSearch.area) {
    return areaSearch.area;
  } else {
    if (tag === "total") {
      return "Registered";
    } else if (tag === "verified") {
      return "Verified";
    } else if (tag === "unverified") {
      return "Unverified";
    }
  }
};
export const getBusinessType = (tag: string) => {
  if (tag === "total") {
    return "";
  } else if (tag === "active") {
    return "Active";
  } else if (tag === "inactive") {
    return "Inactive";
  }
};
export const getDriverType = (tag: string, areaSearch: { lga: string; area: string }) => {
  if (areaSearch.lga) {
    return areaSearch.lga;
  } else if (areaSearch.area) {
    return areaSearch.area;
  } else {
    if (tag === "total") {
      return "Registered";
    } else if (tag === "pending") {
      return "Pending";
    } else if (tag === "accepted") {
      return "Accepted";
    } else if (tag === "trained") {
      return "Trained";
    } else if (tag === "verified") {
      return "Verified";
    } else if (tag === "active") {
      return "Active";
    } else if (tag === "inactive") {
      return "Inactive";
    } else if (tag === "proxy") {
      return "Proxy";
    }
  }
};

export const getPartnerType = (tag: string) => {
  if (tag === "total") {
    return "All";
  } else if (tag === "pending") {
    return "Pending";
  } else if (tag === "verified") {
    return "Verified";
  } else if (tag === "approved") {
    return "Approved";
  }
};

export const getVehicleType = (tag: string) => {
  if (tag === "total") {
    return "All";
  } else if (tag === "unassigned") {
    return "Unassigned";
  } else if (tag === "assigned") {
    return "Assigned";
  } else if (tag === "suspended") {
    return "Suspended";
  } else if (tag === "active") {
    return "Active";
  } else if (tag === "onrest") {
    return "On Rest";
  }
};

export const getStatusFromVehicleType = (tag: string) => {
  if (tag === "total") {
    return "";
  } else if (tag === "suspended") {
    return 0;
  } else if (tag === "active") {
    return 1;
  } else if (tag === "onrest") {
    return "";
  }
};
export const getAssignStatusFromVehicleType = (tag: string) => {
  if (tag === "total") {
    return "";
  } else if (tag === "unassigned") {
    return "0";
  } else if (tag === "assigned") {
    return 1;
  } else if (tag === "onrest") {
    return "";
  }
};

// For driver & partner status. 0=pending,1=accepted,2=verified,3=trained,4=active,5=inactive.
export const getStatusFromDriverType = (tag: string) => {
  if (tag === "total") {
    return "";
  } else if (tag === "pending") {
    return 0;
  } else if (tag === "accepted") {
    return 1;
  } else if (tag === "verified") {
    return 2;
  } else if (tag === "trained") {
    return 3;
  } else if (tag === "active") {
    return 4;
  } else if (tag === "inactive") {
    return 5;
  } else if (tag === "proxy") {
    return "Proxy";
  }
};
export const getDriverTypeFromStatus = (status: number | string) => {
  if (status === 0) {
    return "pending";
  } else if (status === 1) {
    return "accepted";
  } else if (status === 2) {
    return "verified";
  } else if (status === 3) {
    return "trained";
  } else if (status === 4) {
    return "active";
  } else if (status === 5) {
    return "inactive";
  } else if (status === "proxy") {
    return "Proxy";
  }
};
export const getColorFromDriverStatus = (status: number | string) => {
  if (status === 0) {
    return "text-warning";
  } else if (status === 1) {
    return "text-success";
  } else if (status === 2) {
    return "text-primary";
  } else if (status === 3) {
    return "text-success";
  } else if (status === 4) {
    return "text-success";
  } else if (status === 5) {
    return "text-danger";
  } else if (status === "proxy") {
    return "Proxy";
  }
};

export const getStatusFromPartnerType = (tag: string) => {
  if (tag === "total") {
    return "";
  } else if (tag === "pending") {
    return "0";
  } else if (tag === "approved") {
    return 4;
  } else if (tag === "verified") {
    return 2;
  }
};

export const getKycStatusFromRiderType = (tag: string) => {
  if (tag === "total") {
    return "";
  } else if (tag === "verified") {
    return "1";
  } else if (tag === "unverified") {
    return "0";
  }
};
export const getAccountStatusFromBusinessType = (tag: string) => {
  if (tag === "total") {
    return "";
  } else if (tag === "active") {
    return "1";
  } else if (tag === "inactive") {
    return "2";
  }
};
// export const getKycStatusFromDriverType = (tag) => {
//   if (tag === "total") {
//     return "";
//   } else if (tag === "verified") {
//     return "1";
//   } else if (tag === "unverified") {
//     return "0";
//   }
// };

export const getVmrType = (tag: string) => {
  if (tag === "total") {
    return "";
  } else if (tag === "maintenance") {
    return "maintenance";
  } else if (tag === "repair") {
    return "repair";
  } else if (tag === "defect") {
    return "defect";
  } else if (tag === "servicing") {
    return "servicing";
  }
};

export const getStatusFromVmrType = (tag: string) => {
  if (tag === "total") {
    return "";
  } else if (tag === "pending") {
    return "pending";
  } else if (tag === "accepted") {
    return "accepted";
  } else if (tag === "ongoing") {
    return "ongoing";
  } else if (tag === "completed") {
    return "completed";
  } else if (tag === "repair_time_set") {
    return "repair_time_set";
  } else if (tag === "rejected") {
    return "rejected";
  } else if (tag === "awaiting-approval") {
    return "awaiting-approval";
  } else if (tag === "approved") {
    return "approved";
  }
};

export const getCodeTypeFromPromoType = (tag: string) => {
  if (tag === "total") {
    return "";
  } else if (tag === "generic") {
    return "generic";
  } else if (tag === "custom") {
    return "custom";
  }
};
export const getStatusFromReferralType = (tag: string) => {
  if (tag === "total") {
    return "";
  } else if (tag === "pending") {
    return "0";
  } else if (tag === "confirmed") {
    return 1;
  }
};
export const getStatusFromemergencyType = (tag: string) => {
  if (tag === "total") {
    return "";
  } else if (tag === "unresolved") {
    return "0";
  } else if (tag === "resolved") {
    return 1;
  }
};

const thisYear = date.getFullYear();

export const months = [
  {
    label: "Jan",
    value: `${thisYear}-01`,
  },
  {
    label: "Feb",
    value: `${thisYear}-02`,
  },
  {
    label: "Mar",
    value: `${thisYear}-03`,
  },
  {
    label: "Apr",
    value: `${thisYear}-04`,
  },
  {
    label: "May",
    value: `${thisYear}-05`,
  },
  {
    label: "Jun",
    value: `${thisYear}-06`,
  },
  {
    label: "Jul",
    value: `${thisYear}-07`,
  },
  {
    label: "Aug",
    value: `${thisYear}-08`,
  },
  {
    label: "Sep",
    value: `${thisYear}-09`,
  },
  {
    label: "Oct",
    value: `${thisYear}-10`,
  },
  {
    label: "Nov",
    value: `${thisYear}-11`,
  },
  {
    label: "Dec",
    value: `${thisYear}-12`,
  },
];

const startYear = 2015;
const yearsList = Array.from({ length: thisYear - startYear }, (val, index) => startYear + index + 1);

export const years = yearsList.map((item) => ({
  label: `${item}`,
  value: `${item}`,
}));

export const getDateLabelFromDates = (startDate: string, endDate: string, dateType: string) => {
  let finalString;
  if (dateType === "daily") {
    finalString = `${months?.find((item) => item?.value === startDate)?.label} ${thisYear}`;
  }
  if (dateType === "monthly") {
    finalString = `- year ${years.find((item) => item.value.split("-")[0] === startDate.split("-")[0])?.label}`;
  }
  if (dateType === "yearly") {
    finalString = `${years.find((item) => item.value.split("-")[0] === startDate.split("-")[0])?.label || ""} - ${years.find((item) => item.value.split("-")[0] === endDate.split("-")[0])?.label || ""}`;
  }
  if (dateType === "yearly-single") {
    finalString = `${years.find((item) => item.value.split("-")[0] === startDate.split("-")[0])?.label || ""}`;
  }
  return `${finalString}`;
};

export const getLabelsFromDatetype = (dateType: string, startDate: string, endDate: string) => {
  let labels;
  let startYear: string;
  let endYear: string;

  if (startDate && endDate) {
    startYear = startDate.split("-")[0];
    endYear = endDate.split("-")[0];

    if (dateType === "daily") {
      labels = Array.from({ length: 31 }, (val, index) => index + 1);
    } else if (dateType === "monthly") {
      labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec"];
    } else if (dateType === "yearly") {
      labels = Array.from({ length: parseInt(endYear) + 1 - parseInt(startYear) }, (val, index) => parseInt(startYear) + index);
    }
  }

  return labels;
};

export const getTripPaymentStatusColor = (status: number) => {
  if (status === 0) {
    return "text-warning";
  } else if (status === 1) {
    return "text-success";
  } else if (status === 2) {
    return "text-danger";
  } else if (status === 3) {
    return "text-secondary";
  } else if (status === 4) {
    return "text-primary";
  } else if (status === 5) {
    return "text-danger";
  }
};

export const getTripPaymentStatus = (status: number) => {
  if (status === 0) {
    return "pending";
  } else if (status === 1) {
    return "succesful";
  } else if (status === 2) {
    return "failed";
  } else if (status === 3) {
    return "undecided";
  } else if (status === 4) {
    return "refunded";
  } else if (status === 5) {
    return "invalid";
  }
};
