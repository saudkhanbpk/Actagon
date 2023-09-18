import React from 'react';
import payment from '../../../assets/payment.png';
import symbol from '../../../assets/Symbol.png';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const PaymentsEmpty = () => {
    return (
        <>
            <div className='px-2 pt-2 flex items-center'>
                <Link to='/group'>
                    <p className="text-blueButtonColor flex items-center justify-start text-center text-base font-semibold leading-5">
                        <MdOutlineArrowBackIosNew className='mr-2' />
                        Back
                    </p>
                </Link>
                <p className="text-textColorBlack w-full mr-12 flex justify-center items-center text-center text-lg font-semibold leading-5">
                    Wallet
                </p>

            </div>
            <div className='flex flex-col items-center py-3'>
                <hr style={{ width: '398px', height: '98px', background: '#FFFFFF' }} />
                <div className='flex flex-col items-center justify-center mt-20'>
                    <div className='' style={{
                        background: 'rgba(118, 118, 128, 0.12)',
                        borderRadius: '100px',
                        padding: '28px 19px 27px 19px'
                    }}>
                        <img
                            src={payment}
                            alt="Payment Card"
                            style={{
                            }}
                        />
                    </div>

                    <Link to='/addCard'>
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
                    <Link to='/addCard'>
                        <h2 className='text-blueButtonColor font-medium'>Add Card</h2>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PaymentsEmpty;
