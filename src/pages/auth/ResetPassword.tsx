import React from "react";
import { Button, PasswordInput } from "@/components/core";

export const ResetPasswordPage: React.FC = () => {
    return (
        <div className="grid gap-7 pb-6 pt-8 px-12 bg-white max-w-md w-full h-fit place-self-center rounded-xl">
            <h1 className="font-bold text-[1.75rem] text-grey-dark-1 text-center">Enter New Password</h1>
            
            <form className="flex flex-col gap-7">
                <div className="grid gap-6">
                    <PasswordInput label="New Password" type="password" name="new_password" placeholder="●●●●●●●●" />
                    <PasswordInput label="Confirmed Password" type="password" name="confirm_password" placeholder="●●●●●●●●" />
                </div>
                <Button type="submit" theme="primary" block>Reset Password</Button>
            </form>
        </div>
    )
}