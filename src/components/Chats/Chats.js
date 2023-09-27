import React, { useState, useEffect } from "react";
import searchIcon from "./../../assets/search_icon.png";
import mic from "./../../assets/Clear Glyph.png";
import plus from '../../assets/plus.png'
import Rectangle3 from '../../assets/Rectangle3.png'
import Rectangle1 from '../../assets/Rectangle1.png'
import Rectangle2 from '../../assets/Rectangle2.png'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Link, useNavigate } from "react-router-dom";


const Chats = ({
  conversations, messages, setMessages, message, setMessage, users, setUsers, messageRef, sendMessage, fetchMessages, user, setUser
}) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFriends, setFilteredFriends] = useState([]);
  useEffect(() => {
    const filtered = conversations?.filter((friend) =>
      friend.user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFriends(filtered);
  }, [searchQuery, conversations]);

  return (
    <>
      <div className="min-h-screen flex flex-col mt-2 ">
        <div className="flex bg-blue-500 text-white mt-2 px-2 ">
          {/* <Link to=''> */}
          <h2 onClick={() => navigate(-1)} className="text-blueButtonColor py-2 flex items-center font-medium text-base">
            <MdOutlineArrowBackIosNew />
            <span className="ml-1">Back</span>
          </h2>
          {/* </Link> */}
          <h1 className="text-2xl pl-1 font-semibold text-center  mx-auto">Messages</h1>
          <Link to='/newmessage'>
            <button className="bg-blue-500  text-white rounded-full w-10 h-10 flex items-center font-[20px] justify-end">
              <img src={plus} alt='plus icon' />
            </button>
          </Link>

        </div>
        <div
          className="flex justify-between items-center   mt-3 rounded-xl p-2 !ml-2 !mr-2"
          style={{ background: "rgba(118, 118, 128, 0.12)" }}
        >
          <div className="flex gap-1 items-center">
            <div>
              <img src={searchIcon} alt="" className="" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                className="flex p-3 w-[243px] h-[28px]    items-center bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ background: "transparent", outline: "none" }}
              />
            </div>
          </div>
          <div>
            <img src={mic} alt="" />
          </div>
        </div>


        <div className="flex justify-center items-center p-4">
          <div className="px-2">
            <div><img src={Rectangle3} alt="chat" /></div>
            <div><p>sameer</p>
            </div>
          </div>
          <div className="px-2">
            <div><img src={Rectangle1} alt="chat" /></div>
            <div><p>sameer</p></div>
          </div>
          <div className="px-2">
            <div><img src={Rectangle2} alt="chat" /></div>
            <div><p>sameer</p></div>
          </div>
          <div className="px-2">
            <div><img src={Rectangle3} alt="chat" /></div>
            <div><p>sameer</p></div>
          </div>

        </div>




        <div className="flex  self-start">

        </div>
        {/* {friends.map((friend) => {
          return (
            <div
              className="flex gap-5 items-center p-2"
              key={friend.id}

            >
              <div>
                <img
                  src={friend.image}
                  alt=""
                  className="rounded-full   object-cover w-[60px] h-[60px] no-repeat "
                />
              </div>
              <div>
                <p className="text-textColorBlack text-lg font-normal leading-5">
                  {friend.name}
                </p>
                <p className="text-[#817F80] text-sm font-normal leading-5">
                  @username
                </p>
                <p>hi there</p>
              </div>
            </div>
          );
        })} */}
        {
          conversations.length > 0 ?
            filteredFriends?.map((conversation) => {
              console.log("chat.js", conversation)
              return (
                <div
                  className="flex gap-5 items-center p-2"
                  key={conversation.id}
                  onClick={(e) => fetchMessages(conversation?.conversationId, conversation?.user, e)}

                >
                  <div>
                    <img
                      src={conversation?.user?.profile_img}
                      alt=""
                      className="rounded-full   object-cover w-[60px] h-[60px] no-repeat "
                    />
                  </div>
                  <div>
                    <p className="text-textColorBlack text-lg font-normal leading-5">
                      {conversation?.user?.fullName}
                    </p>
                    <p>hi there</p>
                  </div>
                </div>
              );
            }) :
            <div className="flex justify-center items-center">
              <p>No Conversations</p>
            </div>
        }
      </div>
    </>
  )
}

export default Chats