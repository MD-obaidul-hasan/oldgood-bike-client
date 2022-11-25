import React, { useEffect, useState } from 'react';
import {format} from 'date-fns'
import BikeBookoption from './BikeBookoption';
import BookingModal from '../BookingModal/BookingModal';


const Availablecata = ( {selectedDate}) => {
    const [catagoriesBikes, setCatagoriesbike] = useState([]);
    const [bike, setBike] = useState(null);

    useEffect(() =>{
        fetch('catagoriesbike.json')
        .then(res => res.json())
        .then(data => setCatagoriesbike(data))
    },[])
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>You have selected  {format(selectedDate, 'PP')} </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    catagoriesBikes.map(option => <BikeBookoption
                    key={option._id}
                    catagoriesBike={option}
                    setBike={setBike}
                    ></BikeBookoption>)
                }
            </div>
            
            { bike &&
                <BookingModal
                selectedDate={selectedDate}
            bike={bike}
            ></BookingModal>}
        </section>
    );
};

export default Availablecata;