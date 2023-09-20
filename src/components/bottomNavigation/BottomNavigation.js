import React from "react";
import profile from "./../../assets/profile_icon.png";
import search from "./../../assets/search_icon.png";
import friends from "./../../assets/friends_icon.png";
import Profile from "./../profile/Profile";
import Friends from "../friends/Friends";
import Search from "../search/Search";
import blueProfile from "./../../assets/blueaccount.png";
import blueFriends from "./../../assets/bluefriends.png";
import blueSearch from "./../../assets/bluesearch.png";
import { useNavigate } from "react-router";
import Chats from "../Chats/Chats";
import { PiChatText } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";

function BottomNavigation({
  user,
  setUser,
  conversations,
  messages,
  setMessages,
  messageRef,
  fetchMessages,
  users,
}) {
  const navigate = useNavigate();
  const [active, setActive] = React.useState(1);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white h-16 flex justify-around items-center  border-t bg-[#ffffff]">
        <div
          className="flex flex-col items-center"
          onClick={() => setActive(1)}
        >
          {active === 1 ? (
            <img src={blueFriends} alt="profile" />
          ) : (
            <img src={friends} alt="profile" />
          )}
          <p
            className={`${active === 1
              ? "text-blueButtonColor text-center text-xs font-medium leading-normal"
              : "text-textColorBlack text-center text-xs font-medium leading-normal"
              }`}
          >
            Friends
          </p>
        </div>
        <div
          className="flex flex-col items-center"
          onClick={() => setActive(2)}
        >
          {active === 2 ? (
            <img src={blueSearch} alt="profile" />
          ) : (
            <img src={search} alt="profile" />
          )}
          <p
            className={`${active === 2
              ? "text-blueButtonColor text-center text-xs font-medium leading-normal"
              : "text-textColorBlack text-center text-xs font-medium leading-normal"
              }`}
          >
            Search
          </p>
        </div>
        <div
          className="flex flex-col items-center"
          onClick={() => setActive(3)}
        >
          {active === 3 ? (
            <img src={blueProfile} alt="profile" />
          ) : (
            <img src={profile} alt="profile" />
          )}
          <p
            className={`${active === 3
              ? "text-blueButtonColor text-center text-xs font-medium leading-normal"
              : "text-textColorBlack text-center text-xs font-medium leading-normal"
              }`}
          >
            Account
          </p>
        </div>
        <div
          className="flex flex-col items-center"
          onClick={() => setActive(4)}
        >
          {active === 4 ? (
            <PiChatText className="text-blueButtonColor text-center text-2xl font-medium  leading-normal" />
          ) : (
            <PiChatText className="text-2xl font-medium  leading-normal" />
          )}
          <p
            className={`${active === 4
              ? "text-blueButtonColor text-center text-xs font-medium leading-normal"
              : "text-textColorBlack text-center text-xs font-medium leading-normal"
              }`}
          >
            Messages
          </p>
        </div>
      </div>
      {active === 1 && <Friends />}
      {active === 2 && <Search />}
      {active === 3 && <Profile user={user} setUser={setUser} />}
      {active === 4 && (
        <Chats
          conversations={conversations}
          messages={messages}
          setMessages={setMessages}
          messageRef={messageRef}
          fetchMessages={fetchMessages}
          users={users}
          user={user}
          setUser={setUser}
        />
      )}
    </>
  );
}

export default BottomNavigation;
