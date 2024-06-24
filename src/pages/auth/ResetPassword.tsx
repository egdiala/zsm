import React from "react";
import { motion } from "framer-motion";
import { Button, PasswordInput } from "@/components/core";
import { routeVariants } from "@/constants/animateVariants";

export const ResetPasswordPage: React.FC = () => {
    return (
        <motion.div variants={routeVariants} initial='initial' animate='final' exit={routeVariants.initial} className="grid gap-7 p-8 bg-white max-w-md w-full h-fit place-self-center rounded-xl">
            <h1 className="font-bold text-[1.75rem] text-grey-dark-1 text-center">Enter New Password</h1>
            
            <form className="flex flex-col gap-7">
                <div className="grid gap-6">
                    <PasswordInput label="New Password" type="password" name="new_password" placeholder="●●●●●●●●" />
                    <PasswordInput label="Confirmed Password" type="password" name="confirm_password" placeholder="●●●●●●●●" />
                </div>
                <Button type="submit" theme="primary" block>Reset Password</Button>
            </form>
        </motion.div>
    )
}