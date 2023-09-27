import React from 'react'
import share from "../../assets/share.png";
import friends from "./../../assets/search_icon.png";
import blueFriends from "./../../assets/bluesearch.png";
import blueshare from "./../../assets/blueshare.png";
import EventSearch from './EventSearch';
import Saved from './Saved';
function EventsSearch() {
  const [active, setActive] = React.useState(1);

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
            Search
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
            Saved
          </p>
        </div>
      </div>
      {active == 1 && <EventSearch />}
      {active == 2 && <Saved />}
    </>
  )
}

export default EventsSearch