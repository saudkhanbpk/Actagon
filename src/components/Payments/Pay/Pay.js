import React, { useState, useEffect } from 'react'
import calender from '../../../assets/calender.png'
import { Link } from 'react-router-dom';
import { getFriends } from '../../../service/Auth';
function Pay({ user }) {
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
    // const friends = [
    //     {
    //         id: "1",
    //         name: "Imran Khan",
    //         image: "https://picsum.photos/200/300",
    //     },
    //     {
    //         id: "2",
    //         name: "Sameer Khan",
    //         image: "https://picsum.photos/200/300",
    //     },
    //     {
    //         id: "3",
    //         name: "Hamza Khan",
    //         image: "https://picsum.photos/200/300",
    //     },
    //     {
    //         id: "4",
    //         name: "Zeb Khan",
    //         image: "https://picsum.photos/200/300",
    //     },
    // ];
    return (
        <div className="min-h-screen flex flex-col mt-2 ">
            <div className='flex justify-between px-2 items-center'>
                <Link to='/transition'>
                    <p className="text-blueButtonColor text-center text-lg font-semibold leading-5">
                        Cancel
                    </p>
                </Link>
                <p className="text-textColorBlack text-center text-lg font-semibold leading-5">
                    Pay to
                </p>
                <Link to='/dateSchedule'>
                    <img src={calender} />
                </Link>
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
                    <Link to='/amountToPay' state={
                        {
                            friend: friend
                        }
                    } >
                        <div className="flex gap-5 items-center p-2" key={friend.id}>
                            <div>
                                <img
                                    src={friend.profile_img}
                                    alt="img"
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
    )
}

export default Pay