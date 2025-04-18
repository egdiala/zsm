import { ObjectType } from "@/types/global.types";

type arrayType = string[][];

// export const bulkStaffData: arrayType = [
//   ["firstname", "lastname", "email", "phone"],
//   ["John", "Doe", "vincen33t@yahoo.com", "09034443344"],
//   ["Dean", "claire", "Paul33@yahoo.co", "07066666666"],
//   ["Jane", "", "Jane423@gmail", "09098246666"],
//   ["Robert", "Gregory", "Ja423@gmail.com", ""],
// ];
export const bulkStaffData: arrayType = [
  ["firstname", "lastname", "email", "phone"],
  ["Cecilia", "Tope", "Cecilia@yahoo.com", "08123456543"],
  ["Eve", "Lyn", "ilia@yahoo.com", "08123456543"],
];
export const bulkDeptData: arrayType = [["name"], ["Operations"], ["human Resources"]];

const convertArrayToCSV = (array: arrayType) => {
  return array.map((row) => row.join(",")).join("\n");
};

export const downloadCSV = (data: string[][]) => {
  // const module = type === "staff" ? bulkStaffData :type==="dept_error"? bulkDeptData
  const csvContent = convertArrayToCSV(data);
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const exportErrorToCsv = (errorTableData: ObjectType[] | null) => {
  const deptErrorData = errorTableData && [["firstname", "lastname", "email", "phone", "message"], ...errorTableData.map((item) => [item?.firstname || "", item?.lastname || "", item?.email || "", item.phone || "", item.message.replace || ""])];
  deptErrorData && downloadCSV(deptErrorData);
};
