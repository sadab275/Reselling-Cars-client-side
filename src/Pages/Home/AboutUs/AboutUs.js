import React from 'react';
import aboutus from '../../../assets/images/Aboutus.jpeg'

const AboutUs = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${aboutus})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-success  font-bold">About Us</h1>
                    <p className="mb-5 font-bold text-3xl text-amber-50">We provide good conditioned car with a very cheap price. All of the cars have updated documents.</p>
                    <button className="btn btn-info">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;