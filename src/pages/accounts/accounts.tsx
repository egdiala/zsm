import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { pageVariants } from "@/constants/animateVariants";
import { Button, Input, TableAction } from "@/components/core";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export const AdminAccountsPage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <motion.div variants={pageVariants} initial='initial' animate='final' exit={pageVariants.initial} className="flex flex-col gap-6 px-4 md:px-8 pt-9 md:pt-[3.25rem] pb-7 md:pb-9 max-w-[1800px] w-full mx-auto h-full">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="grid">
                    <h1 className="text-white text-3xl font-medium">Admin Accounts</h1>
                    <p className="text-grey-dark-4 text-base">Manage admin account access to this portal</p>
                </div>
                <Button theme="white" onClick={() => navigate("/")}>
                    <Icon icon="ic:round-home" className="size-6" />
                    Home
                </Button>
            </div>
            <div className="flex flex-col gap-4 bg-white px-6 py-[1.375rem] rounded-md">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <h1 className="whitespace-nowrap font-semibold text-xl text-grey-dark-1">10 Members</h1>
                        <TableAction theme="secondary">
                            <Icon icon="ion:funnel" className="size-3" />
                            Filter
                        </TableAction>
                        <Input type="search" placeholder="Search" iconLeft="ph:magnifying-glass" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Button theme="ghost">
                            <Icon icon="ph:trash" className="size-4" />
                            Delete
                        </Button>
                        <TableAction theme="tertiary">
                            <Icon icon="radix-icons:arrow-top-right" className="size-4" />
                            Export
                        </TableAction>
                        <Menu as="div" className="text-right">
                            <MenuButton className="w-fit zsm-button zsm-table-action--primary">
                                Add Admin(s)
                                <Icon icon="ph:caret-down-bold" className="size-4" />
                            </MenuButton>

                            <MenuItems transition anchor="bottom end" className="w-52 origin-top-right rounded bg-white mt-0.5 px-2.5 py-[0.875rem] text-sm text-grey-dark-2 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
                                <div className="mb-4 text-base font-semibold text-grey-dark-1">Add Member(s)</div>
                                <MenuItem as="button" className="group flex w-full items-center gap-2 rounded-lg p-2 data-[focus]:bg-white/10 mb-1">
                                    Add a Personnel
                                </MenuItem>
                                <MenuItem as="button" className="group flex w-full items-center gap-2 rounded-lg p-2 data-[focus]:bg-white/10">
                                    Bulk Upload
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}