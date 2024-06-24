import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, OtpInput } from "@/components/core";

export const VerifyEmailPage: React.FC = () => {
    const [otp, setOtp] = useState<string>("");
    const [countdown, setCountdown] = useState<number>(120);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    useEffect(() => {
        let interval: any;
        if (isButtonDisabled) {
          interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
          }, 1000);
        }
    
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [isButtonDisabled]);
    
    useEffect(() => {
        if (countdown <= 0) {
          clearInterval(countdown);
          setIsButtonDisabled(false);
          setCountdown(60); // Reset countdown (optional if button is not disabled again)
        }
    }, [countdown]);

    const handleResendClick = () => {
        setIsButtonDisabled(true);
        setCountdown(60); // Reset the timer
    };

    const formatCountdown = (countdown: number) => {
        const minutes = Math.floor(countdown / 60).toString().padStart(2, "0");
        const seconds = (countdown % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    
    return (
        <div className="grid gap-7 pb-6 pt-8 px-10 bg-white max-w-md w-full h-fit place-self-center rounded-xl">
            <div className="grid gap-2 justify-items-center">
                <h1 className="font-bold text-[1.75rem] text-grey-dark-1 text-center">Verify Your Email</h1>
                <p className="font-normal text-sm text-grey-dark-1 text-center">
                    Enter the 4 - digit code sent to john@gmail.com <br />
                    <Link to="/auth/forgot-password" className="text-green text-base font-bold decoration-green underline underline-offset-2">Edit Email Address</Link>
                </p>
            </div>
            <div className="flex flex-col gap-7">
                <div className="grid gap-7">
                    <OtpInput value={otp} onChange={(v: any) => setOtp(v)} />
                    <div className="flex items-center justify-center text-grey-0 text-base">
                        Didn’t receive a code? { isButtonDisabled ? <>Resend in <span className="font-bold text-green">&nbsp;{formatCountdown(countdown)}</span></> : <button type="button" className="font-bold text-green disabled:cursor-not-allowed" disabled={isButtonDisabled} onClick={handleResendClick}>&nbsp;Resend Now</button> }
                    </div>
                </div>
                <Button type="submit" theme="primary" block>Verify</Button>
            </div>
        </div>
    )
}