import React, { useState } from 'react';
import Availablecata from '../Availablecata/Availablecata';
import BikecaBanner from '../BikecaBanner/BikecaBanner';

const Bikecatagory = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());

    return (
        <div>
            <h2>hi</h2>
            <BikecaBanner 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}></BikecaBanner>
            <Availablecata
             selectedDate={selectedDate}
             ></Availablecata>
        </div>
    );
};

export default Bikecatagory;