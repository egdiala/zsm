import React, {  } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { pageVariants } from "@/constants/animateVariants";
import { Button, Checkbox, Input, Pagination, TableAction } from "@/components/core";

export const RolesPage: React.FC = () => {
    const navigate = useNavigate()
    const roles = [
        {
            name: "Support",
            permissions: [
                { label: "Create", value: 0 },
                { label: "Read", value: 18 },
                { label: "Update", value: 0 },
                { label: "Delete", value: 0 },
            ]
        },
        {
            name: "Super Admin",
            permissions: [
                { label: "Create", value: 0 },
                { label: "Read", value: 0 },
                { label: "Update", value: 18 },
                { label: "Delete", value: 0 },
            ]
        },
        {
            name: "HR",
            permissions: [
                { label: "Create", value: 0 },
                { label: "Read", value: 0 },
                { label: "Update", value: 0 },
                { label: "Delete", value: 18 },
            ]
        },
        {
            name: "Sales",
            permissions: [
                { label: "Create", value: 18 },
                { label: "Read", value: 0 },
                { label: "Update", value: 0 },
                { label: "Delete", value: 0 },
            ]
        },
    ]
    return (
        <motion.div variants={pageVariants} initial='initial' animate='final' exit={pageVariants.initial} className="flex flex-col gap-6 px-4 md:px-8 pt-9 md:pt-[3.25rem] pb-7 md:pb-9 max-w-[1800px] w-full mx-auto h-full">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="grid">
                    <h1 className="text-white text-3xl font-medium">Admin Role</h1>
                    <p className="text-grey-dark-4 text-base">Manage admin account access to this portal</p>
                </div>
                <Button theme="white" onClick={() => navigate("/")}>
                    <Icon icon="ic:round-home" className="size-6" />
                    Home
                </Button>
            </div>
            <div className="flex flex-col h-full flex-1 gap-4 bg-white px-6 py-[1.375rem] rounded-md">
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
                        <Button theme="ghost">
                            <Icon icon="ph:trash" className="size-4" />
                            Delete
                        </Button>
                        <TableAction theme="tertiary">
                            <Icon icon="radix-icons:arrow-top-right" className="size-4" />
                            Export
                        </TableAction>
                        <TableAction theme="secondary" onClick={() => navigate("/roles/create")}>
                            <Icon icon="ph:plus-bold" className="size-4" />
                            Add New Role
                        </TableAction>
                    </div>
                </div>
                <div className="flex flex-col gap-24">
                    <div className="lg:w-full lg:left-auto lg:relative lg:right-auto left-0 right-0 overflow-x-scroll scrollbar-hide">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-[#F5FBFD]">
                                    <th className="text-grey-dark-1 font-semibold text-xs py-2.5 px-2 text-left">Name</th>
                                    <th className="text-grey-dark-1 font-semibold text-xs py-2.5 pr-4 text-left whitespace-nowrap">Permissions</th>
                                    <th className="text-grey-dark-1 font-semibold text-xs py-2.5 pr-4 text-left whitespace-nowrap">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    roles.map((role) =>
                                        <tr className="group rounded bg-white hover:bg-light-green transition-all ease-out duration-300" key={role.name} onClick={() => navigate("/roles/view")}>
                                            <td className="pl-1.5 pr-4 lg:pr-0 py-3.5 text-left">
                                                <div className="flex items-center gap-2 text-sm text-grey-dark-2 group-hover:text-grey-dark-1 whitespace-nowrap">
                                                    <Checkbox name={""} checked={false} />
                                                    {role.name}
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
                                                    <button type="button" className="flex items-center px-1 gap-1 text-sm text-grey-dark-1" onClick={() => navigate("/roles/edit")}>
                                                        <Icon icon="ph:pencil-simple" className="size-4" />
                                                        Edit
                                                    </button>
                                                    <button type="button" className="flex items-center px-1 gap-1 text-sm text-semantics-red">
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
                    <Pagination currentPage={24} totalPages={30} prev={() => {}} next={() => {}} goToPage={() => {}} />
                </div>
            </div>
        </motion.div>
    )
}