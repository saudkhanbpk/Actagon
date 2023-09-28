import React from "react";
import { Link } from "react-router-dom";

const NewList = () => {
  return (
    <div className="bg-[#F2F2F6] h-screen">
      <div className="px-4 py-2 flex justify-between">
        <Link to="/addtolist">
          <h2 className="text-blueButtonColor font-medium text-base">Cancel</h2>
        </Link>
        <h2 className="text-textColorBlack font-bold  text-lg">New List</h2>
        <Link>
          <h2 className="text-blueButtonColor font-medium text-base">Create</h2>
        </Link>
      </div>

      <div className="px-1 pb-4 mt-3 mx-2">
        <div className="flex bg-[white] h-[50px] items-center pt-2 w-full py-2 px-2 rounded-lg">
          <p className="font-medium text-base min-w-fit">List Name : </p>

          <input
            type="text"
            className="p-2 text-blueButtonColor border-none focus:border-transparent focus:outline-none 
             font-medium text-normal "
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewList;
