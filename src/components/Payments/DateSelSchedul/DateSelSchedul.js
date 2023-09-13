import React, { useState } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import Calendar from 'react-calendar'; // Import the calendar component

const DateSelSchedul = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div className="flex py-2 px-2 justify-between items-center">
        <h2 className="text-blueButtonColor flex items-center font-medium text-base">
          <MdOutlineArrowBackIosNew />
          <span className="ml-2">Back</span>
        </h2>
        <h2 className="text-blueButtonColor font-medium text-base">Cancel</h2>
      </div>

      {/* Add the calendar component */}
      <div className="my-4">
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
};

export default DateSelSchedul;
