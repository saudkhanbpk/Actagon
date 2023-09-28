import React, { useState, useEffect } from "react";
import Rectangle from "../../assets/Rectangle.png";
import gallery from "../../assets/gallery.png";
import send from "../../assets/send.png";
import dollar from "../../assets/dollar.png";
import search from "../../assets/search.png";
import location from "../../assets/location.png";
import media from "../../assets/media.png";
import friends from "../../assets/friends.png";
import docs from "../../assets/docs.png";
import schedule from "../../assets/schedule.png";
import poll from "../../assets/poll.png";
import { FiVideo, FiPhone } from "react-icons/fi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ShareLocation from "../ShareLocation/ShareLocation";

const ChatScreen = ({
  user,
  message,
  setMessage,
  sendMessage,
  conversationId,
  receiver,
  messages,
  messageRef,
}) => {
  const [showGallery, setShowGallery] = useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [shareableLink, setShareableLink] = useState("");
  const [isSharing, setIsSharing] = useState(false); // State to track whether sharing is in progress
  const [userLocation, setUserLocation] = useState(null);
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setUserLocation(location);
      });
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  }, []);

  const generateShareableLink = () => {
    if (userLocation) {
      const shareLink = `https://maps.google.com/?q=${userLocation.latitude},${userLocation.longitude}`;
      setShareableLink(shareLink);
      setMessage(shareLink);
      setIsSharing(true);
      setShowModal(false);
      console.log(shareLink);

      // setTimeout(() => {
      //   sendMessage();
      // },2000);
    }
  };
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col bg-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between px-4 bg-white">
        <button className="text-blue-500" onClick={() => navigate(-1)}>
          {/* Back button */}
          <MdOutlineArrowBackIosNew
            style={{ fontSize: "25px", cursor: "pointer" }}
          />
        </button>

        <div className="flex flex-col items-center justify-center ml-2 mt-1">
          <img
            src={receiver?.profile_img}
            alt="User"
            className="w[44px] h-[44px]   rounded-full"
          />
          <p className="font-normal font-400 line-height-[22px]">
            {receiver?.fullName}
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
      <hr style={{ color: "lightgray" }} />

      {/* Chat conversation */}
      <div className="bg-white overflow-y-auto rounded-md px-3 py-3 oxs:h-auto  h-[650px] mt-5">
        {messages.messages?.length > 0
          ? messages?.messages.map((item, index) => {
            return (
              <div key={index} className="flex flex-col space-y-1">
                {item?.user?.id === user?._id ? (
                  <div className=" flex items-center justify-end gap-1">
                    <div className="flex justify-end items-center gap-1">
                      <div className="font-sans flex rounded-full min-w-fit-content ml-auto mb-3 bg-[#5540FF] p-2">
                        <p className="text-[#FFFFFF]  text-sm">
                          {item?.message}
                        </p>
                        <div ref={messageRef}></div>
                      </div>
                    </div>
                    <div>
                      <img
                        src={user?.profile_img}
                        alt="heloo"
                        className="h-8 w-8 rounded-full"
                      />
                    </div>
                  </div>
                ) : (
                  <div className=" flex items-center gap-1">
                    <div>
                      <img
                        src={receiver?.profile_img}
                        alt="heloo"
                        className="h-8 w-8 rounded-full"
                      />
                    </div>
                    <div className="font-sans rounded-full min-w-fit-content bg-[lightgray] p-2 mb-3">
                      <p className="text-[#000] text-sm">{item?.message}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })
          : null}
      </div>

      <div className="flex justify-center items-center mb-2">
        <div className="m-2" onClick={() => setShowGallery(!showGallery)}>
          <img src={gallery} alt="Gallery Icon" className="w-10 h-8" />
        </div>

        <div className="relative rounded-lg w-full mr-1">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Type here..."
            className="w-full p-2 rounded-[18px] bg-[lightgray] text-textColorBlack focus:outline-none"
          />
          <button
            type="button"
            onClick={sendMessage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <img src={send} alt="Send Icon" className="w-10 h-8" />
          </button>
        </div>
      </div>

      {!showGallery && (
        <div className="bg-white h-[50%] justify-center border-top rounded-xl bg-[lightgray] p-2">
          <div className="flex mt-4 w-full justify-between ">
            <Link to="/paymentsEmpty">
              <div className="mx-2 flex items-center justify-center flex-col">
                <img
                  src={dollar}
                  alt="Send Icon"
                  className="w-[60px] h-[60px]"
                />
                <p className="text-[#817F80] text-sm">Payment</p>
              </div>
            </Link>
            <div className="mx-2 flex items-center justify-center flex-col">
              <img src={search} alt="Send Icon" className="w-[60px] h-[60px]" />
              <p className="text-[#817F80] text-sm">Search</p>
            </div>
            <Link to="/poll">
              <div className="mx-2 flex items-center justify-center flex-col">
                <img src={poll} alt="Send Icon" className="w-[60px] h-[60px]" />
                <p className="text-[#817F80] text-sm">Poll</p>
              </div>
            </Link>
            {/* <Link to='/share'> */}

            <div
              onClick={() => setShowModal(true)}
              className="mx-2 flex items-center justify-center flex-col"
            >
              <img
                src={location}
                alt="Send Icon"
                className="w-[60px] h-[60px]"
              />
              <p className="text-[#817F80] text-sm">location</p>
            </div>
            {/* </Link> */}
          </div>

          <div className="flex mt-4 w-full justify-between ">
            <Link to="/activity" >
              <div className="mx-2 flex items-center justify-center flex-col">
                <img src={media} alt="Send Icon" className="w-[60px] h-[60px]" />
                <p className="text-[#817F80] text-sm">Media</p>
              </div>
            </Link>
            <Link to="/">

              <div className="mx-2 flex items-center justify-center flex-col">
                <img
                  src={friends}
                  alt="Send Icon"
                  className="w-[60px] h-[60px]"
                />
                <p className="text-[#817F80] text-sm">friends</p>
              </div>
            </Link>
            <Link to="/schedules">
              <div className="mx-2 flex items-center justify-center flex-col">
                <img
                  src={schedule}
                  alt="Send Icon"
                  className="w-[60px] h-[60px]"
                />
                <p className="text-[#817F80] text-sm">Calendar</p>
              </div>
            </Link>
            <div className="mx-2 flex items-center justify-center flex-col">
              <img src={docs} alt="Send Icon" className="w-[60px] h-[60px]" />
              <p className="text-[#817F80] text-sm">docs</p>
            </div>
          </div>
        </div>
      )}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto bg-[white] fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <ShareLocation
                    generateShareableLink={generateShareableLink}
                    userLocation={userLocation}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default ChatScreen;
