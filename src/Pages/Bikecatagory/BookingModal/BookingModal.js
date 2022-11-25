import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ bike, selectedDate }) => {
    const { name, slots } = bike; // bike is booking option
    const date = format(selectedDate, 'PP');
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    {/* <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
                    <from className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} placeholder="Type here" className="input w-full " />
                        <select className="select select-bordered w-full ">
                            
                            {
                                slots.map(slot => <option value={slot} >{slot}</option> )
                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full ' type="submit" value="Submit"></input>
                    </from>
                </div>
            </div>
        </>


    );
};

export default BookingModal;