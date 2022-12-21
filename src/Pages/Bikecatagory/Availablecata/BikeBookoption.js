import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contextx/AuthProvider';
import BookingModal from '../BookingModal/BookingModal';

const BikeBookoption = ({ bike, setModel }) => {
    const { name, location, resaleprice, orginalprice, year_of_use, seller_Name, image,  } = bike;
    // const { model } = model;
    const {user} = useContext(AuthContext);
    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const item = form.item_name.value;

        const booking ={
            name,
            email,
            price,
            item
        }
        console.log(booking);

        fetch('https://oldgood-bike-server-md-obaidul-hasan.vercel.app/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // setModel(null);
        toast.success('Booking Confirmed')
        // if(data.acknowledged){
        //     setBike(null);
        // toast.success('Booking Confirmed')
        // }
    })

    }
    
    return (
        <div className="card  shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">Model:{name}</h2>
                <h3 className="text-2xl text-primary font-bold text-center">Area:{location}</h3>
                <h2 className="text-2xl text-warning font-bold text-center">Resale price:{resaleprice}</h2>
                <h3 className="text-2xl text-accent font-bold text-center">Orginal price:{orginalprice}</h3>
                <h2 className="text-2xl text-error font-bold text-center">Total use:{year_of_use}</h2>
                <h2 className="text-2xl text-blue font-bold text-center">Seller:{seller_Name}</h2>
                {/* <p>{slots.length > 0 ? slots[0] : 'Try Another day'} post available</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} </p> */} 


                <div className="card-actions">
                    
                    <label htmlFor="modal" 
                    className="btn  items-center text-center "
                    // onClick={() => setModel( bike)}
                    >Book Now</label>


                    <input type="checkbox" id="modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold">{name}</h3>

                            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                            <input name="name" type="text" defaultValue={user?.displayName} disable placeholder="User Name" className="input w-full " />
                            <input name="email"type="email"  defaultValue={user?.email} disabled placeholder="Email" className="input w-full " />
                            <input name="item_name"type="text" placeholder="Item Name" className="input w-full " />
                            <input name="price"type="text" placeholder="Price" className="input w-full " />
                            <input name="phone"type="text" placeholder="Phone Number" className="input w-full " />
                            <input name="metting"type="text" placeholder="Metting Location" className="input w-full " />
                            <br />
                            <input className="btn btn-accent w-full " type="submit" value="Submit"></input>
                            </form>
                        </div>
                    </div>



                    {/* <label
                    
                    htmlFor="booking-modal"
                     className="btn btn-primary text-white"
                   
                     >Book Bike</label> */}
                </div>
            </div>
            
            
        </div>
    );
};

export default BikeBookoption;