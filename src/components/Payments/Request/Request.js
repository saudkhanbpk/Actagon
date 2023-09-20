import React, { useState, useEffect } from "react";
import calender from "../../../assets/calender.png";
import { Link } from "react-router-dom";
import { getFriends } from "../../../service/Auth";
function Request({ user }) {
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
    return (
        <div className="min-h-screen flex flex-col mt-2 ">
            <div className="px-2 flex items-center">
                <p className="text-blueButtonColor  flex justify-start text-center text-lg font-semibold leading-5">
                    Cancel
                </p>
                <p className="text-textColorBlack w-full mr-12 flex justify-center items-center text-center text-lg font-semibold leading-5">
                    Request from
                </p>
            </div>
            <div
                className="flex justify-between items-center   mt-5 rounded-xl p-2 !ml-2 !mr-2"
                style={{ background: "rgba(118, 118, 128, 0.12)" }}
            >
                <div className="flex gap-1 items-center">
                    <div>
                        <input
                            type="text"
                            placeholder="Name:"
                            className="flex p-3 w-full h-[30px] items-center bg-transparent	"
                            style={{ background: "transparent", outline: "none" }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex  self-start">
                <h5 className="text-textColorBlack text-base font-semibold leading-5 p-2">
                    Suggestions
                </h5>
            </div>
            {friends.map((friend) => {
                return (
                    <Link
                        to="/amountToRequest"
                        state={{
                            user: user,
                            friend: friend,
                        }}
                    >
                        <div className="flex gap-5 items-center p-2" key={friend.id}>
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
                                    {friend?.username}
                                </p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Request;
