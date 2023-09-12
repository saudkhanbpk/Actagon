import React, { useState } from "react";

function Textcode() {
  const [otp, setOtp] = useState("");

  // Handle OTP input change
  const handleOtpChange = (e) => {
    const newOtp = e.target.value;
    setOtp(newOtp);
  };

  return (
    <div className="min-h-screen flex justify-center items-center mt-12">
      <div className="p-4 rounded-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-center text-xl font-[20px] mb-8">
        Enter the code we just texted You
        </h2>

        {/* OTP Input */}
        <div className="mb-4 border-none">
          <input
            type="password" // Use 'password' type to hide the characters
            value={otp}
            onChange={handleOtpChange}
            maxLength="6" // Assuming your OTP length is 6 digits
            className="w-full h-12 text-center border rounded-lg"
            placeholder="● ● ● ● ● ●" // Set the placeholder text here
            style={{ color: "#888" }}
          />
        </div>
        <div  className="text-center">
        <p className="text-sm text-[#C5C5C6]">
              Didn't get it? <span className='text-blue-500'>Tap to Resend</span>
            </p>
            <p className="mt-10">
            <span className='text-[#3478F6]'>I lost access to my number</span>
            </p>
        </div>

        {/* Button */}
        <div className="mt-14">
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out h-[45px]"
            type="submit"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Textcode;
