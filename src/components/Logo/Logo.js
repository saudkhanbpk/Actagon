import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
const Logo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center  justify-between">
      <div
        className="
      mt-20
      "
      >
        <img src={logo} alt="logo"

          className="w-[200px] h-[200px] object-contain"

        />
      </div>
      <div className="w-full max-w-md px-3 mb-10">
        <Link to="/register">
          <button className="w-full font-sf bg-blueButtonColor text-[white] font-medium py-2 px-4 rounded-md mb-4">
            Sign up
          </button>
        </Link>
        <Link to="/login">
          <button className="w-full text-blueButtonColor font-medium py-2 px-4 rounded">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
