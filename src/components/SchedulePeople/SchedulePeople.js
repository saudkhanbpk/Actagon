import React from "react";
import { useParams } from "react-router-dom";
import dots from "./../../assets/dots.png";
import up from "./../../assets/up.png";
import backButton from "./../../assets/Back Button (1).png";
import { useNavigate } from "react-router-dom";
import voiceCall from "./../../assets/voicecall.png";
import videoCall from "./../../assets/videocall.png";
import message from "./../../assets/message.png";
import events from "./../../assets/events.png";
import {IoIosTime} from 'react-icons/io'
import {PiUserCircleFill} from 'react-icons/pi'
import {FaInfo} from 'react-icons/fa'

function SchedulePeople() {
  const navigate = useNavigate();
  return (
    <>
    <div className="">
      <div className="bg-[url(/src/assets/viewprofile.png)] w-full h-[250px] bg-no-repeat bg-cover">
        <div className="flex justify-between items-center">
          <div className="flex items-center ml-4 cursor-pointer">
            <img src={backButton} alt="back" onClick={() => navigate(-1)} />
          </div>
          <div className="flex items-center mr-1 cursor-pointer">
            <div className="items-center w-8 h-8 p-1 mx-2 rounded-full " style={{  backgroundColor:'rgba(60, 60, 67, 0.30)'}}>
            <img src={up} alt="3 dots"  className="mx-1"/>
            </div>
            <div className="items-center w-8 h-8 pt-[13px] rounded-full " style={{  backgroundColor:'rgba(60, 60, 67, 0.30)'}}>
            <img src={dots} alt="3 dots" className="mx-2"/>

            </div>
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
            <p className="text-[#fff] text-[22px] font-bold leading-[22px] ">
              Imran khan
            </p>
            <p className="text-[#F2F2F6] text-sm font-normal leading-[22px]">
              @imrankhan44
            </p>
          </div>
        </div>
        <div className="flex justify-around gap-[5px] mx-2">
          <div className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px]  justify-center items-center cursor-pointer">
            <img src={voiceCall} alt="" className="flex items-center mx-auto" />
            <p className="text-blueButtonColor text-sm leading-normal font-semibold mt-1">Call</p>
          </div>
          <div className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px]  justify-center items-center cursor-pointer">
            <img src={videoCall} alt="" className="flex items-center mx-auto" />
            <p className="text-blueButtonColor text-sm mt-1 leading-normal font-semibold ">Video Call</p>
          </div>
          <div className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px]  justify-center items-center cursor-pointer">
            <img src={message} alt="" className="flex items-center mx-auto" />
            <p className="text-blueButtonColor text-sm leading-normal font-semibold mt-1">Message</p>
          </div>
          <div className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px] justify-center items-center cursor-pointer">
            <img src={events} alt="" className="flex items-center mx-auto" />
            <p className="text-blueButtonColor text-sm leading-normal font-semibold mt-1">Payment</p>
          </div>
        </div>
      </div> 
      
    <div className="items-center flex mt-24">
        <div className="mx-2 bg-[lightgray] rounded-lg p-1"><IoIosTime className="w-6 h-6"/></div>
        <div><p className="font-semibold">Monday Feb 12, 2023 12:40 PM</p></div>
      </div> 

      <div className="items-center flex mt-2">
        <div className="mx-2 bg-[lightgray] rounded-lg p-1"><FaInfo className="w-6 h-6"/></div>
        <div><p className="font-semibold">Council meeting</p></div>
      </div> 

      <div className="items-center flex mt-2">
        <div className="mx-2 bg-[lightgray] rounded-lg p-1"><PiUserCircleFill className="w-6 h-6"/></div>
        <div><p className="font-semibold">Created by You</p></div>
      </div> 

    </div>

        
      </>
  );
}

export default SchedulePeople;
