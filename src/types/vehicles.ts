export interface VehicleOverviewType {
  date: string;
  assigned_vehicle: number;
  rest_day: number;
  suspended_vehicle: number;
  fulfilled_trip: number;
  online_by_no: number;
  online_by_percentage: number;
  offline_by_no: number;
  offline_by_percentage: number;
}

// Status types and values
export const DRIVER_STATUS = {
  ASSIGNED: "Assigned",
  UNASSIGNED: "Unassigned"
} as const;

export const VEHICLE_STATUS = {
  ASSIGNED: "Assigned",
  SUSPENDED: "Suspended",
  ON_REST: "On-rest",
  ACTIVE: "Active"
} as const;

export const ONLINE_STATUS = {
  ONLINE: "Online",
  OFFLINE: "Offline",
  ON_REST: "On-rest"
} as const;

export type DriverStatus = typeof DRIVER_STATUS[keyof typeof DRIVER_STATUS];
export type VehicleStatus = typeof VEHICLE_STATUS[keyof typeof VEHICLE_STATUS];
export type OnlineStatus = typeof ONLINE_STATUS[keyof typeof ONLINE_STATUS];

export type StatusType = "driver" | "vehicle" | "online";

// A helper function to get the correct color for a status based on context
export function getStatusColor(status: string): string {
  if (status === "Assigned") {
    return "text-semantics-success";
  }
  
  if (status === "On-rest") {
    return "text-semantics-amber";
  }
  
  // For unique status values
  switch (status) {
    case "Unassigned":
      return "text-semantics-red";
    case "Suspended":
      return "text-semantics-red";
    case "Active":
      return "text-semantics-success";
    case "Online":
      return "text-semantics-success";
    case "Offline":
      return "text-semantics-red";
    default:
      return "";
  }
}

export interface VehiclesType {
  plate_number: string;
  asset_company: string;
  oem: string;
  price_band: string;
  driver_status: DriverStatus;
  vehicle_status: VehicleStatus;
  online_status: OnlineStatus;
} 