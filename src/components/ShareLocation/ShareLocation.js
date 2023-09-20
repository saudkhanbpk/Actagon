import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function ShareLocation() {
  return (
    <>
    <div className="px-2 pt-2 flex justify-between">
        <Link to="/location">
          <p className="text-blueButtonColor flex items-center justify-start text-center text-base font-semibold leading-5">
            <MdOutlineArrowBackIosNew className="mr-2" />
            Back
          </p>
        </Link>
        <p className="text-textColorBlack w-full mr-12 flex justify-center items-center text-center text-lg font-semibold leading-5">
          Share with
        </p>
      </div>
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      
      <div className="w-full max-w-screen-md mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425267.6040661511!2d72.75657028561868!3d33.62078723291668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfa17c956c1d%3A0xb6380dbc6614a792!2sIslamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694777001115!5m2!1sen!2s"
          width="100%"
          height="400" // You can adjust the height as needed
          title="Google Maps"
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
    </>
  );
}

export default ShareLocation;


