import React, { useState } from "react";

const Poll = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["Service Shoes", "Under Armor", "Adidas", "Nike", "Language"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-full m-auto">
      <div className="flex justify-between shadow-xl w-full p-3 items-center">
        <p className="text-blueButtonColor text-center text-lg font-semibold leading-5">
          Cancel
        </p>
        <p className="text-textColorBlack text-center text-lg font-semibold leading-5">
          New Poll
        </p>
        <div>
          <button className="text-blueButtonColor text-center text-lg font-semibold">
            Create
          </button>
        </div>
      </div>

      <div className="m-3 px-2 shadow-xl rounded-md ">
        <p className="font-semibold p-3">Which shoes is best for me?</p>
      </div>

      <div className=" m-3 p-2 bg-white shadow-xl  rounded-lg">
        {options.map((option, index) => (
          <div
            key={index}
            className={`flex items-center pt-2  ${
              index !== options.length - 1 ? "divide-y divide-y-reverse divide-[#817F80]" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {/* <div
            className={`w-4 h-4 rounded-full  ${
              selectedOption === option ? 'bg-white' : 'bg-gray-500'
            }`}
          >
            
          </div> */}
            <span
              className={`flex items-center text-3xl px-3 pb-5 cursor-pointer text-gray-100 ${
                selectedOption === option
                  ? " text-blueButtonColor"
                  : "text-[#817F80]"
              }`}
            >
              ●
            </span>
            <span className="font-semibold w-full pb-5">{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poll;
