import React from "react";
function User() {

    return (
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
                        style={{ color: "#888", background: 'rgba(118,118,128,0.12)' }}
                    />
                    <input
                        type="password" 
                        className="h-10 px-4 w-full border rounded-lg"
                        placeholder="Last"
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

export default User;