import React, { useState } from "react";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function SignupCode({ setStep, step, verifyPhoneOtp, code, setCode }) {
  const handleVerifyOtp = () => {
    verifyPhoneOtp();
  };

  return (
    <div className="min-h-screen flex justify-center items-center mt-2">
      <div className="p-4 rounded-lg w-full max-w-md">

        <div className="min-h-screen flex justify-center items-center mt-2">
          <div className="p-4 rounded-lg w-full max-w-md">

            <h2 className="text-center text-base font-medium mb-8">
              Enter the code we just texted You
            </h2>
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
            {/* <div className="mb-3 border-none ">
          <OtpInput
            value={code}
            onChange={(e) => setCode(e.target.value)}
            // renderSeparator={<span> </span>}
            containerStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40px",
              background: "lightgray",
              color: "#888",
              // border: '1px solid',
              borderRadius: "14px", // Add this line to round the input border
            }}
            inputStyle={{
              color: "#888",
              background: "transparent",
              fontSize: "30px", // Use fontSize to make the dots larger
              border: "none", // Remove the border on the input
              outline: "none", // Remove the input outline
              padding:'4px'
            }}
            placeholder="●●●●●●"
            
          />
        </div> */}
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
      </div>
    </div>

  );
}

export default SignupCode;
