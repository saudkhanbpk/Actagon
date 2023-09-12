import React from "react";
import { Link } from "react-router-dom";
function YouUserName() {

    return (
        <div className="min-h-screen mt-20">
            <div className="p-4 rounded-lg flex flex-col justify-between w-full max-w-md" style={{ height: "84vh" }}>
                <div>

                    <h2 className="text-center text-xl font-medium mb-8">
                        Your username
                    </h2>

                    <div>
                        <h2 className="text-center text-3xl font-medium mb-3">
                            @Sameer21321
                        </h2>

                        <Link to='/changeUserName'>
                            <h2 className="text-center text-blueButtonColor text-base font-medium">
                                Change your username
                            </h2>
                        </Link>
                    </div>

                </div>
                <div className="">
                    <Link to='/'>
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
    );
}

export default YouUserName;