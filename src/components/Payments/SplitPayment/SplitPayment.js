import React, { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import searchIcon from "../../../assets/search_icon.png";
import mic from "../../../assets/Clear Glyph.png";
import { Link } from 'react-router-dom';

function SplitPayment() {
    // State to manage selected chats
    const [selectedChats, setSelectedChats] = useState([]);

    // Sample list of friends (replace with your data)
    const friends = [
        {
            id: "1",
            name: "Imran Khan",
            image: "https://picsum.photos/200/300",
        },
        {
            id: "2",
            name: "Sameer Khan",
            image: "https://picsum.photos/200/300",
        },
        {
            id: "3",
            name: "Hamza Khan",
            image: "https://picsum.photos/200/300",
        },
        {
            id: "4",
            name: "Zeb Khan",
            image: "https://picsum.photos/200/300",
        },
    ];

    // Function to toggle chat selection on double click
    const toggleChatSelection = (id) => {
        if (selectedChats.includes(id)) {
            setSelectedChats(selectedChats.filter((chatId) => chatId !== id));
        } else {
            setSelectedChats([...selectedChats, id]);
        }
    };

    return (
        <div className="min-h-screen flex flex-col mt-2">
            {/* Header */}
            <div className="px-4 py-2 flex justify-between">
                <h2 className="text-blueButtonColor flex items-center font-medium text-base">
                    <MdOutlineArrowBackIosNew />
                    <span className="ml-2">Back</span>
                </h2>
                <h2 className="text-textColorBlack font-medium text-base">Split Between</h2>
                <Link to='/splitAmount'>
                    <h2 className="text-blueButtonColor font-medium text-base">Next</h2>
                </Link>
            </div>

            <div
                className="flex justify-between items-center   mt-5 rounded-xl p-2 !ml-2 !mr-2"
                style={{ background: "rgba(118, 118, 128, 0.12)" }}
            >
                <div className="flex gap-1 items-center">
                    <div>
                        <img src={searchIcon} alt="" className="" />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Name, username, email..."
                            className="flex p-3 w-[243px] h-[37px]    items-center bg-transparent	"
                            style={{ background: "transparent", outline: "none" }}
                        />
                    </div>
                </div>
                <div>
                    <img src={mic} alt="" />
                </div>
            </div>

            {/* Selected Chats Count */}
            <div className="flex self-start">
                <h5 className="text-textColorBlack text-base font-semibold leading-5 p-2">
                    {selectedChats.length} Split Between
                </h5>
            </div>

            {/* List of Friends */}
            {friends.map((friend) => {
                const isSelected = selectedChats.includes(friend.id);

                return (
                    <div
                        className={`flex justify-between px-4 ${isSelected ? "bg-gray-200" : ""
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
                            <div className='mt-6'>
                                {/* Replace this with your selected icon */}
                                <span ><AiFillCheckCircle className='text-blueButtonColor w-5 h-5' /></span>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default SplitPayment;