import React, { useState } from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import Rectangle from "../../assets/Rectangle.png"
import { MdOutlineArrowBackIosNew, MdPersonAdd } from 'react-icons/md'
import { Link } from "react-router-dom";

function AddToList() {
  // Create an array of objects to store the state for each list item
  const [listItems, setListItems] = useState([
    { id: 1, isClicked: false },
    { id: 2, isClicked: false },
    { id: 3, isClicked: false },
    // Add more items as needed
  ]);

  // Function to handle the button click for a specific item
  const handleItemClick = (itemId) => {
    // Use the map function to update the state for the clicked item
    setListItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, isClicked: !item.isClicked } // Toggle the isClicked property
          : item
      )
    );
  };

  return (

    <>
      <div className='flex justify-between p-2  items-center'>
        <p className="flex items-center text-blueButtonColor text-center text-lg font-semibold leading-5">
          <MdOutlineArrowBackIosNew /> Back
        </p>
        <p className="text-textColorBlack text-center text-lg font-semibold leading-5">
          Add to List
        </p>
        <Link to='/newList'>
          <p className='text-blueButtonColor text-center text-lg font-semibold leading-5'>New list</p>
        </Link>
      </div>

      <div className="bg-gray-100 min-h-screen">
        <div className="flex mt-3 mx-2 self-start">
          <h1 className="text-textColorBlack font-bold text-xl leading-5 p-2">
            Saved Lists
          </h1>
        </div>
        <main className="container mx-auto px-4">
          <div>
            <div className="grid grid-cols-2 gap-2">
              {listItems.map((item) => (
                <div className="mt-2" key={item.id}>
                  <div className="flex">
                    <div className="w-full">
                      <img
                        src={img1}
                        alt="hello"
                        className="w-full pr-[1px]"
                        style={{
                          height: "100%",
                          borderBottomLeftRadius: "10px",
                          borderTopLeftRadius: "10px",
                        }}
                      />
                    </div>
                    <div className="w-24">
                      <div className="">
                        <img
                          src={img2}
                          alt="hello"
                          className="w-full"
                          style={{ borderTopRightRadius: "8px" }}
                        />
                      </div>
                      <div className="pt-[1px]">
                        <img
                          src={img3}
                          alt="hello"
                          className="w-full"
                          style={{ borderBottomRightRadius: "8px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 pb-1 justify-between flex">
                    <p className="font-semibold">List name</p>
                    <div>
                      <button
                        className={`w-5 h-5 rounded-full  ${item.isClicked ? "bg-blueButtonColor" : "border-[2px] border-[gray]"
                          }`}
                        onClick={() => handleItemClick(item.id)}
                      ></button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[gray]">Shared With</p>
                    <div>
                      <div className="flex justify-start mt-1 items-center">

                        <div className=""><img src={Rectangle} alt="chat" className="w-7 h-7" /></div>


                        <div className="mx-1"><img src={Rectangle} alt="chat" className="w-7 h-7" /></div>

                        <div className=""><img src={Rectangle} alt="chat" className="w-7 h-7" /></div>

                        <div className="mx-1"><img src={Rectangle} alt="chat" className="w-7 h-7" /></div>


                      </div></div>
                  </div>
                </div>
              ))}

              <div className="mt-2">
                <div className="flex">
                  <div className="w-full">
                    <img
                      src={img1}
                      alt="hello"
                      className="w-full pr-[1px]"
                      style={{
                        height: "100%",
                        borderBottomLeftRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="w-24">
                    <div className="">
                      <img
                        src={img2}
                        alt="hello"
                        className="w-full"
                        style={{ borderTopRightRadius: "8px" }}
                      />
                    </div>
                    <div className="pt-[1px]">
                      <img
                        src={img3}
                        alt="hello"
                        className="w-full"
                        style={{ borderBottomRightRadius: "8px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-2 pb-1 justify-between flex">
                  <p className="font-semibold">List name</p>

                </div>
                <div>
                  <p className="text-sm text-[gray]">Shared With</p>
                  <div>
                    <div className="flex justify-start mt-1  items-center">

                      <MdPersonAdd className="w-7 h-7 rounded-full bg-[lightgray] p-1" />


                    </div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10  ">
            <button className="btn bottom-0 bg-blueButtonColor rounded-lg py-2 w-full text-[white] font-semibold">Done</button>
          </div>
        </main>
      </div>
    </>
  );
}

export default AddToList;