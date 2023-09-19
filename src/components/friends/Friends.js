import React, { useState, useEffect } from "react";
import searchIcon from "./../../assets/search_icon.png";
import mic from "./../../assets/Clear Glyph.png";
import { useNavigate, useParams } from "react-router";
import { getFriends } from "../../service/Auth";
function Friends() {
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


  const navigate = useNavigate();
  // const friends = [
  //   {
  //     id: "1",
  //     name: "Imran Khan",
  //     image: "https://picsum.photos/200/300",
  //   },
  //   {
  //     id: "2",
  //     name: "Sameer Khan",
  //     image: "https://picsum.photos/200/300",
  //   },
  //   {
  //     id: "3",
  //     name: "Hamza Khan",
  //     image: "https://picsum.photos/200/300",
  //   },
  //   {
  //     id: "4",
  //     name: "Zeb Khan",
  //     image: "https://picsum.photos/200/300",
  //   },
  //   {
  //     id: "5",
  //     name: "Zeb Khan",
  //     image: "https://picsum.photos/200/300",
  //   },
  // ];
  const handleNavigate = (id) => {
    navigate(`/profileView/${id}`);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col mt-2 ">
        <p className="text-textColorBlack text-center text-lg font-semibold leading-5">
          Friends
        </p>
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
                placeholder="Search"
                className="flex p-3 w-[243px] h-[37px]    items-center bg-transparent	"
                style={{ background: "transparent", outline: "none" }}
              />
            </div>
          </div>
          <div>
            <img src={mic} alt="" />
          </div>
        </div>
        <div className="flex  self-start">
          <h5 className="text-textColorBlack text-base font-semibold leading-5 p-2">
            {friends.length} Friends
          </h5>
        </div>
        {friends.map((friend) => {
          console.log("frined", friend)
          return (
            <div
              className="flex gap-5 items-center p-2"
              key={friend.id}
              onClick={() => handleNavigate(friend._id)}
            >
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
          );
        })}
      </div>
      {/* <BottomNavigation /> */}
    </>
  );
}

export default Friends;
