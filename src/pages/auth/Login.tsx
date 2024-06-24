import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { routeVariants } from "@/constants/animateVariants";
import { Button, Input, PasswordInput } from "@/components/core";

export const LoginPage: React.FC = () => {
    return (
        <motion.div variants={routeVariants} initial='initial' animate='final' exit={routeVariants.initial} className="grid gap-7 p-8 bg-white max-w-md w-full h-fit place-self-center rounded-xl">
            <h1 className="font-bold text-[1.75rem] text-grey-dark-1 text-center">Sign in</h1>
            <form className="flex flex-col gap-7">
                <div className="grid gap-6">
                    <Input label="Email" type="text" name="email" placeholder="example@email.com" />
                    <PasswordInput label="Password" type="password" name="password" placeholder="●●●●●●●●" showPassword />
                    <Link to="/auth/forgot-password" className="text-grey-0 text-sm font-medium">Forget Password?</Link>
                </div>
                <Button type="submit" theme="primary" block>Sign In</Button>
            </form>
        </motion.div>
    )
}