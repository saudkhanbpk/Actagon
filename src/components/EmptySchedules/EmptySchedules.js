import React from 'react'
import plus from '../../assets/plus.png'
import { Link } from 'react-router-dom'
import schedule from '../../assets/schedulesEmpty.png';

const EmptySchedules = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-2 px-4  border-b-[1px] border-gray-200">
        <h1 className="text-xl pl-12 font-medium text-center  mx-auto">Events</h1>
        <Link to='/addschedule'>
          <button className="bg-blue-500  text-white rounded-full w-10 h-10 flex items-center font-[20px] justify-end">
            <img src={plus} alt='plus icon' />
          </button>
        </Link>
      </div>

      <div className='flex flex-col items-center mt-32'>
        <div className='flex flex-col items-center justify-center'>
          <div className='' style={{
            background: 'rgba(118, 118, 128, 0.12)',
            borderRadius: '100px',
            padding: '28px 26px 27px 26px'
          }}>
            <img
              src={schedule}
              alt="schedule"
              style={{
              }}
            />
          </div>
          <Link to='/addCard'>
            <h2 className='text-textColorBlack font-medium mt-3'>No schedules found</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EmptySchedules
