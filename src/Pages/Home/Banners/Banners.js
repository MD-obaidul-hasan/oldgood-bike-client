import React from 'react';
import img1 from '../../../assets/image/bajaj-pulsar-as150-img01.jpg';
import img2 from '../../../assets/image/Bajaj_Chetak_Electric_Scooter_black.webp';
import img3 from '../../../assets/image/hero-maestro-edge-125-price-bangladesh.png-400x400.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel w-full">

            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img1} alt='' className="w-full rounded-xl" />
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Buy & Sell <br />
                        Secondhand Bike
                        <br />
                        with switable price
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2">
                    <p className='text-xl text-white'>Here our consumers can get eassy recent model old but good quality bike . </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4">
                    <button className="btn btn-warning mr-5">Buy Now</button>
                    <button className="btn btn-outline btn-warning">Sell Now</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>


            <div id="slide2" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img2} alt='' className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Switable <br />
                        Price for <br />
                        OldGood Bike
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2">
                    <p className='text-xl text-white'>here our consumers can get eassy recent model old but good quality bike .</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4">
                    <button className="btn btn-warning mr-5">Buy Now</button>
                    <button className="btn btn-outline btn-warning">Sell Now</button>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img3} alt='' className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Switable <br />
                        Price for <br />
                        buy and selling old
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2">
                    <p className='text-xl text-white'>Here our consumers can get eassy recent model old but good quality bike .</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4">
                    <button className="btn btn-warning mr-5">Buy Now</button>
                    <button className="btn btn-outline btn-warning">Sell Now</button>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>


        </div>
    );
};

export default Banner;