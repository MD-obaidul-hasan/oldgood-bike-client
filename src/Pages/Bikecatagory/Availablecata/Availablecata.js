import React from 'react';
import {format} from 'date-fns'

const Availablecata = ( {selectedDate}) => {
    return (
        <section className='mt-16'>
            <p className='text-center text-secondary font-bold'>You have selected  {format(selectedDate, 'PP')}

            </p>
        </section>
    );
};

export default Availablecata;