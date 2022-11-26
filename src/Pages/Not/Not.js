import React from 'react';
import Image from '../../assets/image/not found.webp'
import Images from '../../assets/image/11-404-not-found-Doofinder.jpg'
import PrimarryButton from '../../Components/PrimarryButton/PrimarryButton';

const Not = () => {
    return (
        <section className='mt-32' 
        style={{
            background: `url(${Images})`,
            backgroundSize: 'cover'
        }}> 
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Image} alt="" className=" -mt-32 hiddne lg-block  lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h4 className='text-6xl text-red-600 font-bold'>404 !</h4>
                        <h1 className=" text-gray text-4xl font-bold">Page Not Found</h1>
                        <p className=" text-gray py-6">This Page are not found in this website.So please Search aaccurate page.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                        {/* <PrimarryButton> Catagory Details</PrimarryButton> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Not;