import React from 'react';
// import PrimarryButton from '../../../Components/PrimarryButton/PrimarryButton';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} =slide;
    return (
        <div id={`slide1${id}`} className="carousel-item relative w-full">
    <div className='carousel-img'>
    <img src={image} alt='' className="w-full" />
    </div>
   
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
      <h1 className='text-6xl font-bold text-white'>
            Switable <br/>
            Price for Event<br/>
            Decoration
      </h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2">
      <p className='text-xl text-white'>ere our buyers , seller can get eassy recent model old but good quality bike . </p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4">
    <button className="btn btn-warning mr-5">Buy Now</button>
    {/* <PrimarryButton> Buy Now</PrimarryButton>
    <PrimarryButton> Sell Now</PrimarryButton> */}
    
    <button className="btn btn-outline btn-warning">Sell Now</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
  </div> 
    );
};

export default BannerItem;