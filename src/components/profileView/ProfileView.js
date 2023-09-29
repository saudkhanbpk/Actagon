import React from "react";
import { useParams } from "react-router-dom";
import calender from "./../../assets/calender.png";
import backButton from "./../../assets/Back Button (1).png";
import { useNavigate } from "react-router-dom";
import voiceCall from "./../../assets/voicecall.png";
import videoCall from "./../../assets/videocall.png";
import message from "./../../assets/message.png";
import payment from "./../../assets/payment1.png";
import {IoIosTime} from 'react-icons/io'
import {PiUserCircleFill} from 'react-icons/pi'
import {FaInfo} from 'react-icons/fa'

function ProfileView() {
  const navigate = useNavigate();
  return (
    <>
    <div className="">
      <div className="bg-[url(/src/assets/viewprofile.png)] w-full h-[250px] bg-no-repeat bg-cover">
        <div className="flex justify-between items-center">
          <div className="flex items-center ml-4 cursor-pointer">
            <img src={backButton} alt="back" onClick={() => navigate(-1)} />
          </div>
          <div className="flex items-center mr-4 cursor-pointer">
            <img src={calender} alt="setting" />
          </div>
        </div>
        
        <div className="flex items-center h-[220px]">
          <div
            className="flex items-center justify-center
          w-[100px]
          h-[100px]
          mt-16"
          >
            <img
              src="https://picsum.photos/200/300"
              alt="profile"
              className="rounded-full w-[80px] h-[80px]"
            />
          </div>
          <div
            className="
          flex flex-col
          justify-start 
          mt-16
          "
          >
            <p className="text-[#fff] text-[22px] font-bold mb-0 ">
              Imran khan
            </p>
            <p className="text-[#F2F2F6] text-sm font-normal ">
              @imrankhan44
            </p>
          </div>
        </div>
        <div className="flex justify-around gap-[5px] mx-2">
          <div className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px]  justify-center items-center cursor-pointer">
            <img src={voiceCall} alt="" className="flex items-center mx-auto" />
            <p className="text-blueButtonColor text-sm leading-normal font-semibold my-1">Call</p>
          </div>
          <div className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px]  justify-center items-center cursor-pointer">
            <img src={videoCall} alt="" className="flex items-center mx-auto" />
            <p className="text-blueButtonColor text-sm my-1 leading-normal font-semibold ">Video Call</p>
          </div>
          <div className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px]  justify-center items-center cursor-pointer">
            <img src={message} alt="" className="flex items-center mx-auto" />
            <p className="text-blueButtonColor text-sm leading-normal font-semibold my-1">Message</p>
          </div>
          <div className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px] justify-center items-center cursor-pointer">
            <img src={payment} alt="" className="flex items-center mx-auto" />
            <p className="text-blueButtonColor text-sm leading-normal font-semibold my-1">Payment</p>
          </div>
        </div>
      </div> 

    </div>

        
      </>
  );
}

export default ProfileView;
