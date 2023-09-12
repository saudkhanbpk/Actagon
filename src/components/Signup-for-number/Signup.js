import React from 'react';
import 'react-phone-input-2/lib/style.css'; // Import the library's CSS
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="p-4 rounded-lg w-full max-w-md">
        <h2 className='text-center text-2xl font-20 mb-20'>
          Let’s get you signed up!
        </h2>
        <div className='mb-20'>
          <div className="mb-4 border-none">
            <PhoneInput
              inputProps={{
                id: 'phoneInput',
                name: 'phoneInput',
                required: true,
              }}
              country={'pk'} // Set the default country (you can change this)
              inputStyle={{ width: "100%", height: '45px', border: "none",background: 'rgba(118,118,128,0.12)' }}
            />
          </div>
          <div className='text-center'>
            <p className="text-sm text-[#C5C5C6]">
              By providing your phone number, you’re agree to the term of <span className='text-blue-500'>privacy</span> and <span className='text-blue-500'>policy.</span>
            </p>
          </div>
          {/* Button */}
          <div className="mt-6">
         <Link to='/signup-code'>
         <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out"
              type="submit"
            >
              Next
            </button>
         </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup