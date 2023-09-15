import React from "react";
import "react-phone-input-2/lib/style.css"; // Import the library's CSS
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";

function Phonelogin({ step, setStep, handleEmailAuth, email, setEmail }) {
  const handleLogin = () => {
    handleEmailAuth();
  }
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className=" p-4 rounded-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-center text-2xl font-[20px] mb-8">
          Welcome back <br />
          Enter your Email:
        </h2>

        {/* Phone Input */}
        <div className="mb-4 border-none mt-6">
          {" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full h-[45px] border-none bg-[#F1F1F1] rounded-lg px-4"
          />
          <p className="text-xs text-end text-[#707070] mt-2">
            We'll send a code to your email
          </p>

        </div>

        {/* Button */}

        <div className="mt-24">
          {/* <Link to='/text'> */}

          <button
            onClick={() => handleLogin()}
            className="w-full h-[45px] bg-blueButtonColor hover:bg-blue-600 text-[white] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out"
            type="submit"
          >
            NEXT
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Phonelogin;
