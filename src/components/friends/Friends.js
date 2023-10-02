import React, { useState, useEffect } from "react";
import searchIcon from "./../../assets/search_icon.png";
import mic from "./../../assets/Clear Glyph.png";
import { useNavigate, useParams } from "react-router";
import { getFriends } from "../../service/Auth";
function Friends() {
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
  const navigate = useNavigate();
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
      <div className="min-h-screen flex flex-col mt-2 mx-1">
        <p className="text-textColorBlack text-center text-lg font-semibold leading-5">
          Friends
        </p>
        <div
          className="flex justify-between items-center   mt-2 rounded-xl px-2 mx-2"
          style={{ background: "rgba(118, 118, 128, 0.12)" }}
        >
          <div className="flex gap-1 items-center">
            <div className="w-6 h-6">
              <img src={searchIcon} alt="" className="w-10 h-6"/>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                className="flex p-3 items-center bg-transparent	"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ background: "transparent", outline: "none" }}
              />
            </div>
          </div>
          <div  className="w-6 h-6">
            <img src={mic} alt="" />
          </div>
        </div>
        <div className="flex mt-2 self-start">
          <h5 className="text-textColorBlack text-base font-semibold leading-5 p-2">
            {friends.length} Friends
          </h5>
        </div>
        {filteredFriends?.map((friend) => {
          return (
            <div
              className="flex gap-3 items-center px-2 py-1"
              key={friend._id}
              onClick={() => handleNavigate(friend._id)}
            >
              <div>
                <img
                  src={friend.profile_img}
                  alt=""
                  className="rounded-full   object-cover w-[50px] h-[50px] no-repeat "
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
