import React, { useState, useEffect } from 'react';
import searchIcon from "./../../assets/search_icon.png";
import mic from "./../../assets/Clear Glyph.png";
import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { getFriends } from '../../service/Auth';

function SelectPeople({ setIsPhoneCall, handlePeople }) {
    const [selectedFriends, setSelectedFriends] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [friends, setFriends] = useState([]);

    const get = () => {
        getFriends({ userId: user._id })
            .then((res) => {
                console.log(res.data);
                setFriends(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        get();
    }, []);


    const toggleFriendSelection = (friendId) => {
        handlePeople(friendId)
        setSelectedFriends((prevSelectedFriends) => {
            if (prevSelectedFriends.includes(friendId)) {
                return prevSelectedFriends.filter((id) => id !== friendId);
            } else {
                return [...prevSelectedFriends, friendId];
            }
        });
    };

    return (
        <div className="min-h-screen flex flex-col mt-2">
            <div className='flex justify-between p-2  items-center'>
                <p className="flex items-center text-blueButtonColor text-center text-lg font-semibold leading-5" onClick={() => setIsPhoneCall(false)}>
                    <MdOutlineArrowBackIosNew /> Back
                </p>
                <p className="text-textColorBlack text-center text-lg font-semibold leading-5">
                    Select People
                </p>
                <p onClick={() => setIsPhoneCall(false)} className='text-blueButtonColor text-center text-lg font-semibold leading-5'>Add</p>
            </div>

            <div className="flex justify-between items-center mt-3 rounded-xl p-2 !ml-2 !mr-2" style={{ background: "rgba(118, 118, 128, 0.12)" }}>
                <div className="flex gap-1 items-center">
                    <div>
                        <img src={searchIcon} alt="" className="" />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex p-3 w-[243px] h-[28px]    items-center bg-transparent"
                            style={{ background: "transparent", outline: "none" }}
                        />
                    </div>
                </div>
                <div>
                    <img src={mic} alt="" />
                </div>
            </div>
            <div className="flex mt-3 mx-2 self-start">
                <h5 className="text-textColorBlack text-base font-semibold leading-5 p-2">
                    Suggestions
                </h5>
            </div>
            {friends.map((friend) => {
                const isSelected = selectedFriends.includes(friend._id);

                return (
                    <div className="mx-2" key={friend._id}>
                        <div className='flex justify-between'>
                            <div className='flex gap-3 items-center p-2'>
                                <div>
                                    <img
                                        src={friend.profile_img}
                                        alt=""
                                        className="rounded-full   object-cover w-[60px] h-[60px] no-repeat "
                                    />
                                </div>
                                <div>
                                    <p className="text-textColorBlack text-lg font-normal leading-5">
                                        {friend.firstName}
                                    </p>
                                    <p className="text-[#817F80] text-sm font-normal leading-5">
                                        {friend.username}
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center mr-2'>
                                <button
                                    className={`w-6 h-6 rounded-full border-2 border-blueButtonColor flex justify-center items-center ${isSelected ? "bg-blueButtonColor" : ""
                                        }`}
                                    onClick={() => toggleFriendSelection(friend._id)}

                                >
                                    <p className={`text-white text-sm font-semibold leading-5 ${isSelected ? "" : "hidden"}`}>✓</p>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default SelectPeople;


