import { Button } from "@mui/material";
import React, { useState } from "react";


function OTPVerification() {

    const [step, setStep] = useState(1);
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [otp, setOtp] = useState("");
    const [generatedOtp, setGeneratedOtp] = useState(null);
    const handleLogin = () => {
        if (credentials.username && credentials.password) {
            const newOtp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
            setGeneratedOtp(newOtp);
            console.log("Generated OTP:", newOtp); // Simulate sending OTP
            setStep(2);
        }
    };

    const verifyOtp = () => {
        if (parseInt(otp) === generatedOtp) {
            setStep(3);
        }
    };
    function change(e) {
        setCredentials({ ...credentials, username: e.target.value })
    }
    return (
        <>

            <div className="p-6 max-w-sm mx-auto">
                <div className="p-6 text-center">
                    {step === 1 && (
                        <>
                            <h2 className="text-lg font-semibold">Login</h2>
                            <input
                                placeholder="Username"
                                className="mb-2"
                                onChange={(e) => change}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="mb-2"
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            />
                            <Button onClick={handleLogin}>Get OTP</Button>
                        </>
                    )}


                    {step === 2 && (
                        <>
                            <h2 className="text-lg font-semibold">Login</h2>
                            <Input type="text"
                                placeholder="Username"
                                className="mb-2"
                                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                            />
                            <Input
                                type="password"
                                placeholder="Password"
                                className="mb-2"
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            />
                            <Button onClick={handleLogin}>Get OTP</Button>
                        </>
                    )}

                    {step === 3 && (
                        <h2 className="text-green-500 text-lg font-semibold">Verification Successful! ✅</h2>
                    )}
                </div>
            </div>
        </>
    )
}
export default OTPVerification