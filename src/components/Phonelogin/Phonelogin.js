import React from "react";
import "react-phone-input-2/lib/style.css"; // Import the library's CSS
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";

function Phonelogin() {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className=" p-4 rounded-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-center text-2xl font-[20px] mb-8">
          Welcome back <br />
          Enter your phone number:
        </h2>

        {/* Phone Input */}
        <div className="mb-4 border-none mt-6">
          {" "}
          <PhoneInput
            inputProps={{
              id: "phoneInput",
              name: "phoneInput",
              required: true,
            }}
            country={"us"} // Set the default country (you can change this)
            inputStyle={{ width: "100%",height:"45px", border:'none',background:'rgba(118, 118, 128, 0.12)' }}
          />
        </div>

        {/* Button */}
        
        <div className="mt-28">
        <Link to='/text'>
          <button
            className="w-full h-[45px] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out"
            type="submit"
          >
            NEXT
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Phonelogin;
