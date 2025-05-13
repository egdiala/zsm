import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LoginPayload } from "@/types/auth";
import { loginSchema } from "@/helepers/validationSchemas";
import { routeVariants } from "@/constants/animateVariants";
import { useFormikWrapper } from "@/hooks/use-formik-wrapper";
import { useLogin } from "@/services/hooks/mutations/use-auth";
import { Button, Input, PasswordInput } from "@/components/core";

export const LoginPage: React.FC = () => {
    const { mutate: login, isPending } = useLogin();
    
    const { register, handleSubmit } = useFormikWrapper<LoginPayload>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            login(values)
        }
    })
    return (
        <motion.div variants={routeVariants} initial='initial' animate='final' exit={routeVariants.initial} className="grid gap-7 p-7 lg:p-8 bg-white max-w-md w-full h-fit place-self-center rounded-xl">
            <h1 className="font-bold text-[1.75rem] text-grey-dark-1 text-center">Sign in</h1>
            <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
                <div className="grid gap-6">
                    <Input label="Email" type="text" placeholder="example@email.com" {...register("email")} />
                    <PasswordInput label="Password" type="password" placeholder="●●●●●●●●" showPassword {...register("password")} />
                    <Link to="/auth/forgot-password" className="text-grey-0 text-sm font-medium">Forget Password?</Link>
                </div>
                <Button type="submit" theme="primary" loading={isPending} disabled={isPending} block>Sign In</Button>
            </form>
        </motion.div>
    )
}