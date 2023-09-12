import React from 'react';
import payment from '../../../assets/payment.png';
import symbol from '../../../assets/Symbol.png';

const PaymentsEmpty = () => {
    return (
        <div className='flex flex-col items-center py-3'>
            <h2 className='text-textColorBlack text-base font-medium'>
                Wallet
            </h2>
            <hr style={{width: '398px', height: '98px', background: '#FFFFFF'}}/>
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
                <h2 className='text-blueButtonColor font-medium'>Add Card</h2>
            </div>
        </div>
    );
};

export default PaymentsEmpty;
