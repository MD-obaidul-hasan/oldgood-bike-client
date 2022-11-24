import React from 'react';
import Image from '../../../assets/image/back.jpg'
import Images from '../../../assets/image/white-background.webp'
import PrimarryButton from '../../../Components/PrimarryButton/PrimarryButton';

const Catalog = () => {
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
                        <h4 className='text-lg text-primary font-bold'>CATALOG</h4>
                        <h1 className=" text-gray text-4xl font-bold">Catalog are here</h1>
                        <p className=" text-gray py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                        <PrimarryButton> Catagory Details</PrimarryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;