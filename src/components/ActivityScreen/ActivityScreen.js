import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function ActivityScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("media");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="flex  w-full items-center bg-blue-500 text-white mt-2 px-2">
        <div onClick={() => navigate(-1)}>
          <h2 className="text-blueButtonColor py-2 flex items-center font-medium text-base">
            <MdOutlineArrowBackIosNew />
            <span className="ml-1">Back</span>
          </h2>
        </div>
        <h3 className="text-xl text-[#000] text-[17px] font-[590]     mx-auto leading-[22px] justify-center">
          Activities{" "}
        </h3>
      </div>

      <div
        className="flex  justify-center space-x-0 mb-4 bg-gray-50 p-1 rounded-[8.91px]"
        style={{ background: "rgba(118, 118, 128, 0.12)" }}
      >
        <button
          className={`text-center text-[13px] font-[590] leading-4 px-4 py-1 ${activeTab === "media"
            ? "bg-[white] text-black shadow-[shadow]  rounded-md h-8"
            : "bg-gray-200"
            }`}
          onClick={() => handleTabClick("media")}
        >
          Media
        </button>
        <button
          className={`text-center text-[13px] font-[590] leading-4 px-10 py-1 ${activeTab === "maps"
            ? "bg-[white] text-black  rounded-md h-8"
            : "bg-gray-200"
            }`}
          onClick={() => handleTabClick("maps")}
        >
          Maps
        </button>
        <button
          className={`text-center text-[13px] font-[590] leading-4 px-4 py-1 ${activeTab === "people"
            ? "bg-[white] text-black   rounded-md h-8"
            : "bg-gray-200"
            }`}
          onClick={() => handleTabClick("people")}
        >
          People
        </button>
      </div>
      <div className="flex-grow">
        {activeTab === "media" && <MediaContent />}
        {activeTab === "maps" && <MapsContent />}
        {activeTab === "people" && <PeopleContent />}
      </div>
    </div>
  );
}

function MediaContent() {
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?page=1&limit=30")
      .then((res) => {
        console.log(res.data);
        setMediaData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-1">
        {mediaData?.map((media) => (
          <div key={media.id} className=" shadow">
            <img
              src={media.download_url}
              alt={media.caption}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function MapsContent() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211750.24074553116!2d71.40065630700995!3d33.97718319188061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637558a412!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1695726051460!5m2!1sen!2s"
      allowfullscreen=""
      loading="lazy"
      width={420}
      height={420}
    ></iframe>
  );
}

function PeopleContent() {
  // Add your people/friends list here
  return (
    <div>
      <p>People Content</p>
      {/* Add friends list */}
    </div>
  );
}

export default ActivityScreen;
