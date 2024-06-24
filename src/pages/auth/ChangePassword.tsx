import React from "react";
import { Button, PasswordInput } from "@/components/core";

export const ChangePasswordPage: React.FC = () => {
    return (
        <div className="grid gap-7 pb-6 pt-8 px-12 bg-white max-w-md w-full h-fit place-self-center rounded-xl">
            <div className="grid gap-1 justify-items-center">
                <h1 className="font-bold text-[1.75rem] text-grey-dark-1 text-center">Change your password</h1>
                <p className="font-normal text-sm text-grey-dark-1 text-center">Please change your default password to a new one.</p>
            </div>
            
            <form className="flex flex-col gap-7">
                <div className="grid gap-6">
                    <PasswordInput label="New Password" type="password" name="new_password" placeholder="●●●●●●●●" showPassword />
                    <PasswordInput label="Confirm New Password" type="password" name="confirm_password" placeholder="●●●●●●●●" showPassword />
                </div>
                <Button type="submit" theme="primary" block>Sign In</Button>
            </form>
        </div>
    )
}