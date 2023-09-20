import React from "react";
import defaultProfile from "../../assets/Frame 427321648.png";
import cameraIcon from "./../../assets/Frame 427321659.png";
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
    <div className="min-h-screen flex flex-col mt-20  items-center">
      <p className="text-textColorBlack text-center text-xl font-medium leading-5">
        Add a profile photo
      </p>
      <div className="mt-20">
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
          <p className="mt-5 text-center text-blueButtonColor text-base leading-4 font-semibold"

          >
            Change Photo
          </p>
        </label>
      </div>

      <div className="mt-20">
        <button onClick={() => handleUpdate()} className=" w-[243px] rounded-xl  pt-3 pr-5 pb-3 pl-4 bg-blueButtonColor text-[#FFFFFF]">
          <p className="text-white text-center text-xl font-semibold leading-6">
            Done
          </p>
        </button>
      </div>
    </div>
  );
}

export default UpdateProfilePicture;
