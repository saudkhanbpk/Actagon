import React from "react";
import { useParams } from "react-router-dom";
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
import { IoIosTime, IoIosTimer } from 'react-icons/io'
import { PiUserCircleFill, PiUserCircleGearFill } from 'react-icons/pi'
import { FaInfo, FaInfoCircle } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function SearchResturentDetails() {
    const navigate = useNavigate();

    const customRenderIndicator = (clickHandler, isSelected, index) => {
        const style = {
            cursor: 'pointer',
            background: isSelected ? '#333' : '#fff',
            border: '1px solid #333',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            display: 'inline-block',
            margin: '0 8px',
            position: 'absolute',
            bottom: '5px', // Adjust the position as needed
            right: '5px',  // Adjust the position as needed
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
                            <div>
                                <img src={carousel} alt="Carousel Image 1" />
                            </div>
                            <div>
                                <img src={carousel} alt="Carousel Image 2" />
                            </div>
                            <div>
                                <img src={carousel} alt="Carousel Image 3" />
                            </div>
                            <div>
                                <img src={carousel} alt="Carousel Image 3" />
                            </div>
                            <div>
                                <img src={carousel} alt="Carousel Image 3" />
                            </div>
                        </Carousel>
                    </div>

                    <div className="flex justify-around gap-[5px] mx-2 mt-5">
                        <div className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px]  justify-center items-center cursor-pointer">
                            <img src={voiceCall} alt="" className="flex items-center mx-auto" />
                            <p className="text-blueButtonColor text-sm leading-normal font-semibold mt-1">Call</p>
                        </div>
                        <div className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px]  justify-center items-center cursor-pointer">
                            <img src={events} alt="" className="flex items-center mx-auto" />
                            <p className="text-blueButtonColor text-sm mt-1 leading-normal font-semibold ">Event</p>
                        </div>
                        <div className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px]  justify-center items-center cursor-pointer">
                            <img src={friends} alt="" className="flex items-center mx-auto" />
                            <p className="text-blueButtonColor text-sm leading-normal font-semibold mt-1">Invite</p>
                        </div>
                        <div className="flex flex-col bg-viewProfileBoxColor first-letter:
        rounded-xl p-[2px] h-[70px] w-[80px] justify-center items-center cursor-pointer">
                            <img src={direction} alt="" className="flex items-center mx-auto" />
                            <p className="text-blueButtonColor text-sm leading-normal font-semibold mt-1">Direction</p>
                        </div>
                    </div>

                    <div className="items-center flex mt-5">
                        <div className="mx-2 flex items-center justify-center bg-[lightgray] rounded-lg" style={{ width: '30px', height: '30px' }}><img src={resturentIcon} /></div>
                        <div><p className="font-semibold">Restaurant $10-20 02 mil</p></div>
                    </div>

                    <div className="items-center flex mt-2">
                        <div className="mx-2 flex items-center justify-center bg-[lightgray] rounded-lg" style={{ width: '30px', height: '30px' }}><img src={italinIcon} /></div>
                        <div><p className="font-semibold">Italian</p></div>
                    </div>
                    <div className="items-center flex mt-2">
                        <div className="mx-2 flex items-center justify-center bg-[lightgray] rounded-lg" style={{ width: '30px', height: '30px' }}><img src={timgingIcon} /></div>
                        <div className="flex items-center gap-1 justify-center">
                            <p className="font-semibold text-[#63BF84]">Open</p>
                            <p className="font-semibold">8:00 AM - 11:00 PM</p>
                            <img src={arrow} />
                        </div>
                    </div>

                    <div className="items-center flex mt-2">
                        <div className="mx-2 flex items-center justify-center bg-[lightgray] rounded-lg" style={{ width: '30px', height: '30px' }}><img src={phoneIcon} /></div>
                        <div><p className="font-semibold text-[#3478F6]">+92-932 9236 328</p></div>
                    </div>
                    <div className="items-center flex mt-2">
                        <div className="mx-2 flex items-center justify-center bg-[lightgray] rounded-lg" style={{ width: '30px', height: '30px' }}><img src={locationIcon} /></div>
                        <div><p className="font-semibold">1 Hacker Way, Menlo Park, CA 94025</p></div>
                    </div>
                    <div className="items-center flex mt-2">
                        <div className="mx-2 flex items-center justify-center bg-[lightgray] rounded-lg" style={{ width: '30px', height: '30px' }}><img src={starIcon} /></div>
                        <div className="flex items-center justify-center gap-1">
                            <p className="font-semibold text-[#817F80]">5.0</p>
                            <img src={colorStar} />
                            <img src={colorStar} />
                            <img src={colorStar} />
                            <img src={colorStar} />
                            <img src={colorStar} />
                            <p className="font-semibold text-[#817F80]">(236)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchResturentDetails;
