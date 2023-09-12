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
       <button className="w-full font-sf bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-4">
          Sign up
        </button>
       </Link>
        <button className="w-full text-blue-500 font-bold py-2 px-4 rounded">
          Log in
        </button>
      </div>
    </div>
  )
}

export default Logo
