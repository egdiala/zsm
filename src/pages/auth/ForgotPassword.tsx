import React from "react";
import { motion } from "framer-motion";
import { Button, Input } from "@/components/core";
import { routeVariants } from "@/constants/animateVariants";

export const ForgotPasswordPage: React.FC = () => {
    return (
        <motion.div variants={routeVariants} initial='initial' animate='final' exit={routeVariants.initial} className="grid gap-7 p-8 bg-white max-w-md w-full h-fit place-self-center rounded-xl">
            <h1 className="font-bold text-[1.75rem] text-grey-dark-1 text-center">Forgot Password</h1>
            <form className="flex flex-col gap-7">
                <Input label="Email" type="text" name="email" placeholder="example@email.com" />
                <Button type="submit" theme="primary" block>Send OTP</Button>
            </form>
        </motion.div>
    )
}