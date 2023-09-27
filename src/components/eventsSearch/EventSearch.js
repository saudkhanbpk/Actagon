import React, { useState, useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import searchIcon from "./../../assets/search_icon.png";
import mic from "./../../assets/Clear Glyph.png";
import { Marker, GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";
function EventSearch() {
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedLocation, setSearchedLocation] = useState(null);
  const [showModal, setShowModal] = React.useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const containerStyle = {
    width: "100%",
    height: "80vh",
  };

  const handleSearch = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const geocodeEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchQuery}&key=${apiKey}`;

    fetch(geocodeEndpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          const location = { latitude: lat, longitude: lng };
          setSearchedLocation({ latitude: lat, longitude: lng });
          fetchPlaceDetails(location, apiKey);
          setTimeout(() => {
            setShowModal(true)
          }, 5000)
        }
      })
      .catch((error) => {
        console.error("Error fetching geocoding data:", error);
      });
  };

  const fetchPlaceDetails = (location, apiKey) => {
    const placesEndpoint = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=1000&key=${apiKey}`;

    axios
      .get(placesEndpoint)
      .then((response) => {
        if (response.data.results.length > 0) {
          const placeId = response.data.results[0].place_id;
          fetchPlaceDetailsById(placeId, apiKey);
        }
      })
      .catch((error) => {
        console.error("Error fetching place data:", error);
      });
  };

  const fetchPlaceDetailsById = (placeId, apiKey) => {
    const placeDetailsEndpoint = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;

    axios
      .get(placeDetailsEndpoint)
      .then((response) => {
        if (response.data.result) {
          console.log("Place Details:", response.data.result);
        }
      })
      .catch((error) => {
        console.error("Error fetching place details:", error);
      });
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

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

  return isLoaded ? (
    <>
      <div className=" flex flex-col  bg-gray-100">
        <div className="flex  w-full items-center bg-blue-500 text-white mt-2 px-2">
          <div onClick={() => navigate(-1)}>
            <h2 className="text-blueButtonColor py-2 flex items-center font-medium text-base">
              <MdOutlineArrowBackIosNew />
              <span className="ml-1">Back</span>
            </h2>
          </div>
          <div className="flex justify-center items-center w-full">
            <h3 className="text-xl text-[#000] text-[17px] font-[590] leading-[22px]">
              Search
            </h3>
          </div>
        </div>
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
        <div className="mt-2">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={
              searchedLocation
                ? {
                  lat: searchedLocation.latitude,
                  lng: searchedLocation.longitude,
                }
                : { lat: userLocation?.latitude, lng: userLocation?.longitude }
            }
            zoom={15}
          >
            {searchedLocation && (
              <Marker
                position={{
                  lat: searchedLocation.latitude,
                  lng: searchedLocation.longitude,
                }}
              />
            )}
          </GoogleMap>
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border rounded-lg shadow-lg relative flex flex-col w-full bg-[white] outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  ) : (
    <></>
  );
}

export default EventSearch;