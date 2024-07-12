import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BulkInvite, DeleteAdmin, EditAdmin, InviteAdmin } from "@/components/pages/accounts";
import { pageVariants } from "@/constants/animateVariants";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Button, Checkbox, Input, Pagination, TableAction } from "@/components/core";

export const AdminAccountsPage: React.FC = () => {
    const navigate = useNavigate()
    const [toggleModals, setToggleModals] = useState({
        openBulkInvite: false,
        openEditAdmin: false,
        openInviteAdmin: false,
        openDeleteAdmin: false
    })
    const roles = [
        {
            name: "Ifeanyi Seye",
            phone: "0801 234 5678",
            email: "example@email.com",
            role: "Product Manager",
            permissions: [
                { label: "Create", value: 0 },
                { label: "Read", value: 18 },
                { label: "Update", value: 0 },
                { label: "Delete", value: 0 },
            ]
        },
        {
            name: "Stephen Diala",
            phone: "0801 234 5678",
            email: "example@email.com",
            role: "Snr. Frontend Engineer",
            permissions: [
                { label: "Create", value: 0 },
                { label: "Read", value: 0 },
                { label: "Update", value: 18 },
                { label: "Delete", value: 0 },
            ]
        }
    ]

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
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <h1 className="whitespace-nowrap font-semibold text-xl text-grey-dark-1">10 Members</h1>
                        <TableAction theme="secondary">
                            <Icon icon="ion:funnel" className="size-3" />
                            Filter
                        </TableAction>
                        <Input type="search" placeholder="Search" iconLeft="ph:magnifying-glass" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Button theme="ghost" onClick={() => setToggleModals((prev) => ({ ...prev, openDeleteAdmin: true }))}>
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
                                <MenuItem as="button" className="group flex w-full items-center gap-2 rounded-lg p-2 data-[focus]:bg-white/10 mb-1" onClick={() => setToggleModals((prev) => ({
                                    ...prev,
                                    openInviteAdmin: true,
                                }))}>
                                    Add a Personnel
                                </MenuItem>
                                <MenuItem as="button" className="group flex w-full items-center gap-2 rounded-lg p-2 data-[focus]:bg-white/10" onClick={() => setToggleModals((prev) => ({
                                    ...prev,
                                    openBulkInvite: true,
                                }))}>
                                    Bulk Upload
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
                <div className="flex flex-col gap-24">
                    <div className="lg:w-full lg:left-auto lg:relative lg:right-auto left-0 right-0 overflow-x-scroll scrollbar-hide">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-[#F5FBFD]">
                                    <th className="text-grey-dark-1 font-semibold text-xs py-2.5 px-2 text-left">Name</th>
                                    <th className="text-grey-dark-1 font-semibold text-xs py-2.5 px-2 text-left">Phone Number</th>
                                    <th className="text-grey-dark-1 font-semibold text-xs py-2.5 px-2 text-left">Email</th>
                                    <th className="text-grey-dark-1 font-semibold text-xs py-2.5 px-2 text-left">Role</th>
                                    <th className="text-grey-dark-1 font-semibold text-xs py-2.5 pr-4 text-left whitespace-nowrap">Permissions</th>
                                    <th className="text-grey-dark-1 font-semibold text-xs py-2.5 pr-4 text-left whitespace-nowrap">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    roles.map((role) =>
                                        <tr className="group rounded bg-white hover:bg-light-green transition-all ease-out duration-300" key={role.name}>
                                            <td className="pl-1.5 pr-4 lg:pr-0 py-3.5 text-left">
                                                <div className="flex items-center gap-2 text-sm text-grey-dark-2 group-hover:text-grey-dark-1 whitespace-nowrap">
                                                    <Checkbox name={""} checked={false} />
                                                    {role.name}
                                                </div>
                                            </td>
                                            <td className="pl-1.5 pr-4 lg:pr-0 py-3.5 text-left">
                                                <div className="flex items-center text-sm text-grey-dark-2 group-hover:text-grey-dark-1 whitespace-nowrap">
                                                    {role.phone}
                                                </div>
                                            </td>
                                            <td className="pl-1.5 pr-4 lg:pr-0 py-3.5 text-left">
                                                <div className="flex items-center text-sm text-grey-dark-2 group-hover:text-grey-dark-1 whitespace-nowrap">
                                                    {role.email}
                                                </div>
                                            </td>
                                            <td className="pl-1.5 pr-4 lg:pr-0 py-3.5 text-left">
                                                <div className="flex items-center text-sm text-grey-dark-2 group-hover:text-grey-dark-1 whitespace-nowrap">
                                                    {role.role}
                                                </div>
                                            </td>
                                            <td className="pr-4 py-3.5 text-right">
                                                <div className="flex items-center gap-8">
                                                    {
                                                        role.permissions.map((permission) =>
                                                        <div className="py-1 px-2 rounded-full text-xs/3.5 bg-grey-dark-4 text-grey-dark-1 whitespace-nowrap">
                                                            {permission.value} {permission.label}
                                                        </div>
                                                        )
                                                    }
                                                </div>
                                            </td>
                                            <td className="pr-4 py-3.5 text-right">
                                                <div className="flex items-center gap-4 whitespace-nowrap">
                                                    <button type="button" className="flex items-center px-1 gap-1 text-sm text-grey-dark-1" onClick={() => setToggleModals((prev) => ({
                                                        ...prev,
                                                        openEditAdmin: true,
                                                    }))}>
                                                        <Icon icon="ph:pencil-simple" className="size-4" />
                                                        Edit
                                                    </button>
                                                    <button type="button" className="flex items-center px-1 gap-1 text-sm text-semantics-red" onClick={() => setToggleModals((prev) => ({
                                                        ...prev,
                                                        openDeleteAdmin: true,
                                                    }))}>
                                                        <Icon icon="ph:trash" className="size-4" />
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <Pagination currentPage={1} totalPages={1} prev={() => {}} next={() => {}} goToPage={() => {}} />
                </div>
            </div>
            <BulkInvite isOpen={toggleModals.openBulkInvite} close={() => setToggleModals((prev) => ({
                ...prev,
                openBulkInvite: false,
            }))} />
            <DeleteAdmin isOpen={toggleModals.openDeleteAdmin} close={() => setToggleModals((prev) => ({
                ...prev,
                openDeleteAdmin: false,
            }))} />
            <EditAdmin isOpen={toggleModals.openEditAdmin} close={() => setToggleModals((prev) => ({
                ...prev,
                openEditAdmin: false,
            }))} />
            <InviteAdmin isOpen={toggleModals.openInviteAdmin} close={() => setToggleModals((prev) => ({
                ...prev,
                openInviteAdmin: false,
            }))} />
        </motion.div>
    )
}