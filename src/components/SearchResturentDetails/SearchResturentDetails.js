import React from "react";
import { useLocation } from "react-router-dom";
import fav from "./../../assets/fav.png";
import carousel from "./../../assets/cars1.png";
import resturentIcon from "./../../assets/resturenticon.png";
import italinIcon from "./../../assets/italinicon.png";
import timgingIcon from "./../../assets/timing.png";
import phoneIcon from "./../../assets/phoneicon.png";
import locationIcon from "./../../assets/locationicon.png";
import starIcon from "./../../assets/staricon.png";
import colorStar from "./../../assets/starcolor.png";
import arrow from "./../../assets/arrow.png";
import backButton from "./../../assets/Back Button (1).png";
import { useNavigate } from "react-router-dom";
import voiceCall from "./../../assets/voicecall.png";
import events from "./../../assets/events.png";
import friends from "./../../assets/bluefriends.png";
import direction from "./../../assets/direction.png";
import { IoIosTime, IoIosTimer } from "react-icons/io";
import { PiUserCircleFill, PiUserCircleGearFill } from "react-icons/pi";
import { FaInfo, FaInfoCircle } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarRatings from "react-star-ratings";

function SearchResturentDetails() {
    const location = useLocation();
    const getImages = (photoReference) => {
        const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

        const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${apiKey}`;
        return photoUrl;
    };
    const { state } = location;

    console.log("state in 30:", state);
    const navigate = useNavigate();

    const customRenderIndicator = (clickHandler, isSelected, index) => {
        const style = {
            cursor: "pointer",
            background: isSelected ? "#333" : "#fff",
            border: "1px solid #333",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            display: "inline-block",
            margin: "0 8px",
            position: "absolute",
            bottom: "5px", // Adjust the position as needed
            right: "5px", // Adjust the position as needed
        };

        return (
            <li
                style={style}
                onClick={clickHandler}
                onKeyDown={clickHandler}
                role="button"
                tabIndex={0}
                title={`${index + 1}`}
                aria-label={`Go to slide ${index + 1}`}
            />
        );
    };
    return (
        <>
            <div className="">
                <div className="w-full">
                    <div className="relative">
                        <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-4">
                            <div className="flex items-center cursor-pointer">
                                <img src={backButton} alt="back" onClick={() => navigate(-1)} />
                            </div>
                            <div className="flex items-center cursor-pointer">
                                <img src={fav} alt="setting" />
                            </div>
                        </div>
                        <Carousel showThumbs={false}>
                            {state?.photos?.map((photo) => {
                                return (
                                    <div>
                                        <img
                                            src={getImages(photo.photo_reference)}
                                            alt="Image 1"
                                            className="w-[100%] h-[500px]"
                                        />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>

                    <div className="flex justify-around gap-[5px] mx-2 mt-5">
                        <a href={`tel:${state?.international_phone_number}`}>
                            <div
                                className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px]  justify-center items-center cursor-pointer"
                            >
                                <img
                                    src={voiceCall}
                                    alt=""
                                    className="flex items-center mx-auto"
                                />
                                <p className="text-blueButtonColor text-sm leading-normal font-semibold mt-1">
                                    Call
                                </p>
                            </div>
                        </a>
                        <div
                            className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px]  justify-center items-center cursor-pointer"
                        >
                            <img src={events} alt="" className="flex items-center mx-auto" />
                            <p className="text-blueButtonColor text-sm mt-1 leading-normal font-semibold ">
                                Event
                            </p>
                        </div>
                        <div
                            className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px]  justify-center items-center cursor-pointer"
                        >
                            <img src={friends} alt="" className="flex items-center mx-auto" />
                            <p className="text-blueButtonColor text-sm leading-normal font-semibold mt-1">
                                Invite
                            </p>
                        </div>
                        <div
                            className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px] justify-center items-center cursor-pointer"
                        >
                            <img
                                src={direction}
                                alt=""
                                className="flex items-center mx-auto"
                            />
                            <p className="text-blueButtonColor text-sm leading-normal font-semibold mt-1">
                                Direction
                            </p>
                        </div>
                    </div>

                    <div className="items-center flex mt-5">
                        <div
                            className="mx-2 flex items-center justify-center bg-[lightgray] rounded-lg"
                            style={{ width: "30px", height: "30px" }}
                        >
                            <img src={resturentIcon} />
                        </div>
                        <div>
                            <p className="font-semibold">Restaurant $10-20 02 mil</p>
                        </div>
                    </div>

                    <div className="items-center flex mt-2">
                        <div
                            className="mx-2 flex items-center justify-center bg-[lightgray] rounded-lg"
                            style={{ width: "30px", height: "30px" }}
                        >
                            <img src={italinIcon} />
                        </div>
                        <div>
                            <p className="font-semibold">{state?.name}</p>
                        </div>
                    </div>
                    <div className="items-center flex mt-2">
                        <div
                            className="mx-2 flex items-center justify-center bg-[lightgray] rounded-lg"
                            style={{ width: "30px", height: "30px" }}
                        >
                            <img src={timgingIcon} />
                        </div>
                        <div className="flex items-center gap-1 justify-center">
                            <p className="font-semibold text-[#63BF84]">Open</p>
                            <p className="font-semibold">8:00 AM - 11:00 PM</p>
                            <img src={arrow} />
                        </div>
                    </div>

                    <div className="items-center flex mt-2">
                        <div
                            className="mx-2 flex items-center justify-center bg-[lightgray] rounded-lg"
                            style={{ width: "30px", height: "30px" }}
                        >
                            <img src={phoneIcon} />
                        </div>
                        <div>
                            <p className="font-semibold text-[#3478F6]">
                                {state.international_phone_number
                                    ? state.international_phone_number
                                    : null}
                            </p>
                        </div>
                    </div>
                    <div className="items-center flex mt-2">
                        <div
                            className="mx-2 flex items-center justify-center bg-[lightgray] rounded-lg"
                            style={{ width: "30px", height: "30px" }}
                        >
                            <img src={locationIcon} />
                        </div>
                        <div>
                            <p className="font-semibold">{state?.formatted_address}</p>
                        </div>
                    </div>
                    <div className="items-center flex mt-2">
                        <div
                            className="mx-2 flex items-center justify-center bg-[lightgray] rounded-lg"
                            style={{ width: "30px", height: "30px" }}
                        >
                            <img src={starIcon} />
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <p className="font-semibold text-[#817F80]">{state.rating}</p>
                            <StarRatings
                                rating={state.rating}
                                starRatedColor="#FFC107"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="1px"
                            />
                            <p className="font-semibold text-[#817F80]">{`(${state?.user_ratings_total})`}</p>{" "}
                        </div>
                    </div>
                </div>
            </div>
            Location
        </>
    );
}

export default SearchResturentDetails;
