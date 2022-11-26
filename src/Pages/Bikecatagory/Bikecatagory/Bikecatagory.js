import React, { useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import Availablecata from '../Availablecata/Availablecata';
import BikecaBanner from '../BikecaBanner/BikecaBanner';

const Bikecatagory = () => {
    useTitle('Catagory')
    const [selectedDate,setSelectedDate] = useState(new Date());

    return (
        <div>
            <h2>hi</h2>
            <BikecaBanner 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></BikecaBanner>
            <Availablecata
             selectedDate={selectedDate}
             ></Availablecata>
        </div>
    );
};

export default Bikecatagory;