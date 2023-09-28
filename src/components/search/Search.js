import React, { useState, useEffect } from 'react'
import searchIcon from "./../../assets/search_icon.png";
import mic from "./../../assets/Clear Glyph.png";
import plus from '../../assets/plus.png'
import { getUsers, addFriend } from '../../service/Auth';

function Search() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [friends, setFriends] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFriends, setFilteredFriends] = useState([]);
  const getUser = () => {
    getUsers({
      userId: user?._id
    }).then((res) => {
      setFriends(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    getUser();
  }, [])

  const add = (friendId) => {
    console.log(friendId)
    addFriend({ userId: user?._id, friendId: friendId }).then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    const filtered = friends?.filter((friend) =>
      friend?.firstName?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFriends(filtered);
  }, [searchQuery, friends]);

  return (
    <div className="min-h-screen flex flex-col mt-2 ">
      <p className="text-textColorBlack text-center text-lg font-semibold leading-5">
        Search
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
        </div>
        <div>
          <img src={mic} alt="" />
        </div>
      </div>
      <div className="flex  self-start">
        <h5 className="text-textColorBlack text-base font-semibold leading-5 p-2">
          Suggestions
        </h5>
      </div>
      {filteredFriends?.map((friend) => {
        return (

          <div className="flex gap-5 items-center p-2" key={friend._id}>
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
                @username
              </p>
            </div>
            <div className="ml-auto" onClick={() => add(friend._id)}>
              <img src={plus} alt="" />
            </div>
          </div>
        );
      })}
      {/* <BottomNavigation /> */}
    </div>
  )
}

export default Search


