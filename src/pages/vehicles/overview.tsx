import { cn } from "@/libs/cn"
import { motion } from "framer-motion"
import { IconCaar } from "@/components/icons"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"
import type { VehicleOverviewType } from "@/types/vehicles"

export const VehiclesOverviewPage = () => {
    const topCards = [
        { label: "Total vehicles", value: 5045, iconColor: "text-green", iconBgColor: "bg-green/10", bgColor: "bg-light-green/80" },
        { label: "Active vehicles", value: 5948, iconColor: "text-pri", iconBgColor: "bg-pri/10", bgColor: "bg-blue-4" },
        { label: "Inactive vehicles", value: 4152, iconColor: "text-semantics-red", iconBgColor: "bg-semantics-red/10", bgColor: "bg-semantics-red-light" },
    ]
    const bottomCards = [
        { label: "Online vehicles", value: 5045, iconColor: "text-green", iconBgColor: "bg-green/10", bgColor: "bg-light-green/80" },
        { label: "Offline vehicles", value: 5948, iconColor: "text-semantics-amber", iconBgColor: "bg-semantics-amber/10", bgColor: "bg-semantics-amber-light" },
        { label: "Suspended vehicles", value: 4152, iconColor: "text-semantics-red", iconBgColor: "bg-semantics-red/10", bgColor: "bg-semantics-red-light" },
        { label: "On rest vehicles", value: 4152, iconColor: "text-semantics-amber", iconBgColor: "bg-semantics-amber/10", bgColor: "bg-semantics-amber-light" },
    ]
    const columns: ColumnDef<VehicleOverviewType>[] = [
        {
            accessorKey: "date",
            header: "Date"
        },
        {
            accessorKey: "assigned_vehicle",
            header: "Assigned Veh."
        },
        {
            accessorKey: "rest_day",
            header: "Rest Day"
        },
        {
            accessorKey: "suspended_vehicle",
            header: "Suspended Veh."
        },
        {
            accessorKey: "fulfilled_trip",
            header: "Fulfilled Trip"
        },
        {
            accessorKey: "online_by_no",
            header: "Online by No."
        },
        {
            accessorKey: "online_by_percentage",
            header: "Online By %."
        },
        {
            accessorKey: "offline_by_no",
            header: "Offline By No."
        },
        {
            accessorKey: "offline_by_percentage",
            header: "Offline By %."
        },
    ]
    
    // Sample data for the table
    const data: VehicleOverviewType[] = [
        {
            date: "2023-10-01",
            assigned_vehicle: 100,
            rest_day: 15,
            suspended_vehicle: 5,
            fulfilled_trip: 80,
            online_by_no: 90,
            online_by_percentage: 90,
            offline_by_no: 10,
            offline_by_percentage: 10
        },
        {
            date: "2023-10-02",
            assigned_vehicle: 102,
            rest_day: 12,
            suspended_vehicle: 6,
            fulfilled_trip: 84,
            online_by_no: 92,
            online_by_percentage: 92,
            offline_by_no: 8,
            offline_by_percentage: 8
        }
    ]
    
    return (
        <motion.div layoutId="page-container" className="flex flex-col gap-10 p-5 bg-white rounded-md">
            <motion.div layout className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        topCards.map((card, index) => (
                            <div key={index} className={cn("flex items-center gap-4 px-4 py-6 rounded-md last:md:col-span-2 last:lg:col-span-1", card.bgColor)}>
                                <div className={cn("grid place-content-center w-9 h-9 rounded-md", card.iconBgColor)}>
                                    <IconCaar className={card.iconColor} />
                                </div>
                                <div className="grid gap-1">
                                    <span className="text-grey-dark-2 text-sm">{card.label}</span>
                                    <p className="text-grey-dark-1 font-medium text-base">{card.value}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        bottomCards.map((card, index) => (
                            <div key={index} className={cn("flex items-center gap-4 px-4 py-6 rounded-md", card.bgColor)}>
                                <div className={cn("grid place-content-center w-9 h-9 rounded-md", card.iconBgColor)}>
                                    <IconCaar className={card.iconColor} />
                                </div>
                                <div className="grid gap-1">
                                    <span className="text-grey-dark-2 text-sm">{card.label}</span>
                                    <p className="text-grey-dark-1 font-medium text-base">{card.value}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <DataTable columns={columns} data={data} />
            </motion.div>
        </motion.div>
    )
}