import React from "react";
import searchIcon from "./../../assets/search_icon.png";
import mic from "./../../assets/Clear Glyph.png";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Marker, GoogleMap, useJsApiLoader } from "@react-google-maps/api";

function Location({ setIsLocationVisible, userLocation, handleSearch, searchQuery, setSearchQuery, searchedLocation }) {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });
    const containerStyle = {
        width: "100%",
        height: "80vh",
    };
    const navigate = useNavigate();
    return isLoaded ? (
        <div className="">
            <div className="flex items-center  text-white mt-2  ">
                <h2
                    className="text-blueButtonColor py-2 flex items-center font-medium text-base"
                    onClick={() => setIsLocationVisible(false)}
                >
                    <MdOutlineArrowBackIosNew />
                    <span className="">Back</span>
                </h2>
                <h1 className="text-xl  font-medium text-center  mx-auto">
                    Add Location
                </h1>
                <button onClick={() => setIsLocationVisible(false)}
                    className="text-blueButtonColor py-2 flex items-center font-medium text-base justify-end">
                    Done
                </button>
            </div>
            <div
                className="flex justify-between items-center mt-3 rounded-xl px-1 py-2  mb-3 "
                style={{ background: "rgba(118, 118, 128, 0.12)" }}
            >
                <div>
                    <img src={searchIcon} alt="" className="" />
                </div>
                <div className="py-1 px-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex      items-center bg-transparent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ background: "transparent", outline: "none" }}
                    />
                </div>
                <div>
                    <img src={mic} alt="" />
                </div>

            </div>
            <p className="mb-2">{searchQuery}</p>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={
                    searchedLocation
                        ? { lat: searchedLocation.latitude, lng: searchedLocation.longitude }
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
    ) : (
        <></>
    );
}

export default Location;
