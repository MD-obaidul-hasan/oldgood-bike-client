import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ bike,setBike, selectedDate }) => {
    const { name, slots } = bike; // bike is booking option
    const date = format(selectedDate, 'PP');
const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const metting = form.metting.value;
    const booking ={
        bookDate: date,
        bike: name,
        consumer:name,
        email,
        phone,
        price,
        metting,
    }

    console.log(booking);
    setBike(null);
}

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    {/* <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
                    <from onSubmit={handleBooking}className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} placeholder="Type here" className="input w-full " />
                        <select name="slot" className="select select-bordered w-full ">
                            
                            {
                                slots.map((slot, i )=> <option
                                 value={slot} 
                                 key={i}
                                 >{slot}</option> )
                            }
                        </select>
                        <input  name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input  name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input  name="item name"type="text" placeholder="Item Name" className="input w-full input-bordered" />
                        <input  name="price"type="text" placeholder="Price" className="input w-full input-bordered" />
                        <input  name="phone"type="text" placeholder="Your Phone Number" className="input w-full input-bordered" />
                        <input  name="metting"type="text" placeholder="Metting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full ' type="submit" value="Submit"></input>
                    </from>
                </div>
            </div>
        </>


    );
};

export default BookingModal;