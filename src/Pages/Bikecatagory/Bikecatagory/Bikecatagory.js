import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Availablecata from '../Availablecata/Availablecata';
import BikeBookoption from '../Availablecata/BikeBookoption';
import BikecaBanner from '../BikecaBanner/BikecaBanner';

const Bikecatagory = () => {
    useTitle('Catagory')
    const { id } = useParams()
    const [bikes, setbikes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bikes?catagory=${id}`)
            .then(res => res.json())
            .then(data =>{
                setbikes(data)
                console.log(data)
            })

                
    }, [])
    return (
        <div>
            {/* <h2></h2>
            <BikecaBanner 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></BikecaBanner>
            <Availablecata
             selectedDate={selectedDate}
             ></Availablecata> */}
            {
                bikes?.map(bike =>
                    <BikeBookoption key={bikes._id} bike={bike}> </BikeBookoption>)
            }
        </div>

    );
};

export default Bikecatagory;