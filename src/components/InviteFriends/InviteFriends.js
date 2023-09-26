


import React, { useState, useEffect } from 'react'
import searchIcon from "./../../assets/search_icon.png";
import mic from "./../../assets/Clear Glyph.png";
import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { getFriends } from '../../service/Auth';


function InviteFriends({ setPeople, handleInvite }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [friends, setFriends] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredFriends, setFilteredFriends] = useState([]);

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

    useEffect(() => {
        const filtered = friends?.filter((friend) =>
            friend.firstName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredFriends(filtered);
    }, [searchQuery, friends]);
    return (
        <div className=" flex flex-col mt-2 ">
            <div className='flex justify-between p-2  items-center'>
                <p className="text-blueButtonColor text-center text-lg font-semibold leading-5" onClick={() => setPeople(false)}>
                    Cancel
                </p>
                <p className="text-textColorBlack text-center text-lg font-semibold leading-5">
                    Invite Friends
                </p>
                <p onClick={() => setPeople(false)} className='text-blueButtonColor text-center text-lg font-semibold leading-5'>Done</p>
            </div>

            <div
                className="flex justify-between items-center w-full   mt-3 rounded-xl p-2 "
                style={{ background: "rgba(118, 118, 128, 0.12)" }}
            >
                <div className="flex items-center">
                    <div>
                        <img src={searchIcon} alt="image" style={{ width: "100%" }} />
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
            <div className="flex mt-3 self-start">
                <h5 className="text-textColorBlack text-base font-semibold leading-5 p-2">
                    Contacts
                </h5>
            </div>
            {filteredFriends.map((friend) => {
                return (
                    <div className="" key={friend._id}>
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
                                <button onClick={() => handleInvite(friend?._id)} className="btn rounded-full text-blueButtonColor font-semibold bg-[lightgray] py-2 px-4">Invite</button>
                            </div>

                        </div>

                    </div>
                );
            })}
        </div>
    )
}

export default InviteFriends


