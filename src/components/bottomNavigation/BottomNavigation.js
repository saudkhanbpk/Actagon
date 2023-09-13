import React from "react";
import profile from "./../../assets/profile_icon.png";
import search from "./../../assets/search_icon.png";
import friends from "./../../assets/friends_icon.png";
import Profile from "./../profile/Profile";
import Friends from "../friends/Friends";
import Search from "../search/Search";
import blueProfile from "./../../assets/blueaccount.png";
import blueFriends from "./../../assets/bluefriends.png";
import blueSearch from "./../../assets/bluesearch.png";
import { useNavigate } from "react-router";
function BottomNavigation() {
  const navigate = useNavigate();
  const [active, setActive] = React.useState(1);

  const handleNavigate = (id) => {
    switch (id) {
      case 1:
        navigate("/friends");
        setActive(1);
        break;
      case 2:
        navigate("/search");
        setActive(2);
        break;
      case 3:
        navigate("/account");
        setActive(3);
        break;
      default:
        navigate("/friends");
        setActive(1);
        break;
    }
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white h-16 flex justify-around items-center  border-t">
        <div
          className="flex flex-col items-center"
          onClick={() => handleNavigate(1)}
        >
          {active === 1 ? (
            <img src={blueFriends} alt="profile" />
          ) : (
            <img src={friends} alt="profile" />
          )}
          <p
            className={`${active === 1
                ? "text-blueButtonColor text-center text-xs font-medium leading-normal"
                : "text-textColorBlack text-center text-xs font-medium leading-normal"
              }`}
          >
            Friends
          </p>
        </div>
        <div
          className="flex flex-col items-center"
          onClick={() => handleNavigate(2)}
        >
          {active === 2 ? (
            <img src={blueSearch} alt="profile" />
          ) : (
            <img src={search} alt="profile" />
          )}
          <p
            className={`${active === 2
                ? "text-blueButtonColor text-center text-xs font-medium leading-normal"
                : "text-textColorBlack text-center text-xs font-medium leading-normal"
              }`}
          >
            Search
          </p>
        </div>
        <div
          className="flex flex-col items-center"
          onClick={() => handleNavigate(3)}
        >
          {active === 3 ? (
            <img src={blueProfile} alt="profile" />
          ) : (
            <img src={profile} alt="profile" />
          )}
          <p
            className={`${active === 3
                ? "text-blueButtonColor text-center text-xs font-medium leading-normal"
                : "text-textColorBlack text-center text-xs font-medium leading-normal"
              }`}
          >
            Account
          </p>
        </div>
      </div>
      {/* {active === 1 && <Friends />}
      {active === 2 && <Search />}
      {active === 3 && <Profile />} */}
    </>
  );
}

export default BottomNavigation;
