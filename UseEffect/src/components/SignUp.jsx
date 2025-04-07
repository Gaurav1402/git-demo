import React, { useEffect, useState } from "react";

function SignUp() {
    const [userInfo, setUserInfo] = useState({
        email: "", otp: ""
    })
    const [showOtpField, setShowOtpField] = useState(false)
    const [showField, setShowField] = useState(true)
    const [otpGen, setOptGen] = useState(0)
    const [timer, setTimer] = useState(0)

    function handleUser(event) {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value })
    }
    function getOtp() {
        let otp = Math.floor(1000 + Math.random() * 9000);
        console.log(otp);
        setOptGen(otp);
        setShowOtpField(true); //
        setTimer(30);
        setUserInfo({ ...userInfo, otp: "" })
    }
    useEffect(() => {
        let interval;
        if (showOtpField && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setShowOtpField(false);
        }
        return () => clearInterval(interval);
    }, [showOtpField, timer]);

    function display() {
        if (userInfo.otp == otpGen) {
            alert("Otp Verified")
            setShowOtpField(false);
            setShowField(false)
        } else {
            alert("Please check Otp")
        }
    }

    return (
        <>
            <div className='conatiner p-4 border'>
                <div className="input-group mb-3">
                    <label className="form-label" >Email Id : </label>
                    <input type="text" className="form-control ms-2" id="email" name="email" value={userInfo.email} onChange={(e) => handleUser(e)} placeholder='Enter Email Id' />
                    {(showField && !showOtpField) && <button type="button" className="btn btn-primary ms-2" onClick={getOtp}>Get Otp</button>}

                </div>
                {!showField && <label className="form-label ms-2" >your email id {userInfo.email}is verified</label>}
                {showOtpField && <div className="input-group mb-3">
                    <label className="form-label" >Enter OTP : </label>
                    <input type="text" className="form-control ms-2" id="otp" name="otp" value={userInfo.otp} onChange={(e) => handleUser(e)} placeholder='Enter OTP' />
                    <button type="button" className="btn btn-success ms-2" onClick={display}>Verify OTP</button>
                    <label className="form-label ms-2" >Otp Valid For : {timer}</label>
                </div>
                }
            </div>
        </>
    )
}
export default SignUp