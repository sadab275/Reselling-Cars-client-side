import React from 'react';
import banner from '../../../assets/images/banner.jfif'

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl text-success font-bold">Looking to buy an affordable Car?</h1>
                    <p className="text-text-lime-900 py-6">If you are looking for second hand cars with the minimum price, you are in the right place. </p>
                    <button className="btn btn-info">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;