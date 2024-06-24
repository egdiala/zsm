import React from "react";
import { Button } from "@/components/core";
import successLogo from "@/assets/verified_mark_3d.webp";

export const ChangePasswordSuccessPage: React.FC = () => {
    return (
        <div className="grid gap-8 pb-6 pt-8 px-12 bg-white max-w-md w-full h-fit place-self-center rounded-xl">
            <div className="grid gap-1 content-start">
                <img src={successLogo} alt="success_logo" width={122} height={122} className="mx-auto" />
                <div className="grid gap-1 justify-items-center">
                    <h1 className="font-bold text-[1.75rem] text-grey-dark-1 text-center">Good Job</h1>
                    <p className="font-normal text-sm text-grey-dark-1 text-center">You have successfully changed your password, Kindly Sign in to your account.</p>
                </div>
            </div>
            
            <Button type="submit" theme="primary" block>Sign In</Button>
        </div>
    )
}