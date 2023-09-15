import React from "react";
import backButton from "./../../assets/Back Button.png";
import defaultProfile from "../../assets/Frame 427321648.png";
import cameraIcon from "./../../assets/Frame 427321659.png";
import BottomNavigation from "../bottomNavigation/BottomNavigation";
function Profile() {
  return (
    <>
      <div
        className=" flex justify-between p-2 items-center"
        style={{ background: "#F2F2F6" }}
      >
        <div>
          <img src={backButton} alt="backButton" className="

          w-[107px] h-[44px]
          " />
        </div>
        <div>
          <p className="text-textColorBlack text-center text-lg font-medium leading-5">
            Profile
          </p>
        </div>
        <div>
          <p className="text-blueButtonColor text-center text-base font-medium leading-5">
            Update
          </p>
        </div>
      </div>
      <div
        className="min-h-screen flex flex-col   items-center"
        style={{ background: "#F2F2F6" }}
      >
        <div className="relative">
          <input type="file" className="hidden" id="file" />
          <label htmlFor="file" className="cursor-pointer">
            <img
              src={defaultProfile}
              alt="defaultProfile"
              className="rounded-full   object-cover w-40 h-40 no-repeat bg-cover"
            />
          </label>
          <div className="absolute bottom-0 right-0">
            <label htmlFor="file" className="cursor-pointer">
              <img src={cameraIcon} alt="cameraIcon" />
            </label>
          </div>
        </div>
        <label htmlFor="file" className="cursor-pointer">
          <p className="mt-5 mb-3 text-center text-textColorBlack text-base leading-6 font-semibold">
            Imran khan
          </p>
        </label>
        <div
          className="w-[361px] h-[51px] flex items-center bg-[#ffff]"
          style={{
            borderRadius: "12px 12px 0px 0px",
          }}
        >
          <p className="p-3 text-textColorBlack text-base font-normal leading-5">
            First name
          </p>
          <p className="px-16 text-blueButtonColor text-base font-normal leading-5">
            imrankhan
          </p>
        </div>
        <div
          className="w-[361px] h-[51px] flex items-center bg-[#ffff]"
          style={{
            borderRadius: "12px 12px 0px 0px",
          }}
        >
          <p className="p-3 text-textColorBlack text-base font-normal leading-5">
            Last name
          </p>
          <p className="px-16 text-blueButtonColor text-base font-normal leading-5">
            khan
          </p>
        </div>
        <div
          className="w-[361px] h-[51px] flex items-center bg-[#ffff]"
          style={{
            borderRadius: "12px 12px 0px 0px",
          }}
        >
          <p className="p-3 text-textColorBlack text-base font-normal leading-5">
            User name
          </p>
          <p className="px-16 text-blueButtonColor text-base font-normal leading-5">
            @imrankhan2012
          </p>
        </div>
      </div>
      {/* <BottomNavigation /> */}
    </>
  );
}

export default Profile;
