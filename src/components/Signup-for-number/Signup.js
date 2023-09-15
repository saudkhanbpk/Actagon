import React from "react";
import "react-phone-input-2/lib/style.css"; // Import the library's CSS
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";

function Signup({ setStep, step, handlePhoneAuth, number, setNumber }) {
  const sendOtp = () => {
    handlePhoneAuth();
    // setTimeout(() => {
    //   setStep(step + 1);
    // }, 4000);
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="p-4 rounded-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-20 mb-20">
          Let’s get you signed up!
        </h2>
        <div className="mb-20">
          <div className="mb-4 border-none">
            <PhoneInput
              value={number}
              onChange={(phone) => setNumber(
                `+${phone}`
              )}
              inputProps={{
                id: "phoneInput",
                name: "phoneInput",
                required: true,
                autoFocus: true,
              }}
              country={"pk"} // Set the default country (you can change this)
              inputStyle={{
                width: "100%",
                height: "45px",
                border: "none",
                background: "rgba(118,118,128,0.12)",
              }}
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-[#C5C5C6]">
              By providing your phone number, you’re agree to the term of{" "}
              <span className="text-blueButtonColor">privacy</span> and{" "}
              <span className="text-blueButtonColor">policy.</span>
            </p>
          </div>
          <div className="mt-6">
            {/* <Link to='/signup-code'> */}
            <button
              onClick={() => sendOtp()}
              className="w-full bg-blueButtonColor text-[white] font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out"
              type="submit"
            >
              Next
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
