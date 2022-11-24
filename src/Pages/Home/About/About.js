import React from 'react';
import image from '../../../assets/image/honda-motorcycle-cb-shine-381509737-puebz.webp'
import images from '../../../assets/image/bajaj-pulsar-as150-img01.jpg'

const About = () => {
    return (
        <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row">
    <div className=' relative w-1/2' >
    <img src={image} alt='' className=" w-3/5 h-3/4 border-8 rounded-lg shadow-2xl" />
    <img src={images} alt='' className=" w-2/5 right-5 border-8 top-1/2 absolute rounded-lg shadow-2xl" />
    </div>
    
    <div className='w-1/2'>
        <p className='  text-2xl font-bold text-orange-600'>About Myself</p>

      <h1 className=" my-5 text-5xl font-bold">I am quilified <br/>
      & of exprience <br/> in this field</h1>
      <p className="py-6">Event decoration need to mange this event arrage good looking. i am a expert for decoration any typr of event decorate.</p>
      <button className="btn btn-primary">Get More info</button>
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