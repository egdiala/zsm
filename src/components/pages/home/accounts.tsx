import React from "react";
import { cn } from "@/libs/cn";
import { Icon } from "@iconify/react";
import { Button } from "@/components/core";
import { useNavigate } from "react-router-dom";

interface AccountsHomeProps {
    [x: string]: any
}

export const Accounts: React.FC<AccountsHomeProps> = ({ className }) => {
    const navigate = useNavigate();
    const accountsButtons = [
        { label: "Add Admin Account", action: () => { } },
        { label: "Add New Role", action: () => navigate("/roles/create") }
    ];
    return (
        <div className={cn("flex flex-col p-6 gap-[2.5625rem] rounded-2xl bg-white", className)}>
            <div className="grid">
                <h1 className="text-grey-dark-1 text-xl font-semibold">Accounts</h1>
                <p className="text-grey-dark-2 text-sm">Manage all admin accounts on the platform</p>
            </div>
            <div className="flex items-center -space-x-1.5">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="size-11 object-cover border-2 border-white rounded-full" alt="bell_3d" />
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="size-11 object-cover border-2 border-white rounded-full" alt="bell_3d" />
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="size-11 object-cover border-2 border-white rounded-full" alt="bell_3d" />
                <button type="button" className="grid size-11 border-2 border-white rounded-full bg-[#ECF4E5] shadow-xl shadow-[#4292001F]" onClick={accountsButtons[1].action}>
                    <Icon icon="radix-icons:plus" className="size-5 text-grey-dark-3 place-self-center" />
                </button>
            </div>
            <div className="grid gap-2 flex-1 content-end">
                {
                    accountsButtons.map((item) =>
                        <Button theme="arrow-cta-2" key={item.label} onClick={item.action}>{item.label}</Button>
                    )
                }
            </div>
        </div>
    )
}