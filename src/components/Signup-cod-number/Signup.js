import React, { useState } from "react";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";

function SignupCode({ setStep, step, verifyPhoneOtp, code, setCode }) {
  const handleVerifyOtp = () => {
    verifyPhoneOtp();
  };

  return (
    <div className="min-h-screen flex justify-center items-center mt-2">
      <div className="p-4 rounded-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-center line-height: 1.25rem font-medium mb-8">
          Enter the Code we just texted You
        </h2>

        {/* OTP Input */}
        <div className="mb-4 border-none">
          <input
            type="number"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength="6"
            className="w-full h-10 text-center border rounded-lg"
            placeholder="● ● ● ● ● ●"
            style={{ color: "#888" }}
          />
        </div>
        <div className="text-center">
          <p className="text-sm text-[#C5C5C6]">
            Didn't get it?{" "}
            <span className="text-blueButtonColor">Tap to Resend</span>
          </p>
          <p className="mt-8">
            <span className="text-[#3478F6] line-height: 1rem font-normal">
              I lost access to my phone number
            </span>
          </p>
        </div>

        <div className="mt-14">
          {/* <Link to='/signup-email'> */}
          <button
            onClick={() => handleVerifyOtp()}
            className="w-full bg-blueButtonColor  text-[white] font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out"
            type="submit"
          >
            Confirm
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default SignupCode;
