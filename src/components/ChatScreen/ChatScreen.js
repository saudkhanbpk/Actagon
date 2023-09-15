import React from "react";
import Rectangle from "../../assets/Rectangle.png";
import gallery from "../../assets/gallery.png";
import send from "../../assets/send.png";
import { FiVideo, FiPhone } from "react-icons/fi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";


const ChatScreen = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between px-4 bg-white ">
        <button className="text-blue-500">
          {/* Back button */}
          <MdOutlineArrowBackIosNew
            style={{ fontSize: "25px", cursor: "pointer" }}
          />
        </button>

        <div className="flex flex-col items-center justify-center ml-2 mt-1">
          <img src={Rectangle} alt="User" className="w[44px] h-[44px]   " />
          <p className="font-normal font-400 line-height-[22px]">
            Mahamat
          </p>
        </div>

        <div className=" flex space-x-3">
          {/* Video Call and Voice Call icons */}
          <FiPhone
            style={{ fontSize: "25px", cursor: "pointer", color: "#000" }}
          />
          <FiVideo
            style={{ fontSize: "25px", cursor: "pointer", color: "#000" }}
          />
        </div>
      </div>
        <hr  style={{ color: "lightgray" }}/>

      {/* Chat conversation */}
      <div className="bg-white overflow-y-auto rounded-md px-3 py-3 oxs:h-auto  h-[650px] mt-5">
                                <div className=" flex items-center gap-1" >
                                    <div>
                                        <img src={Rectangle} alt='heloo' className="h-8 w-8"/>
                                    </div>
                                    <div className="font-sans rounded-full min-w-fit-content bg-[lightgray] p-2">      
                                        <p className="text-[#000] text-sm">how are you</p>
                                    </div>
                                </div>
                                
                                <div className="flex">
                                    <div style={{ width: '40px', height: '27px' }}></div>
                                    <div className="font-sans flex rounded-full min-w-fit-content ml-auto bg-[#5540FF] p-2">      
                                        <p className="text-[#FFFFFF]  text-sm">I am good</p>
                                    </div>
                                </div>
                                <div className="flex space-y-1">
                                    <div style={{ width: '40px', height: '27px' }}></div>
                                    <div className="font-sans flex rounded-full min-w-fit-content ml-auto bg-[#5540FF] p-2">      
                                        <p className="text-[#FFFFFF]  text-sm">How are you?</p>
                                    </div>
                                </div>

                                <div className=" flex items-center gap-1" >
                                    <div>
                                        <img src={Rectangle} alt='heloo' className="h-8 w-8"/>
                                    </div>
                                    <div className="font-sans rounded-full min-w-fit-content bg-[lightgray] p-2">      
                                        <p className="text-[#000] text-sm">Thank you</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div style={{ width: '40px', height: '27px' }}></div>
                                    <div className="font-sans flex rounded-full min-w-fit-content ml-auto bg-[#5540FF] p-2">      
                                        <p className="text-[#FFFFFF]  text-sm">Welcome</p>
                                    </div>
                                </div>


                            </div>

      {/* Input field */}
      {/* <div className="bg-white border-t">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2"
        />
      </div> */}
      <div className="flex justify-center items-center mb-2">
      
      <div className="m-2">
        <img src={gallery} alt="Gallery Icon" className="w-10 h-8" />
      </div>

      <div className="relative rounded-lg w-full mr-1">
      <input
        type="text"
        placeholder="User typing"
        className="w-full p-2 rounded-[18px] bg-[lightgray] text-textColorBlack focus:outline-none"
      />
      <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <img src={send} alt="Send Icon" className="w-10 h-8" />
      </button>
    </div>

      </div>
      
    </div>
  );
};

export default ChatScreen;
