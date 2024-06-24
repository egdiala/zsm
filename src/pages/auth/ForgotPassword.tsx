import { Button, Input } from "@/components/core";
import React from "react";

export const ForgotPasswordPage: React.FC = () => {
    return (
        <div className="grid gap-7 pb-6 pt-8 px-12 bg-white max-w-md w-full h-fit place-self-center rounded-xl">
            <h1 className="font-bold text-[1.75rem] text-grey-dark-1 text-center">Forgot Password</h1>
            <form className="flex flex-col gap-7">
                <Input label="Email" type="text" name="email" placeholder="example@email.com" />
                <Button type="submit" theme="primary" block>Send OTP</Button>
            </form>
        </div>
    )
}