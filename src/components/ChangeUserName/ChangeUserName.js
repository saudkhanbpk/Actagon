import React from "react";

function ChangeUserName() {
  return (
    <>
      <div className="min-h-screen flex flex-col mt-20  items-center">
        <p className="text-textColorBlack text-center text-xl font-medium leading-5">
          Change your username
        </p>
        <div className="mt-10">
          <input type="text" placeholder="Enter your name" className="flex w-[243px] h-auto rounded-xl  pt-3 pr-5 pb-3 pl-4 bg-textInputBackgroundColor items-center" />
        </div>
        <div className="mt-20">
          <button className=" w-[243px] rounded-xl  pt-3 pr-5 pb-3 pl-4 bg-blueButtonColor text-[#FFFFFF]">
            <p className="text-white text-center text-xl font-semibold leading-6">
              Update
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangeUserName;
