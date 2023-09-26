import React from 'react'
import { Link } from 'react-router-dom'

const NewList = () => {
    return (
        <div className='bg-[#F2F2F6] h-screen'>
            <div className="px-4 py-2 flex justify-between">
                <Link to='/addtolist'>
                    <h2 className="text-blueButtonColor font-medium text-base">
                        Cancel
                    </h2>
                </Link>
                <h2 className="text-textColorBlack font-medium text-base">New List</h2>
                <Link>
                    <h2 className="text-blueButtonColor font-medium text-base">Create</h2>
                </Link>
            </div>

            <div className="px-1 pb-4  md:w-96 mt-3 mx-3">
                <div className="pt-2">
                    <input
                        type="text"
                        className="w-full py-2 px-2 border-none focus:border-transparent focus:outline-none font-normal text-textColorBlack text-base rounded-md"
                        placeholder="List Name:"
                    />
                </div>
            </div>
        </div>
    )
}

export default NewList
