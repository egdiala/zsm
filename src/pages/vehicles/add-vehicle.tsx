
import { motion } from "framer-motion"
import { Input, SelectField } from "@/components/core"
import { pageVariants } from "@/constants/animateVariants"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export const AddVehiclePage = () => {
    return (
        <motion.div variants={pageVariants} initial='initial' animate='final' exit={pageVariants.initial} className="flex flex-col gap-6 px-4 md:px-8 pt-9 pb-7 md:pb-9 max-w-[1800px] w-full mx-auto h-full">
            <motion.div layoutId="page-container" className="flex flex-col gap-10 p-5 bg-white rounded-md">
                <div className="flex items-center gap-2">
                    <Link to="/vehicles/logs"><Icon icon="ri:arrow-left-line" className="size-6" /></Link>
                    <span className="text-xl font-semibold">Add new vehicle</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Input label="Plate number" type="text" />
                    <Input label="Asset Co" type="text" />
                    <SelectField label="OEM" />
                    <Input label="Price Band" type="text" />
                    <Input label="Type" type="text" />
                    <Input label="Model" type="text" />
                    <Input label="Color" type="text" />
                    <Input label="Production Year" type="text" />
                    <Input label="Purchase Year" type="text" />
                    <Input label="Vehicle Identification Number (VIN)" type="text" />
                    <Input label="Chassis Number" type="text" />
                    <Input label="Engine Number" type="text" />
                    <Input label="Dashcam IMEI" type="text" />
                </div>
                <div className="flex items-center gap-4 justify-end">
                    <Button asChild variant="grey" className="h-12 w-full md:w-36">
                        <Link to="/vehicles/logs">
                            Cancel
                        </Link>
                    </Button>
                    <Button variant="primary" className="h-12 w-full md:w-36">Add Vehicle</Button>
                </div>
            </motion.div>
        </motion.div>
    )
}