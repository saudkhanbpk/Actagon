import React, { useState } from "react";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import './style.css';


function Textcode() {
  const [otp, setOtp] = useState("");

  return (
    <div className="min-h-screen flex justify-center items-center mt-2">
      <div className="p-4 rounded-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-center text-xl font-[20px] mb-8">
          Enter the code we just texted You
        </h2>

        {/* OTP Input */}
        <div className="mb-3 border-none ">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span> </span>}
            renderInput={(props) => <input {...props} />}
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
        </div>
        <div className="text-center">
          <p className="text-sm text-[#C5C5C6]">
            Didn't get it? <span className="text-blue-500">Tap to Resend</span>
          </p>
          <p className="mt-10">
            <span className="text-[#3478F6]">I lost access to my number</span>
          </p>
        </div>

        {/* Button */}
        <div className="mt-14">
          <Link to="/logincode">
            <button
              className="w-full bg-blueButtonColor hover:bg-blue-600 text-[white] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out h-[45px]"
              type="submit"
            >
              Confirm
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Textcode;
