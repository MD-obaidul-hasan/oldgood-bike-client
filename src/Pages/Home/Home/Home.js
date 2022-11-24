import React from 'react';
import Advertiseitem from '../Advertiseitem/Advertiseitem';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Advertiseitem></Advertiseitem>
            <Categories></Categories>

        </div>
    );
};

export default Home;