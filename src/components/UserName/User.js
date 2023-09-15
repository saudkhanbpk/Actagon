import React from "react";
import { Link } from "react-router-dom";
function User({ setStep, step, firstName, setFirstName, lastName, setLastName }) {

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="p-4 rounded-lg w-full max-w-md">
                <h2 className="text-center line-height: 1.25rem font-medium mb-8">
                    What’s your full Name?
                </h2>

                <div className="flex gap-3 border-none">
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="h-10 px-4 w-full border rounded-lg"
                        placeholder="First"
                        style={{ color: "#888", background: 'rgba(118,118,128,0.12)', border: 'none' }}
                    />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="h-10 px-4 w-full border rounded-lg"
                        placeholder="Last"
                        style={{ color: "#888", background: 'rgba(118,118,128,0.12)', border: 'none' }}
                    />
                </div>
                <div className="mt-14">
                    {/* <Link to='/yourUserName'> */}
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
        </div>
    );
}

export default User;