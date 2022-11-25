// import React, { useState } from 'react';
import pic from '../../../assets/image/final.webp';
import { DayPicker } from 'react-day-picker';
// import {format} from 'date-fns'

const BikecaBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <header className='my-6'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={pic} alt="" className="max-w-sm  rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker 
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}></DayPicker>
                        {/* <p>You have selected date: {format(selectedDate, 'PP')}</p> */}
                        
                    </div>
                </div>
            </div>
        </header>
    );
};

export default BikecaBanner;