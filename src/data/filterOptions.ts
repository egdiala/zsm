export const statusesOptions = [
  { value: "all", label: "All Statuses" },
  { value: "success", label: "Successful" },
  { value: "undecided", label: "Undecided" },
  { value: "failed", label: "Failed" },
];
export const dateTypeOption = [
  { value: "last_7_days", label: "Last 7 days" },
  { value: "this_month", label: "This month" },
  { value: "last_3_months", label: "Last 3 months" },
  { value: "all_time", label: "All time" },
];

export const dateTypeOptions = [
  { label: "All time", value: "all_time" },
  { label: "Today only", value: "today" },
  { label: "Last 7 days", value: "last 7 days" },
  { label: "This month", value: "this month" },
  { label: "Last 3 months", value: "last 3 months" },
  { label: "Custom date range", value: "custom" },
];
export const dateTypeOptionNew = [
  { label: "Today", value: "today" },
  { label: "This month", value: "this month" },
  { label: "Last month", value: "last month" },

  { label: "All time", value: "all_time" },
  { label: "Last 7 days", value: "last 7 days" },
  { label: "Last 3 months", value: "last 3 months" },
  { label: "Custom date range", value: "custom" },
];
export const timeOptions = [
  { label: "Morning (12am - 12pm)", value: "morning" },
  { label: "Afternoon (12pm - 5pm)", value: "afternoon" },
  { label: "Evening (5pm - 12am)", value: "evening" },
  { label: "Custom time range", value: "custom" },
];

export const tripsTypes = ["Online trips", "Offline trips"];

export const tripsTypesOptions = [
  { label: "All trips", value: "all" },
  { label: "Online trips", value: "online" },
  { label: "Drops", value: "drops" },
];

// export const tripsItems = [
//   {
//     title: "Total",
//     figure: "3,123,456,789",
//     icon: NairaSuccess,
//   },
//   {
//     title: "Successful",
//     figure: "3,123,456,789",
//     icon: NairaSuccess,
//   },
//   {
//     title: "Undecided",
//     figure: "3,123,456,789",
//     icon: NairaUndecided,
//   },
//   {
//     title: "Failed",
//     figure: "3,123,456,789",
//     icon: NairaFailed   ,
//   },
// ];

export const riderTripsFilterOptions = [
  { label: "All Trips", value: "" },
  { label: "Completed Trips", value: "completed" },
  { label: "On Ride", value: "on_ride" },
  { label: "On Pick-up", value: "on_pickup" },
  { label: "Cancelled", value: "cancel" },
];
export const partnerTripsFilterOptions = [
  { label: "All Trips", value: "" },
  { label: "Completed Trips", value: "completed" },
  { label: "On Ride", value: "on_ride" },
  { label: "On Pick-up", value: "on_pickup" },
  { label: "Cancelled", value: "cancel" },
];
export const getTripsStatusText = (ridestatus: string) => {
  if (ridestatus === "cancel") {
    return "Cancelled";
  } else if (ridestatus === "on_ride") {
    return "On Ride";
  } else {
    return ridestatus;
  }
};

// [
//   { label: "All Trips", value: "" },
//   { label: "Completed Trips", value: "completed" },
//   { label: "On Ride", value: "on_ride" },
//   { label: "On Pick-up", value: "on_pickup" },
// ];

export const paymentMethodOptions = [
  { label: "Cash", value: "cash" },
  { label: "Card", value: "cash" },
];

export const paymentMethodOptions2 = [
  { label: "Transfer", value: "transfer" },
  { label: "Card", value: "card" },
  { label: "Cash", value: "cash" },
];
export const paymentTypeServicePayment = [
  { label: "Driver-Verification", value: "driver-verification" },
  { label: "Equity", value: "equity" },
];
export const paymentStatusOptions = [
  { label: "Successful", value: "1" },
  { label: "Failed", value: "2" },
  { label: "Undecided", value: "3" },
  { label: "All", value: "" },
];
export const requestTypeOptions = [
  { label: "Online", value: "1" },
  { label: "Offline", value: "0" },
  { label: "All", value: "" },
];
export const payoutStatusOptions = [
  { label: "Pending", value: "0" },
  { label: "Successful", value: "1" },
  { label: "Failed", value: "2" },
  { label: "Processing", value: "3" },
];
export const payoutStatus = [
  { label: "Pending", value: "4" },
  { label: "Paid", value: "1" },
  { label: "Failed", value: "2" },
  { label: "Processing", value: "3" },
  { label: "Reversed", value: "5" },
  // { label: "Reviewed", value: "4" },
];
export const stakeholderPayoutStatus = [
  { label: "Pending", value: "0" },
  { label: "Approved", value: "1" },
  { label: "Reversed", value: "5" },
];
export const stakeholderStatusOptions = [{ label: "Reversed", value: "5" }];
export const partnerStatusOptions = [
  { label: "All", value: "" },
  { label: "Pending", value: "0" },
  { label: "Verfied", value: "2" },
  { label: "Approved", value: "4" },
];

export const tripsStatusOptions = [
  { label: "All", value: "" },
  { label: "Completed", value: "completed" },
  { label: "Ongoing", value: "on_ride" },
  { label: "Driver enroute", value: "on_pickup" },
  { label: "Cancelled", value: "cancel" },
];
export const tripsClassOptions = [
  { label: "All", value: "" },
  { label: "Class A", value: "A" },
  { label: "Class B", value: "B" },
  { label: "Class C", value: "C" },
  { label: "Class D", value: "D" },
];
export const tripstypesOptions = [
  { label: "All", value: "" },
  { label: "Regular", value: "regular" },
  // { label: "FDT", value: "fdt" },
  { label: "Schedule", value: "schedule" },
];
export const partnerVehicleStatusOptions = [
  { label: "Assigned", value: "1" },
  { label: "Unassigned", value: "0" },
];
export const driverVehicleStatusOptions = [
  { label: "Assigned", value: "1" },
  { label: "Unassigned", value: "0" },
];
export const vehicleStatusOptions = [
  { label: "Active", value: "1" },
  { label: "Suspended", value: "6" },
];
export const onlineStatusOptions = [
  { label: "Online", value: "1" },
  { label: "Offline", value: "0" },
];

export const dateTypeOptions2 = [
  { label: "Daily", value: "daily" },
  { label: "Monthly", value: "monthly" },
  { label: "Yearly", value: "yearly" },
];

export const promoCodeType = [
  { label: "All", value: "" },
  { label: "Custom", value: "custom" },
  { label: "Generic", value: "generic" },
];
export const emergencyTypes = [
  { label: "All", value: "" },
  { label: "Resolved", value: "0" },
  { label: "Unresolved", value: "1" },
];
