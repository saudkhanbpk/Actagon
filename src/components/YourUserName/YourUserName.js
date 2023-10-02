import React, { useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
function YouUserName({ setStep, step, username, setUserName, firstName }) {

    // const generateUserName = () => {
    //     const random = Math.floor(Math.random() * 1000000);
    //     const userName = firstName + random;
    //     setUserName(userName);
    // }
    // useEffect(() => {
    //     generateUserName();
    // }, [])


    return (
        <>
            <Link to='/user' style={{textDecoration:"none"}}>
                <h2 className="text-blueButtonColor px-2 py-2 flex items-center font-medium text-base">
                    <MdOutlineArrowBackIosNew />
                    <span className="ml-0">Back</span>
                </h2>
            </Link>
            <div className="min-h-screen mt-10">
                <div className="p-4 rounded-lg flex flex-col justify-between w-full max-w-md" style={{ height: "84vh" }}>
                    <div>

                        <h2 className="text-center text-xl font-medium mb-8">
                            Your username
                        </h2>

                        <div>
                            <h2 className="text-center text-3xl font-medium mb-3">
                                @Sameer21321
                            </h2>

                            <Link to='/changeUserName'  style={{textDecoration:"none"}}>
                                <h2 className="text-center text-blueButtonColor text-base font-medium">
                                    Change your username
                                </h2>
                            </Link>
                        </div>

                    </div>
                    {/* <div className="">
                        <Link to='/'>
                            <button
                                className="w-full bg-blueButtonColor text-[white] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out"
                                type="submit"
                            >
                                Next
                            </button>
                        </Link>
                    </div> */}
                </div>
                <div className="">
                    {/* <Link to=''> */}
                    <button
                        onClick={() => setStep(step + 1)}
                        className="w-full bg-blueButtonColor text-[white] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out"
                        type="submit"
                    >
                        Next
                    </button>
                    {/* </Link> */}
                </div>
            </div>
        </>
    );
}

export default YouUserName;
