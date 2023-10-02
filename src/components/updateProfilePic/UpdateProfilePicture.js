import React from "react";
import defaultProfile from "../../assets/Frame 427321648.png";
import cameraIcon from "./../../assets/Frame 427321659.png";
import { Link } from "react-router-dom";
import {MdOutlineArrowBackIosNew} from 'react-icons/md'

function UpdateProfilePicture({ handleUpdateAllData, profilePic, setProfilePic }) {
  const handleUpdate = () => {
    handleUpdateAllData();
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };
  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfilePic(reader.result);
    };
  };
  console.log(profilePic);

  return (

    <>
    <Link to='/signup-code' style={{textDecoration:'none'}}>
        <h2 className="text-blueButtonColor px-2 py-2 flex items-center font-medium text-base">
            <MdOutlineArrowBackIosNew />
            <span className="ml-0">Back</span>
        </h2>
    </Link>
    <div className="min-h-screen flex flex-col mt-10  items-center">
      <p className="text-textColorBlack text-center text-xl font-medium leading-5">
        Add a profile photo
      </p>
      <div className="mt-10 items-center">
        <div className="relative">
          <input type="file" className="hidden" id="file"

            onChange={(e) => handleImage(e)}

          />

          <label htmlFor="file" className="cursor-pointer">
            <img
              src={defaultProfile}
              alt="defaultProfile"
              className="rounded-full   object-cover w-40 h-40 no-repeat bg-cover"
            />
          </label>
          <div className="absolute bottom-0 right-0">
            <label htmlFor="file" className="cursor-pointer">
              <img src={cameraIcon}
                alt="cameraIcon" />
            </label>
          </div>
        </div>
        <label htmlFor="file" className="cursor-pointer">
          <p className="mt-0 ml-6 text-center text-blueButtonColor text-base leading-4 items-center font-semibold"

          >
            Change Photo
          </p>
        </label>
      </div>

      <div className="mt-10 items-center justify-center  w-full ">
        <button onClick={() => handleUpdate()} className="rounded-xl w-[95%] mx-2 items-center  h-[50px] pr-5 pl-4 bg-blueButtonColor text-[#FFFFFF]">
          <p className="text-white items-center text-center mb-0 text-xl font-semibold leading-6">
            Done
          </p>
        </button>
      </div>
    </div>
    </>
  );
}

export default UpdateProfilePicture;
