import React from 'react';
import bike from '../../../assets/image/yamaha-symbols-png-logo-2.png'
import herobike from '../../../assets/image/bajaj-logo-bajaj-auto-logo-hd-png-download.png'
import bajajbike from '../../../assets/image/LOGO-honda-motor-company-honda-logo-honda-angle-text-logo.png'
import Catagori from './Catagori';

const Categories = () => {

    const catagoriesData = [
        {
            id: 1,

            name: 'Yahama Bike',
            description: 'YAHAMA secondhand but good quality bike are here. As like a new bike, some kilo ride. here can get letest anytypeof cc bike and beautyfull scooty.',
            img: bike
        },
        {
            id: 2,

            name: 'Honda Bike',
            description: 'HONDA secondhand but good quality bike are here. As like a new bike, some kilo ride. here can get letest anytypeof cc bike and beautyfull scooty.',
            img: bajajbike
        },
        {
            id: 3,

            name: 'Bajaj Bike',
            description: 'Bajaj secondhand but good quality bike are here. As like a new bike, some kilo ride. here can get letest anytypeof cc bike and beautyfull scooty.',
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