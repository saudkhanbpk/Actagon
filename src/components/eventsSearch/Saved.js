import React from 'react'
import { useState } from 'react';
import { getSaveData } from '../../service/Auth';
import { useEffect } from 'react';
import Slider from "react-slick";
import voiceCall from "./../../assets/voicecall.png";
import events from "./../../assets/events.png";
import friends from "./../../assets/bluefriends.png";
import colorStar from "./../../assets/starcolor.png";

import direction from "./../../assets/direction.png";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
function Saved() {
  const navigate = useNavigate()
  const [restaurantData, setRestaurantData] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  useEffect(() => {
    getSaveData({ userId: user?._id }).then((res) => {
      console.log(res.data)
      setRestaurantData(res.data)
    }).catch((e) => {
      console.log(e)
    })
  }, [])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{

    }]
  };

  const getImages = (photoReference) => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${apiKey}`;
    return photoUrl
  }

  return (
    <>
      <div className=' flex flex-col  overflow-x-hidden'>
        <div className="flex  w-full items-center bg-blue-500 text-white   px-2">
          <div onClick={() => navigate(-1)}>
            <h2 className="text-blueButtonColor py-2 flex items-center font-medium text-base">
              <MdOutlineArrowBackIosNew />
              <span className="ml-1">Back</span>
            </h2>
          </div>
          <div className="flex justify-center items-center w-full">
            <h3 className="text-xl text-[#000] text-[17px] font-[590] leading-[22px]">
              Saved
            </h3>
          </div>
        </div>
        {restaurantData.map((item) => {
          return (
            <div className="mt-5 px-2" key={item._id} >
              {
                item?.map((item) => {
                  return (
                    <>
                      <Slider >
                        {
                          item?.photos?.map((photo) => {
                            return (
                              <div className='mt-5'>
                                <img

                                  src={getImages(photo.photo_reference)}
                                  alt="Image "
                                  className="w-[100%]  h-[200px] rounded-t-lg  px-2 mx-5"
                                />
                              </div>
                            )
                          })
                        }
                      </Slider>
                      <div className=''>
                        <h2 className="font-medium text-textColorBlack text-xl">
                          {item?.name}
                        </h2>
                        <div className="flex items-center gap-1">
                          <p className="font-semibold text-[#817F80]">{item?.rating}</p>
                          <StarRatings
                            rating={item?.rating}
                            starRatedColor="#FFC107"
                            numberOfStars={5}
                            name='rating'
                            starDimension="20px"
                            starSpacing="1px"
                          />
                          <p className="font-semibold text-[#817F80]">(
                            {item?.totalRating}
                            )</p>
                        </div>
                        <div className="items-center flex">
                          <div className="text-[#817F80]">
                            <p className="font-semibold">
                              Restaurant $10-20 02 mil
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <p className="font-semibold text-[#63BF84]">Open</p>
                          <p className="font-semibold">8:00 AM - 11:00 PM</p>
                        </div>

                        <div className="flex justify-around gap-[5px] mt-5">
                          <a href={item?.international_phone_number
                          }>
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
                            <img
                              src={events}
                              alt=""
                              className="flex items-center mx-auto"
                            />
                            <p className="text-blueButtonColor text-sm mt-1 leading-normal font-semibold ">
                              Event
                            </p>
                          </div>
                          <div
                            className="flex flex-col bg-viewProfileBoxColor first-letter:
            rounded-xl p-[2px] h-[70px] w-[80px]  justify-center items-center cursor-pointer"
                          >
                            <img
                              src={friends}
                              alt=""
                              className="flex items-center mx-auto"
                            />
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
                      </div>
                    </>
                  )
                })
              }

            </div>
          );
        })}
      </div>

    </>

  )
}

export default Saved