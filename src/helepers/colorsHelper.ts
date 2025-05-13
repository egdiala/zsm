// import { green } from "@material-ui/core/colors"

export const performancePercentageColor = (number: number) => {
  if (number >= 80) {
    return "green";
  } else if (number >= 60 && number < 80) {
    return "blue";
  } else if (number >= 40 && number < 60) {
    return "orange";
  } else if (number >= 0 && number < 40) {
    return "red";
  }
};

export const getTripStatusColor = (status: string) => {
  if (status === "completed") {
    return "text-success";
  } else if (status === "cancel") {
    return "text-danger";
  }
  // else if (status === "ongoing") return "text-warning";
  else if (status === "on_ride") {
    return "text-warning";
  }
};
export const getTripTypeColor = (type: string) => {
  if (type === "regular") {
    return "text-success";
  } else if (type === "fdt") {
    return "text-warning";
  } else {
    return "text-primary";
  }
};

export const getCashoutStatus = (status: number) => {
  if (status == 0) {
    return "Pending";
  } else if (status == 1) {
    return "Paid";
  } else if (status == 2) {
    return "Failed";
  } else if (status == 3) {
    return "Processing";
  } else if (status == 5) {
    return "refunded";
  } else {
    return "";
  }
};

export const getCashoutStatusColor = (status: number) => {
  if (status == 0) {
    return "text-warning";
  } else if (status == 1) {
    return "text-success";
  } else if (status == 2) {
    return "text-danger";
  } else if (status == 3) {
    return "text-primary";
  } else if (status == 5) {
    return "text-primary";
  } else {
    return "";
  }
};
