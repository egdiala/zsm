import { useState } from "react"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import { Input } from "@/components/core"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"
import { StatusBadge } from "@/components/ui/status-badge"
import { BulkUploadVehicles } from "@/components/pages/vehicles"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { DRIVER_STATUS,VEHICLE_STATUS, ONLINE_STATUS, type VehiclesType } from "@/types/vehicles"
import { Link } from "react-router-dom"

export const VehiclesLogPage = () => {
    const [isBulkUploadVehiclesOpen, setIsBulkUploadVehiclesOpen] = useState(false);
    const columns: ColumnDef<VehiclesType>[] = [
        {
            accessorKey: "plate_number",
            header: "Plate number"
        },
        {
            accessorKey: "asset_company",
            header: "Asset Company"
        },
        {
            accessorKey: "oem",
            header: "OEM"
        },
        {
            accessorKey: "price_band",
            header: "Price Band"
        },
        {
            accessorKey: "driver_status",
            header: "Driver status",
            cell: ({ row }) => {
                const status = row.getValue("driver_status") as string;
                return <StatusBadge status={status} />;
            }
        },
        {
            accessorKey: "vehicle_status",
            header: "Vehicle status",
            cell: ({ row }) => {
                const status = row.getValue("vehicle_status") as string;
                return <StatusBadge status={status} />;
            }
        },
        {
            accessorKey: "online_status",
            header: "Online status",
            cell: ({ row }) => {
                const status = row.getValue("online_status") as string;
                return <StatusBadge status={status} />;
            }
        },
    ]

    // Generate random data
    const generateRandomData = (count: number): VehiclesType[] => {
        const data: VehiclesType[] = [];
        
        const plateNumbers = ["ABC-123", "XYZ-456", "DEF-789", "GHI-012", "JKL-345"];
        const assetCompanies = ["Alpha Motors", "Beta Vehicles", "Gamma Transport", "Delta Cars"];
        const oems = ["Toyota", "Honda", "Ford", "BMW", "Mercedes"];
        const priceBands = ["Economy", "Standard", "Premium", "Luxury"];
        const driverStatuses = [DRIVER_STATUS.ASSIGNED, DRIVER_STATUS.UNASSIGNED];
        const vehicleStatuses = [
            VEHICLE_STATUS.ASSIGNED, 
            VEHICLE_STATUS.SUSPENDED, 
            VEHICLE_STATUS.ON_REST, 
            VEHICLE_STATUS.ACTIVE
        ];
        const onlineStatuses = [
            ONLINE_STATUS.ONLINE, 
            ONLINE_STATUS.OFFLINE, 
            ONLINE_STATUS.ON_REST
        ];
        
        const getRandomItem = <T,>(array: T[]): T => array[Math.floor(Math.random() * array.length)];
        
        for (let i = 0; i < count; i++) {
            data.push({
                plate_number: getRandomItem(plateNumbers),
                asset_company: getRandomItem(assetCompanies),
                oem: getRandomItem(oems),
                price_band: getRandomItem(priceBands),
                driver_status: getRandomItem(driverStatuses),
                vehicle_status: getRandomItem(vehicleStatuses),
                online_status: getRandomItem(onlineStatuses)
            });
        }
        
        return data;
    };
    
    const data = generateRandomData(10);

    return (
        <motion.div layoutId="page-container" className="flex flex-col gap-10 p-5 bg-white rounded-md">
            <motion.div layout className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Button variant="secondary" size="lg">Filter</Button>
                        <Input placeholder="Search" type="text" className="h-10" iconLeft="ri:search-2-fill" />
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="arrow-cta-1" size="lg">
                            <Icon icon="ri:download-line" />
                            Export
                        </Button>
                        <Menu>
                            <MenuButton as={Button} variant="primary" size="lg">
                                <Icon icon="ri:add-fill" />
                                Add New
                            </MenuButton>
                            <MenuItems
                                transition
                                anchor="bottom end"
                                className="w-52 origin-top-right rounded-xl border border-white/5 bg-white p-1 text-sm/6 shadow-md text-grey-dark-1 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                            >
                                <MenuItem>
                                    <Link to="/vehicles/create" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-light-green data-[focus]:text-green">
                                        Add a Single Vehicle
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <button type="button" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-light-green data-[focus]:text-green" onClick={() => setIsBulkUploadVehiclesOpen(true)}>
                                        Bulk Upload
                                    </button>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
                <DataTable columns={columns} data={data} />
            </motion.div>
            <BulkUploadVehicles isOpen={isBulkUploadVehiclesOpen} close={() => setIsBulkUploadVehiclesOpen(false)} />
        </motion.div>
    )
}