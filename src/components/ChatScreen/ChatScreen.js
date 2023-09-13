import React from 'react';
import Rectangle from '../../assets/Rectangle.png'; 
import { FiVideo, FiPhone } from 'react-icons/fi'; 
import {MdOutlineArrowBackIosNew} from 'react-icons/md'; 

const Message = ({ text, sender, timestamp }) => {
    return (
      <div className={`message-${sender}`}>
        <div className="message-text">{text}</div>
        <div className="message-timestamp">{timestamp}</div>
      </div>
    );
  };

const ChatScreen = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between px-4 bg-white border-b">
        <button className="text-blue-500">
          {/* Back button */}
          <MdOutlineArrowBackIosNew/>
        </button>
        <img src={Rectangle} alt="User" />
        <div className=" flex space-x-2">
          {/* Video Call and Voice Call icons */}
          <FiPhone className="text-gray-500 cursor-pointer" />
          <FiVideo className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Chat conversation */}
      <div className="flex-grow p-4 overflow-y-auto">
        {/* Chat messages */}
        <Message sender="user"
          timestamp="10:00 AM"
          text=" Hello, how can I help you?"
        />
         
        <Message
          text="Hi! I have a question about your product."
          sender="agent"
          timestamp="10:05 AM"
        />
        {/* Add more messages as needed */}
      </div>

      {/* Input field */}
      <div className="bg-white border-t">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2"
        />
      </div>
    </div>
  );
};

export default ChatScreen;
