import React from 'react'
import { Link } from 'react-router-dom'

const LoginCode = () => {
  return (
<div className="min-h-screen flex justify-center items-center mt-2  ">
      <div className="px-4 rounded-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-center text-[#000] text-xl font-[20px] mb-11">
        We will send your login code
        </h2>
{/* gvhkjlknm; */}
        
        <div className="mb-3 border-none ">
          
        </div>
        <div  className="text-center ">
        <p className="text-sm text-[#C5C5C6] mt-6">
              We will send it to 'a...11@gmail.com'
            </p>
          
        </div>

        <div className="mt-24">
        <Link to='/emailedcode'>
          <button
            className="w-full bg-blueButtonColor hover:bg-blue-600 text-[white] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out h-[45px]"
            type="submit"
          >
            Confirm
          </button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default LoginCode