
import React from 'react';
import chat from '../../assets/chat.png';
import symbol from '../../assets/Symbol.png';
import plus from '../../assets/plus.png'
import { Link } from 'react-router-dom';

const Message = () => {
    
    return (
        <div className='flex flex-col justify-center '>
        <div className="flex bg-blue-500 text-white mt-2 px-4  border-b-[1px] border-gray-200">
            <h1 className="text-2xl pl-12 font-semibold text-center  mx-auto">Messages</h1>
           
            <Link to='/chat'>
            <button  className="bg-blue-500  text-white rounded-full w-10 h-10 flex items-center font-[20px] justify-end">
          <img src={plus} alt='plus icon'/>
         </button>
         </Link>

         </div>
            {/* <hr style={{width: '398px', height: '98px', background: '#FFFFFF'}}/> */}
            <div className='flex flex-col items-center justify-center mt-20'>
                <div className='' style={{
                    background: 'rgba(118, 118, 128, 0.12)',
                    borderRadius: '100px',
                    padding: '22px 19px 20px 19px'
                }}>
                    <img
                        src={chat}
                        alt="chat symbol"
                        style={{
                        }}
                    />
                </div>
<Link to='/chat'>
                <div style={{
                }}>
                    <img
                        className='relative'
                        src={symbol}
                        alt="Plus Icon"
                        style={{
                            width: '24px',
                            height: '22px',
                            bottom: '18px',
                            left: '32px',
                            background: '#FFF',
                            padding: '4px 5px 4px 4px',
                            borderRadius: '100px'

                        }}
                    />
                </div>
                </Link>
                <Link to='/chat'>
                <h2 className='text-blueButtonColor font-medium'>New Message</h2>
                </Link>
            </div>
            
        </div>
    );
};

export default Message;

