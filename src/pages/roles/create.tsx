import React from "react";
import { cn } from "@/libs/cn";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { pageVariants } from "@/constants/animateVariants";
import { Button, Checkbox, Input } from "@/components/core";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

export const CreateRolePage: React.FC = () => {
    const navigate = useNavigate()
    const permissions = [
        {
            label: "Create Permissions",
            class: "grid-rows-3",
            items: ["Vehicle", "Partners", "Drivers", "Maintenance & repairs", "Personnel", "Promo Code", "Ticket", "Emergency Emails", "Emergency", "Emergency Numbers", "Partners"]
        },
        {
            label: "Read Permissions",
            class: "grid-rows-6",
            items: [
                "Dashboard", "Users", "Riders", "Personnels", "Drivers", "Vehicles",
                "Trip Manifest", "FDTs and Schedules", "Emergency", "Ticket", "Partners", "Support",
                "Ratings and review", "Activity Log", "Referral", "Trip Payments", "Service payments", "Ticket",
                "Maintenance & repairs", "Promo", "Maps", "Setup", "Notifications"
            ]
        },
        {
            label: "Update Permissions",
            class: "grid-rows-2",
            items: ["Driver Status", "Vehicles", "Emergency Status", "Maintenance & repairs", "Ticket Status", "Promo Codes"]
        },
        {
            label: "Delete Permissions",
            class: "grid-rows-1",
            items: ["User", "Emergency Number", "Emergency Email", "Promo Code"]
        },
    ]
    return (
        <motion.div variants={pageVariants} initial='initial' animate='final' exit={pageVariants.initial} className="flex flex-col gap-6 px-4 md:px-8 pt-9 md:pt-[3.25rem] pb-7 md:pb-9 max-w-[1800px] w-full mx-auto h-full">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="grid">
                    <h1 className="text-white text-3xl font-medium">Add an Admin Role</h1>
                    <p className="text-grey-dark-4 text-base">Manage admin account access to this portal</p>
                </div>
                <Button theme="white" onClick={() => navigate("/")}>
                    <Icon icon="ic:round-home" className="size-6" />
                    Home
                </Button>
            </div>
            <div className="flex flex-col gap-[1.875rem] bg-white px-6 pt-7 pb-11 rounded-md">
                <Link to="/roles" className="flex items-center gap-2 text-grey-dark-1">
                    <Icon icon="ph:arrow-left" className="size-6" />
                    <span className="font-semibold text-xl">Create a new Role</span>
                </Link>
                <div className="grid gap-24">
                    <div className="grid gap-6">
                        <Input label="Role Name" type="text" />
                        {
                            permissions.slice(0,3).map((permission) =>
                            <Disclosure as="div" className="border border-[#E1F4F4] rounded" defaultOpen={true}>
                                <div className="group bg-[#E6F6F6] pl-4 pr-3 py-2.5 flex w-full items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <span className="text-base font-medium text-grey-dark-1">{permission.label}</span>
                                        <div className="text-sm px-2 py-0.5 bg-[#D5F0F7] text-grey-dark-1 rounded-full">0 Selected</div>
                                    </div>
                                    <div className="flex items-center gap-10">
                                        <div className="flex items-center gap-2">
                                            <Checkbox name="selectAll" checked={false} />
                                            <span className="text-sm text-grey-dark-1">Select all</span>
                                        </div>
                                        <DisclosureButton className="group">
                                            <Icon icon="ph:caret-down" className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180 transform transition-transform duration-300" />
                                        </DisclosureButton>
                                    </div>
                                </div>
                                <DisclosurePanel transition className={cn("grid grid-flow-col gap-y-4 pt-4 px-4 pb-8 origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0", permission.class)}>
                                    {
                                        permission.items.map((item) =>
                                            <div className="flex items-center gap-2 p-2">
                                                <Checkbox name={item} checked={false} />
                                                <span>{item}</span>
                                            </div>
                                        )
                                    }
                                </DisclosurePanel>
                            </Disclosure>
                            )
                        }
                        <Disclosure as="div" className="border border-[#E1F4F4] rounded" defaultOpen={true}>
                            <div className="group bg-[#FFE9E9] pl-4 pr-3 py-2.5 flex w-full items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <span className="text-base font-medium text-grey-dark-1">{permissions[3].label}</span>
                                    <div className="text-sm px-2 py-0.5 bg-semantics-red text-white rounded-full">0 Selected</div>
                                </div>
                                <div className="flex items-center gap-10">
                                    <div className="flex items-center gap-2">
                                        <Checkbox name="selectAll" checked={false} />
                                        <span className="text-sm text-grey-dark-1">Select all</span>
                                    </div>
                                    <DisclosureButton className="group">
                                        <Icon icon="ph:caret-down" className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180 transform transition-transform duration-300" />
                                    </DisclosureButton>
                                </div>
                            </div>
                            <DisclosurePanel transition className={cn("grid grid-flow-col gap-y-4 pt-4 px-4 pb-8 origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0", permissions[3].class)}>
                                {
                                    permissions[3].items.map((item) =>
                                        <div className="flex items-center gap-2 p-2">
                                            <Checkbox name={item} checked={false} />
                                            <span>{item}</span>
                                        </div>
                                    )
                                }
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                    <div className="flex items-center gap-4 justify-end">
                        <Button theme="secondary">Cancel</Button>
                        <Button theme="primary">Create Role</Button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}