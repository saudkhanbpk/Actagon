import React, { useState } from "react";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import {MdOutlineArrowBackIosNew} from 'react-icons/md'

const EmailCode = ({ step, setStep, handleemailOtp, otp, setOtp }) => {
  const handleVerify = () => {
    handleemailOtp();
  }
  return (
    <>
    <Link to='/' style={{textDecoration:'none'}}>
    <h2 className="text-blueButtonColor px-2 py-2 flex items-center font-medium text-base">
      <MdOutlineArrowBackIosNew />
      <span className="ml-0">Back</span>
    </h2>
  </Link>
    <div className="min-h-screen flex justify-center  mt-24">
      <div className="px-4 rounded-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-center  text-xl mb-8">
          Enter the Login code that we emailed you
        </h2>

        {/* OTP Input */}
        <div className="mb-3 border-none ">
          <OtpInput
            onChange={(value) => setOtp(value)}
            value={otp}
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
              color: "gray",
              background: "transparent",
              fontSize: "30px", // Use fontSize to make the dots larger
              border: "none", // Remove the border on the input
              outline: "none", // Remove the input outline
              padding: '4px'

            }}

            placeholder="●●●●●●"
          />
        </div>
        <div className="text-center">
          <p className="text-sm text-[#C5C5C6]">
            Didn't get it? <span className='text-blueButtonColor cursor-pointer'>Tap to Resend</span>
          </p>

        </div>

        {/* Button */}
        <div className="mt-24">
          {/* <Link to='/phone'> */}
          <button
            onClick={() => handleVerify()}
            className="w-full bg-blueButtonColor hover:bg-blue-600 text-[white] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out h-[45px]"
            type="submit"
          >
            Confirm
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default EmailCode