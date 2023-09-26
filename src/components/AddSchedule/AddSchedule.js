import React, { useState, useEffect } from "react";
import Frame3 from "./../../assets/Frame3.png";
import Frame2 from "./../../assets/Frame2.png";
import Frame1 from "./../../assets/Frame1.png";
import Frame from "./../../assets/Frame.png";
import Calendar from "react-calendar";
import people from "../../assets/peoplesel.png";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import InviteFriends from "../InviteFriends/InviteFriends";
import { addSchedule } from "../../service/Auth";
import SelectPeople from "../SelectPeople/SelectPeople";
import Location from "../Location/Location";
function AddSchedule() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  ); const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [isLocationVisible, setIsLocationVisible] = useState(false);
  const [isPhoneCall, setIsPhoneCall] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  const [title, setTitle] = useState("");
  const [invitedPeople, setInvitedPeople] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedLocation, setSearchedLocation] = useState(null);
  const [phoneCalls, setPhoneCalls] = useState([]);
  const [isPeople, setPeople] = useState(false);
  const [date, setDate] = useState(new Date());


  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };
  const toggleLocation = () => {
    setIsLocationVisible(true);
  };
  const togglePhoneCall = () => {
    setIsPhoneCall(!isPhoneCall);
  };
  const togglePeople = () => {
    setPeople(true);
  };

  const handleSearch = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const geocodeEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchQuery}&key=${apiKey}`;

    fetch(geocodeEndpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setSearchedLocation({ latitude: lat, longitude: lng });
        }
      })
      .catch((error) => {
        console.error("Error fetching geocoding data:", error);
      });
  };

  useEffect(() => {
    handleSearch();

  }, [searchQuery])

  const handleAddSchedule = () => {
    addSchedule({
      userId: user?._id,
      dateAndTime: date,
      title: title,
      location: userLocation,
      phoneCalls: phoneCalls,
      invitedPeople: invitedPeople
    })
      .then((res) => {
        console.log(res);
        navigate('/schedules')
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setUserLocation(location);
      });
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  }, []);

  const handleInvite = (data) => {
    const arr = [...invitedPeople, data]
    setInvitedPeople(arr)

  }
  const handlePeople = (data) => {
    setPhoneCalls(data)

  }

  return (
    <>
      {isLocationVisible ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto  mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[white] outline-none focus:outline-none">
                <div className="relative p-4 flex-auto">
                  <Location setIsLocationVisible={setIsLocationVisible}
                    handleSearch={handleSearch}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    userLocation={userLocation}
                    searchedLocation={searchedLocation}
                    setSearchedLocation={setSearchedLocation}

                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {isPeople && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[white] outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <InviteFriends setPeople={setPeople} handleInvite={handleInvite}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
      {isPhoneCall && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[white] outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <SelectPeople setIsPhoneCall={setIsPhoneCall}
                    handlePeople={handlePeople}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
      <div className="border-[red] bg-[#F2F2F6] h-full">

      <div className="flex items-center bg-[transparent] text-white px-2">
        <Link to="">
          <h2 className="text-blueButtonColor py-2 flex items-center font-medium text-base">
            <MdOutlineArrowBackIosNew />
            <span className="ml-1">Back</span>
          </h2>
        </Link>
        <h4 className="text-xl pl-1 font-medium text-center  mx-auto">
          Add Schedule
        </h4>
        <button
          onClick={handleAddSchedule}
          className="text-blueButtonColor text-white font-semibold rounded-full w-10 h-10 flex items-center  justify-end"
        >
          Done
        </button>
      </div>

      <div className="p-1 rounded-xl bg-[white] shadow-2xl mt-3 mx-3 ">
          <div
            style={{ borderBottom: "1px solid #C6C6C8" }}
            className="w-full py-2 px-2 bg-[white] focus:border-transparent focus:outline-none font-medium text-[#000] text-base rounded-t-md border-gray-300"
            placeholder="Title"
          >
            <p>Title</p>
          </div>
        
        <div className="">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-full py-2 px-2 border-none focus:border-transparent focus:outline-none font-normal text-[#000] text-base "
            placeholder="URL"
          />
        </div>
      </div>

      <div className="shadow-2xl mx-3 rounded-xl bg-[white] p-3 my-4">
        <div className="flex justify-between bg-[white] items-center ">
          <div className="flex items-center">
            <div className="flex items-center">
              <img src={Frame3} alt="icon" />
            </div>
            <div className=" text-[black] font-medium mx-2">
              <p>Date & Time</p>
            </div>
          </div>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value={isCalendarVisible}
                className="sr-only peer"
                onChange={toggleCalendar}
              />
              <div className="w-11 h-6 border-[red]  peer-focus:outline-none  rounded-full peer dark:bg-[lightgray]
               peer-checked:after:translate-x-full peer-checked:after:border-[white] after:content-[''] 
               after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[gray] after:border
                after:rounded-full after:bg-[white] after:h-5 after:w-5 after:transition-all " />
            </label>
          </div>
        </div>
        {isCalendarVisible && (
          <div className="my-2 py-2">
            <div>
              <Calendar onChange={setDate} value={date} />
            </div>
            <div className="text-center p mt-3 flex items-center justify-between">
              <p className="text-base font-medium text-[black]">Time</p>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  style={{ background: "rgba(238, 238, 239)" }}
                  className="w-20 h-10  rounded-lg  text-lg text-[black] text-center"
                  placeholder="12:00"
                />
                <select className="w-16 h-10 border rounded-lg border-[lightgray] text-lg text-[black] ml-2">
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className=" rounded-xl mx-3 bg-[white] shadow-2xl">
        <div className="flex justify-between items-center border-b-[1px] border-[lightgray]   p-3">
          <div className="flex items-center">
            <div className="flex items-center">
              <img src={Frame2} alt="icon" />
            </div>
            <div className="text-base text-[black] font-medium mx-2">
              <p>Location</p>
              {isLocationVisible && (
                <div>
                  <p className="text-[#817F80] text-base font-normal">
                    {searchQuery}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value={isLocationVisible}
                onChange={toggleLocation}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-[lightgray] peer-focus:outline-none  rounded-full peer dark:bg-[lightgray] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[gray] after:border after:rounded-full after:bg-[white] after:h-5 after:w-5 after:transition-all dark:border-[gray] peer-checked:bg-[green]" />
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center  p-3">
          <div className="flex items-center">
            <div className="flex items-center">
              <img src={Frame1} alt="icon" />
            </div>
            <div className="text-base text-[black] font-medium mx-2">
              <p>Phone Call</p>
              {isPhoneCall && (
                <div>
                  <p className="text-[#817F80] text-base font-normal">
                    04 People
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value={isPhoneCall}
                onChange={togglePhoneCall}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-[lightgray] peer-focus:outline-none  rounded-full peer dark:bg-[lightgray] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[gray] after:border after:rounded-full after:bg-[white] after:h-5 after:w-5 after:transition-all dark:border-[gray] peer-checked:bg-[green]" />
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-between bg-[white] items-center mx-3 shadow-2xl rounded-xl p-3 my-4">
        <div className="flex items-center">
          <div className="flex items-center">
            <img src={Frame} alt="icon" />
          </div>
          <div className="text-base text-[black] font-medium mx-2">
            <p>{isPeople ? "Invite people" : "People"}</p>
            {isPeople && (
              <div>
                <p className="text-[#817F80] text-base font-normal">
                  04 selected
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={isPeople}
              onChange={togglePeople}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[lightgray] peer-focus:outline-none  rounded-full peer dark:bg-[lightgray] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[gray] after:border after:rounded-full after:bg-[white] after:h-5 after:w-5 after:transition-all dark:border-[gray] peer-checked:bg-[green]" />
          </label>
        </div>
      </div>
      </div>


      {isPeople && (
        <div className="flex justify-start mx-3 bg-[white] items-center">
          <div className="mx-1">
            <img src={people} alt="chat" className="w-10 h-10" />
          </div>
          <div className="mx-1">
            <img src={people} alt="chat" className="w-10 h-10" />
          </div>
          <div className="mx-1">
            <img src={people} alt="chat" className="w-10 h-10" />
          </div>
          <div className="mx-1">
            <img src={people} alt="chat" className="w-10 h-10" />
          </div>
        </div>
      )}
    </>
  );
}

export default AddSchedule;
