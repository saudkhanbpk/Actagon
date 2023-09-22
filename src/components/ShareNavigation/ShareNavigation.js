import React from "react";
import share from "../../assets/share.png";
import friends from "./../../assets/friends_icon.png";

import blueFriends from "./../../assets/bluefriends.png";
import blueshare from "./../../assets/blueshare.png";
import { useNavigate } from "react-router";
import Location from "../Location/Location";
import ShareLocation from "../ShareLocation/ShareLocation";

function ShareNavigation() {
  const navigate = useNavigate();
  const [active, setActive] = React.useState(1);

  // const handleNavigate = (id) => {
  //   switch (id) {
  //     case 1:
  //       navigate("/location");
  //       setActive(1);
  //       break;
  //     case 2:
  //       navigate("/sharelocation");
  //       setActive(2);
  //       break;
  //     default:
  //       navigate("/location");
  //       setActive(1);
  //       break;
  //   }
  // };

  return (
    <>
      <div className="fixed z-50 bottom-0 left-0 right-0 bg-white h-16 flex justify-around items-center  border-t bg-[white]">
        <div
          className="flex flex-col items-center"
          onClick={() => setActive(1)}
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
          onClick={() => setActive(2)}
        >
          {active === 2 ? (
            <img src={blueshare} alt="profile" />
          ) : (
            <img src={share} alt="profile" />
          )}
          <p
            className={`${active === 2
              ? "text-blueButtonColor text-center text-xs font-medium leading-normal"
              : "text-textColorBlack text-center text-xs font-medium leading-normal"
              }`}
          >
            Sharing
          </p>
        </div>
      </div>
      {active === 1 && <Location />}
      {active === 2 && <ShareLocation />}
      {/* {active === 2 && <Search />}
      {active === 3 && <Profile />} */}
    </>
  );
}

export default ShareNavigation;
