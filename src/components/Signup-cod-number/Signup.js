import React, { useState } from "react";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { MdOutlineArrowBackIosNew } from "react-icons/md";


function SignupCode() {
  const [otp, setOtp] = useState("");

  return (
    <>
      <Link to='/signup'>
        <h2 className="text-blueButtonColor px-5 py-2 flex items-center font-medium text-base">
          <MdOutlineArrowBackIosNew />
          <span className="ml-2">Back</span>
        </h2>
      </Link>
      <div className="min-h-screen flex justify-center items-center mt-2">
        <div className="p-4 rounded-lg w-full max-w-md">

          <h2 className="text-center text-lg font-medium mb-8">
            Enter the code we just texted You
          </h2>

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
                borderRadius: "14px",
              }}
              inputStyle={{
                color: "#888",
                background: "transparent",
                fontSize: "30px",
                border: "none",
                outline: "none",
                padding: '4px'
              }}
              placeholder="●●●●●●"

            />
          </div>
          <div className="text-center">
            <p className="text-sm text-[#C5C5C6]">
              Didn't get it? <span className="text-blueButtonColor">Tap to Resend</span>
            </p>
            <p className="mt-10">
              <span className="text-blueButtonColor">I lost access to my phone number</span>
            </p>
          </div>


          <div className="mt-14">
            <Link to="/signup-email">
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
    </>
  );
}

export default SignupCode;
