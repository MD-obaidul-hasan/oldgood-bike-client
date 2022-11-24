import React from 'react';
import bike from '../../../assets/image/yamaha-xmax-first1.jpg'
import herobike from '../../../assets/image/hero-maestro-edge-125-price-bangladesh.png-400x400.jpg'
import bajajbike from '../../../assets/image/Bajaj_Chetak_Electric_Scooter_black.webp'
import Catagori from './Catagori';

const Categories = () => {

    const catagoriesData = [
        {
            id: 1,

            name: 'yahama bike',
            description: 'this iksss',
            img: bike
        },
        {
            id: 2,

            name: 'yahama bike',
            description: 'this iksss',
            img: bajajbike
        },
        {
            id: 3,

            name: 'yahama bike',
            description: 'this iksss',
            img: herobike
        }
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className=' text-xl font-bold text-primary uppercase'>Our OldGood Bike Catagories</h3>
                <h2 className='text-3xl'>Our all OldGood Bike are here</h2>
            </div>
            <div className=' grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    catagoriesData.map(catagori => <Catagori
                        key={catagori.id}
                        catagori={catagori}>

                    </Catagori>)
                }

            </div>
        </div>
    );
};

export default Categories;