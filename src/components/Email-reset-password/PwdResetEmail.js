import React from "react";
import { FcGoogle } from "react-icons/fc";
function PwdResetEmail() {

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="p-4 rounded-lg w-full max-w-md">
                <h2 className="text-center line-height: 1.25rem font-medium mb-8">
                    Email address helps you reset your password
                </h2>
                <div className="text-center">
                    <button
                        className="w-full flex itmes-center font-medium text-center py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline-red transition duration-300 ease-in-out"
                        style={{ color: "#FFF", background: '#000' }}
                    >
                        <FcGoogle className="mr-3 text-2xl" />
                        Continue with Google
                    </button>
                </div>
                <div className="text-center py-10 text-[#C5C5C6]">OR</div>
                <div className=" border-none">
                    <input
                        type="password" // Use 'password' type to hide the characters
                        className="w-full h-10 px-4 border rounded-lg"
                        placeholder="Enter Email"
                        style={{ color: "#888", background: 'rgba(118,118,128,0.12)' }}
                    />
                </div>
                <div className="mt-14">
                    <button
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out"
                        type="submit"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PwdResetEmail;