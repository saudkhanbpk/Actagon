import React from "react";
import share from "../../assets/share.png";
import friends from "./../../assets/friends_icon.png";

import blueFriends from "./../../assets/bluefriends.png";
import blueshare from "./../../assets/blueshare.png";
import { useNavigate } from "react-router";
import Location from "../Location/Location";
import ShareLocation from "../ShareLocation/ShareLocation";
import Friends from "../friends/Friends";

function ShareNavigation() {
  const navigate = useNavigate();
  const [active, setActive] = React.useState(1);

  const handleNavigate = (id) => {
    switch (id) {
      case 1:
        navigate("/location");
        setActive(1);
        break;
      case 2:
        navigate("/search");
        setActive(2);
        break;
      case 3:
        navigate("/sharelocation");
        setActive(3);
        break;
      default:
        navigate("/location");
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
          onClick={() => handleNavigate(3)}
        >
          {active === 3 ? (
            <img src={blueshare} alt="profile" />
          ) : (
            <img src={share} alt="profile" />
          )}
          <p
            className={`${active === 3
                ? "text-blueButtonColor text-center text-xs font-medium leading-normal"
                : "text-textColorBlack text-center text-xs font-medium leading-normal"
              }`}
          >
            Sharing
          </p>
        </div>
      </div>
      {active === 1 && <Friends />}
      {active === 2 && <ShareLocation />}
      {/* {active === 3 && <Profile />} */}
    </>
  );
}

export default ShareNavigation;
