import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center  justify-between">
      <div className="text-7xl font-custom font-bold mt-56 font-sans">
        LOGO
      </div>
      <div className="w-full max-w-md px-3 mb-10">
        <Link to='/signup'>
          <button className="w-full font-sf bg-blueButtonColor text-[white] font-medium py-2 px-4 rounded-md mb-4">
            Sign up
          </button>
        </Link>
        <Link to='/phone'>
          <button className="w-full text-blueButtonColor font-medium py-2 px-4 rounded">
            Log in
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Logo
