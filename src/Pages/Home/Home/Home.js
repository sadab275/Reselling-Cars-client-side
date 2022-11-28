import React from 'react';
import Categories from '../../Categories/Categories';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            {/* className='mx-5' */}
            <Banner></Banner>
            <Categories></Categories>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;