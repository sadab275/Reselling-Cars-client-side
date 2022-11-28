import React from 'react';

const SubCategory = ({ subCategory, setModalDetails }) => {
    console.log(subCategory);
    const { Brand_name, img, Seller_name, Location, Original_Price, Resell_Price, Years_of_Use, Posted_Time, isVerified, category_id } = subCategory;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={img} alt="Shoes" /></figure>



            <div className="card-body">
                <h2 className="card-title font-bold text-info text-center">{Brand_name}</h2>
                <p className='text-lime-800 bg-orange-300'>Seller Name: {Seller_name}</p>
                <p className='text-lime-800 bg-emerald-400'>Location: {Location}</p>
                <p className='text-lime-800 bg-green-400'>Original Price: {Original_Price}</p>
                <p className='text-lime-800 bg-amber-300'>Resell_Price: {Resell_Price}</p>
                <p className='text-lime-800 bg-yellow-500'>Years_of_Use: {Years_of_Use}</p>
                <p className='text-lime-800 bg-red-50'>Posted_Time: {Posted_Time}</p>
                <p className='text-lime-800 bg-lime-400'>category_id: {category_id}</p>
                <div className="card-actions justify-end">
                    <label onClick={() => setModalDetails(subCategory)} htmlFor="Booking-modal" className="btn btn-info">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default SubCategory;