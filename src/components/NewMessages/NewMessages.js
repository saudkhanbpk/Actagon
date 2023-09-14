import React, { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function NewMessages() {
  // State to manage selected chats
  const [selectedChats, setSelectedChats] = useState([]);
  // State to hold the search input value
  const [searchInput, setSearchInput] = useState('');

  // Sample list of friends (replace with your data)
  const friends = [
    {
      id: '1',
      name: 'Imran Khan',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '2',
      name: 'Sameer Khan',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '3',
      name: 'Hamza Khan',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '4',
      name: 'Zaid Khan',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '5',
      name: 'Zaib Khan',
      image: 'https://picsum.photos/200/300',
    },
    // Add more friends here...
  ];

  // Function to toggle chat selection on double click
  const toggleChatSelection = (id) => {
    if (selectedChats.includes(id)) {
      setSelectedChats(selectedChats.filter((chatId) => chatId !== id));
    } else {
      setSelectedChats([...selectedChats, id]);
    }
  };

  // Function to filter friends based on search input
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col mt-2">
      {/* Header */}
      <div className="flex justify-between px-2 items-center">
        <p className="text-blueButtonColor text-center text-lg font-semibold leading-5">
          Cancel
        </p>
        <p className="text-textColorBlack text-center text-lg font-weight-[500] leading-5 font-sf">
          New Messages
        </p>
        <div>
          <Link to="/group">
            <button className="text-blueButtonColor text-center text-lg font-semibold">
              Create
            </button>
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div
        className="flex justify-between items-center mt-4 py-2"
        style={{ background: 'rgba(118, 118, 128, 0.12)' }}
      >
        <div className="flex gap-1 items-center">
          <div>
            <input
              type="text"
              placeholder="Name:"
              className="flex p-3 w-full h-[30px] items-center bg-transparent"
              style={{ background: 'transparent', outline: 'none' }}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Selected Chats Count */}
      <div className="flex self-start mt-4">
        <h5 className="text-textColorBlack text-base font-semibold leading-5 ml-2 p-2">
          {selectedChats.length} Selected
        </h5>
      </div>

      {/* List of Friends */}
      {filteredFriends.map((friend) => {
        const isSelected = selectedChats.includes(friend.id);

        return (
          <div
            className={`flex justify-between px-4 ${
              isSelected ? 'bg-[lightgray] border-md' : ''
            }`}
            key={friend.id}
            onDoubleClick={() => toggleChatSelection(friend.id)}
          >
            <div className="flex gap-5 items-center py-2">
              <div>
                <img
                  src={friend.image}
                  alt=""
                  className="rounded-full object-cover w-[60px] h-[60px] no-repeat"
                />
              </div>
              <div>
                <p className="text-textColorBlack text-lg font-normal leading-5">
                  {friend.name}
                </p>
                <p className="text-[#817F80] text-sm font-normal leading-5">
                  @username
                </p>
              </div>
            </div>
            {isSelected && (
              <div className="mt-6">
                {/* Replace this with your selected icon */}
                <span>
                  <AiFillCheckCircle className="text-blueButtonColor w-5 h-5" />
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default NewMessages;
