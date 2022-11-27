import React from 'react';
import { Link } from 'react-router-dom';
import bike from '../../../assets/image/1569829523.jpg'
import PrimarryButton from '../../../Components/PrimarryButton/PrimarryButton';

const Banner = () => {
    return (
        <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bike} className=" rounded-lg w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">OldGood Bike are here</h1>
                    <p className="py-6">Here our buyers , seller can get eassy recent model old but good quality bike . We try to give our consumer vest efforsts.</p>
                   {/* <PrimarryButton>Get start</PrimarryButton> */}
                   <Link to={`/`}><PrimarryButton>Get start</PrimarryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;