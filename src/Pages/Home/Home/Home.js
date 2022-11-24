import React from 'react';
import About from '../About/About';
import Advertiseitem from '../Advertiseitem/Advertiseitem';
import Banner from '../Banner/Banner';
import Banners from '../Banners/Banners'
import Catalog from '../Catalog/Catalog';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banners></Banners>
            <Banner></Banner>
            <Advertiseitem></Advertiseitem>
            <About></About>
            <Categories></Categories>
            <Catalog></Catalog>
            

        </div>
    );
};

export default Home;