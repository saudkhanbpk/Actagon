import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
function User() {

    return (
        <>
        <Link to='/signup-email'>
                <h2 className="text-blueButtonColor px-5 py-2 flex items-center font-medium text-base">
                    <MdOutlineArrowBackIosNew />
                    <span className="ml-2">Back</span>
                </h2>
            </Link>
        <div className="min-h-screen flex justify-center items-center">
            <div className="p-4 rounded-lg w-full max-w-md">
                <h2 className="text-center line-height: 1.25rem font-medium mb-8">
                What’s your full Name?
                </h2>
                
                <div className="flex gap-3 border-none">
                    <input
                        type="password" 
                        className="h-10 px-4 w-full border rounded-lg"
                        placeholder="First"
                        style={{ color: "#888", background: 'rgba(118,118,128,0.12)', border: 'none' }}
                    />
                    <input
                        type="password" 
                        className="h-10 px-4 w-full border rounded-lg"
                        placeholder="Last"
                        style={{ color: "#888", background: 'rgba(118,118,128,0.12)', border: 'none' }}
                    />
                </div>
                <div className="mt-14">
                    <Link to='/yourUserName'>
                    <button
                        className="w-full bg-blueButtonColor text-[white] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out"
                        type="submit"
                    >
                        Next
                    </button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default User;