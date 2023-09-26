import React from "react";
import {MdArrowBackIos} from 'react-icons/md'
import defaultProfile from "../../assets/Frame 427321648.png";
import cameraIcon from "./../../assets/Frame 427321659.png";
import BottomNavigation from "../bottomNavigation/BottomNavigation";
function Profile({ user, setUser }) {
  return (
    <>
      <div
        className="flex justify-between p-2 items-center"
        style={{ background: "#F2F2F6" }}
      >
        <div>
          <MdArrowBackIos className="text-blueButtonColor text-xl" />
        </div>
        <div>
          <p className="text-textColorBlack  text-center text-lg font-medium leading-5">
            Profile
          </p>
        </div>
        <div>
          <p className="text-blueButtonColor  text-center text-base font-medium leading-5">
            Update
          </p>
        </div>
      </div>
      <div
        className="min-h-screen flex flex-col items-center"
        style={{ background: "#F2F2F6" }}
      >
        <div className="relative">
          <input type="file" className="hidden" id="file" />
          <label htmlFor="file" className="cursor-pointer">
            <img
              src={user?.profile_img ? user?.profile_img : defaultProfile}
              alt="defaultProfile"
              className="rounded-full object-cover no-repeat bg-cover"
              style={{width: '80px', height: '80px'}}
            />
          </label>
          <div className="absolute bottom-0 right-0">
            <label htmlFor="file" className="cursor-pointer" >
              <img src={cameraIcon} alt="cameraIcon" style={{ width: '30px', height: '30px'}}/>
            </label>
          </div>
        </div>
        <label htmlFor="file" className="cursor-pointer">
          <p className="mt-5 mb-3 text-center text-textColorBlack text-base leading-6 font-semibold">
            {`${user?.firstName} ${user?.lastName}`}
          </p>
        </label>
        {/* <div
          className="w-[300px] h-[51px] flex items-center bg-[#ffff]"
          style={{
            borderRadius: "12px 12px 0px 0px",
          }}
        >
          <p className="p-3 text-textColorBlack text-base font-normal leading-5">
            First name
          </p>
          <p className="px-16 text-blueButtonColor text-base font-normal leading-5">
            {user?.firstName}
          </p>
        </div>
        <div
          className="w-[300px] h-[51px] flex items-center bg-[#ffff]"
          style={{
            borderRadius: "12px 12px 0px 0px",
          }}
        >
          <p className="p-3 text-textColorBlack text-base font-normal leading-5">
            Last name
          </p>
          <p className="px-16 text-blueButtonColor text-base font-normal leading-5">
            {user?.lastName}
          </p>
        </div>
        <div
          className="w-[300px] h-[51px] flex items-center bg-[#ffff]"
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
        </div> */}

        <div className='px-3 w-full'>
          <div className="bg-[#FFF] py-2" style={{ borderRadius: '12px 12px 12px 12px' }}>
            <div className=" flex items-center w-full" style={{ borderBottom: '1px solid #C6C6C8', }}>
              <span className="w-full py-2 px-1 border-none  font-medium text-textColorBlack text-base rounded-t-md ">First Name</span>
              <span className="w-full py-2 px-10 border-none  font-normal text-blueButtonColor text-base rounded-t-md "> {user?.firstName}</span>
            </div>
            <div className=" flex items-center w-full" style={{ borderBottom: '1px solid #C6C6C8', }}>
              <span className="w-full py-2 px-1 border-none  font-medium text-textColorBlack text-base rounded-t-md ">Last Name</span>
              <span className="w-full py-2 px-10 border-none  font-normal text-blueButtonColor text-base rounded-t-md "> {user?.lastName}</span>
            </div>
            <div className=" flex items-center w-full">
              <span className="w-full py-2 px-1 border-none  font-medium text-textColorBlack text-base rounded-t-md ">User Name</span>
              <span className="w-full py-2 px-10 border-none  font-normal text-blueButtonColor text-base rounded-t-md ">@imrankhan2012</span>
            </div>
          </div>
        </div>


      </div>
      {/* <BottomNavigation /> */}
    </>
  );
}

export default Profile;
