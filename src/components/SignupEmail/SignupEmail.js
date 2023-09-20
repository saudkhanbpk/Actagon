import React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
function SignupEmail({ setStep, step, email, setEmail }) {

    return (
        <>
            <Link to='/signup-code'>
                <h2 className="text-blueButtonColor px-5 py-2 flex items-center font-medium text-base">
                    <MdOutlineArrowBackIosNew />
                    <span className="ml-2">Back</span>
                </h2>
            </Link>
            <div className="text-center">
                <button
                    className="w-full flex justify-center itmes-center font-medium text-center py-2 rounded-lg focus:outline-none focus:shadow-outline-red transition duration-300 ease-in-out"
                    style={{ color: "#FFF", background: '#000' }}
                >
                    <FcGoogle className="mr-3 text-2xl" />
                    Continue with Google
                </button>
            </div>
            <div className="text-center py-10 text-[#C5C5C6]">OR</div>
            <div className=" border-none">
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                    type="email" // Use 'password' type to hide the characters
                    className="w-full h-10 px-4 border rounded-lg"
                    placeholder="Enter Email"
                    style={{ color: "#888", background: 'rgba(118,118,128,0.12)', border: 'none' }}
                />
            </div>
            <div className="mt-14">
                {/* <Link to='/user'> */}
                <button
                    onClick={() => setStep(step + 1)}
                    className="w-full bg-blueButtonColor text-[white] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out"
                    type="submit"
                >
                    Next
                </button>
                {/* </Link> */}
            </div>


        </>
    );
}

export default SignupEmail;