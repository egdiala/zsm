import React from "react";
import { cn } from "@/libs/cn";
import { Button } from "@/components/core";

interface UserCardHomeProps {
    [x: string]: any
}

export const UserCard: React.FC<UserCardHomeProps> = ({ className }) => {
    const userButtons = ["Change password", "Logout"];
    return (
        <div className={cn("flex flex-col p-6 gap-6 rounded-2xl bg-white", className)}>
            <div className="grid gap-3">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-36 h-40 border-5 shadow-xl shadow-[#4292001F] border-white rounded-2xl object-cover" alt="user" />
                <div className="grid gap-0.5">
                    <h1 className="text-grey-dark-1 text-xl font-semibold">Tumi123</h1>
                    <p className="text-[#01B692] text-sm font-medium">Super Admin</p>
                </div>
            </div>
            <div className="grid gap-2">
                {
                    userButtons.map((item) =>
                        <Button theme="arrow-cta-2" key={item}>{item}</Button>
                    )
                }
            </div>
        </div>
    )
}