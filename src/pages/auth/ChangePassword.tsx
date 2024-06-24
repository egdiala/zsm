import React from "react";
import { motion } from "framer-motion";
import { Button, PasswordInput } from "@/components/core";
import { routeVariants } from "@/constants/animateVariants";

export const ChangePasswordPage: React.FC = () => {
    return (
        <motion.div variants={routeVariants} initial='initial' animate='final' exit={routeVariants.initial} className="grid gap-7 p-8 bg-white max-w-md w-full h-fit place-self-center rounded-xl">
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
        </motion.div>
    )
}