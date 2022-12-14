import React from 'react';
import image from '../../../assets/image/honda-motorcycle-cb-shine-381509737-puebz.webp'
import images from '../../../assets/image/hero-maestro-edge-125-price-bangladesh.png-400x400.jpg'
import PrimarryButton from '../../../Components/PrimarryButton/PrimarryButton';
import useTitle from '../../../hooks/useTitle';

const About = () => {
  useTitle('Home')
    return (
        <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row">
    <div className=' relative w-1/2' >
    <img src={image} alt='' className=" w-3/5 h-3/4 border-8 rounded-lg shadow-2xl" />
    <img src={images} alt='' className=" w-2/5 right-5 border-8 top-1/2 absolute rounded-lg shadow-2xl" />
    </div>
    
    <div className='w-1/2'>
        <p className='  text-2xl font-bold text-orange-600'>About Ourself</p>

      <h1 className=" my-5 text-5xl font-bold">We arrange <br/>
      old but good quality <br/>
      seconhand bike <br/> for our bikers </h1>
      <p className="py-6">Here our buyers , seller can get eassy recent model old but good quality bike . We try to give our consumer vest efforsts. so keep with us and chose your chose bike in short hand price. thanks you.</p>
      {/* <button className="btn btn-primary">Get More info</button> */}
      
      {/* <PrimarryButton> Get More info</PrimarryButton> */}
    </div>
  </div>
</div>
    //     <div>
    //     <div className='text-center mb-4'>
    //     <p className='text-2xl font-bold text-orange-600'> Contract</p>
    //     <h2 className='text-5xl font-semibold'> My Adreess</h2>
    //     <p className='my-5'>Contract with me, if you wan to book for appoitment.</p>
    // </div>
       
    //     <div className=" mr-25flex justify-center card w-4/4 bg-base-100 shadow-xl image-full">
             
    //     <figure><img src=
    //     {image} alt="Desser" /></figure>
    //     <div className="card-body">
    //       <h2 className="card-title text-center">Contract with Me</h2>
    //       <p className='text-center'>Name:Md.Obaidul Hasan <br/>
    //          Email:md.obaidulhasanlimu@gmail.com<br/>
    //          cell no:017..........<br/>
    //          Address:H-32/2, Road:6-b<br/>
    //                  Dhanmondi,dhaka.
    //       </p>
    //       <div className="card-actions justify-end">
    //         <button className="btn btn-primary">Contract Now</button>
    //       </div>
    //     </div>
    //   </div>
    //   </div>
    );
};

export default About;