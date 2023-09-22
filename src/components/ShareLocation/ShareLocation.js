import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Marker, GoogleMap, useJsApiLoader } from "@react-google-maps/api";
function ShareLocation({ setShowModal, showModal, userLocation, generateShareableLink }) {
  const navigate = useNavigate();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,

  });
  const containerStyle = {
    width: "100%",
    height: "80vh",
  };

  // // Function to reset the shareable link and sharing status
  // const resetShareableLink = () => {
  //   setShareableLink("");
  //   setIsSharing(false);
  // };

  return isLoaded ? (
    <>
      <div className="px-2 pt-2 flex justify-between">
        <div onClick={() => navigate(-1)}>
          <p className="text-blueButtonColor flex items-center justify-start text-center text-base font-semibold leading-5">
            <MdOutlineArrowBackIosNew className="mr-2" />
            Back
          </p>
        </div>
        <p className="text-textColorBlack w-full mr-12 flex justify-center items-center text-center text-lg font-semibold leading-5">
          Share with
        </p>
      </div>
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <div className="w-full max-w-screen-md mt-4">
          {/* {userLocation && (
            <div>
              <p>Latitude: {userLocation.latitude}</p>
              <p>Longitude: {userLocation.longitude}</p>
              <button onClick={shareLocationWithFriends}>Share Location</button>
            </div>
          )} */}
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: userLocation?.latitude, lng: userLocation?.longitude }}
            zoom={15}
          >
            <Marker position={{ lat: userLocation?.latitude, lng: userLocation?.longitude }} />
          </GoogleMap>
          {userLocation && (
            <button className="
mt-2
            bg-blueButtonColor  text-[white] active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
            " onClick={generateShareableLink}>Share Live Location</button>
          )}
          {/* {isSharing && (
            <>
              <p>Shareable Link:</p>
              <input
                type="text"
                value={shareableLink}
                readOnly
                onClick={(e) => e.target.select()}
              />
              <button onClick={resetShareableLink}>Generate Another Link</button>
            </>
          )} */}
        </div>
      </div>
    </>
  ) : <></>;
}

export default ShareLocation;
