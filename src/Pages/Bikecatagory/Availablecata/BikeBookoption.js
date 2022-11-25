import React from 'react';

const BikeBookoption = ({ catagoriesBike, setBike }) => {
    const { name, location,resaleprice,orginalprice,year_of_use,seller_Name, image, slots } = catagoriesBike;
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
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'} post available</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} </p>
                <div className="card-actions">
                    {/* <button className="btn btn-primary text-white">Book Bike</button> */}
                    <label
                    disable={slots.length === 0 }
                    htmlFor="booking-modal"
                     className="btn btn-primary text-white"
                     onClick={() => setBike(catagoriesBike)}
                     >Book Bike</label>
                </div>
            </div>
        </div>
    );
};

export default BikeBookoption;