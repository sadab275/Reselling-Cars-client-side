import React from 'react';

const SingleFromAll = (single) => {

    const { img, category_id, Brand_name, Seller_name, Location, Original_Price, Resell_Price, Years_of_Use, Posted_Time, User_State } = single.single;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{Brand_name}</h2>
                <p>Seller:{Seller_name}</p>
                <p>Location: {Location}</p>
                <p>Original Price: {Original_Price}</p>
                <p>Resell Price: {Resell_Price}</p>
                <p>Using Period: {Years_of_Use}</p>
                <p>Posted On: {Posted_Time}</p>
            </div>
            <div className="card-actions justify-center">
                <button className="btn btn-primary">See all available Cars</button>
            </div>
        </div>
    );
};

export default SingleFromAll;