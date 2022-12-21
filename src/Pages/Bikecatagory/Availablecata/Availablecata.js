
import React, {  useState } from 'react';
import {format} from 'date-fns'
import BikeBookoption from './BikeBookoption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Modal from '../Model/Modal';


const Availablecata = ( {selectedDate}) => {
    const [bike, setBike] = useState(null);
    const [model, setModel] = useState(null);


    // const { data:catagoriesBikes = []} = useQuery({
    //     queryKey: ['bikes'],
    //     queryFn: () => fetch('https://oldgood-bike-server-md-obaidul-hasan.vercel.app/bikes')
    //     .then(res => res.json())
    // })


    const { data : catagoriesBikes = []} = useQuery({
        queryKey: ['bikes'],
        queryFn: async() => {
         const res =   await fetch('https://oldgood-bike-server-md-obaidul-hasan.vercel.app/bikes');
        const data = await res.json();
        return data
        }
    })
   


    // useEffect(() =>{
    //     fetch('https://oldgood-bike-server-md-obaidul-hasan.vercel.app/bikes')
    //     .then(res => res.json())
    //     .then(data => setCatagoriesbike(data))
    // },[])

    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>You have selected  {format(selectedDate, 'PP')} </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    catagoriesBikes.map(option => <BikeBookoption
                    key={option._id}
                    catagoriesBike={option}
                    // setModel={setModel}
                    ></BikeBookoption>)
                }
            </div>
            
            <BookingModal></BookingModal>
            {/* { bike &&
                <BookingModal
                selectedDate={selectedDate}
                bike={bike}
                setBike={setBike}
            ></BookingModal>} */}
        </section>
    );
};

export default Availablecata;