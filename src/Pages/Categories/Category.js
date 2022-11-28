import React from 'react';
import { Link } from 'react-router-dom';

const Category = (category) => {


    // const { data: allProducts = [], refetch, isLoading } = useQuery({
    //     queryKey: ['allProducts', date],
    //     queryFn: () => fetch(`https://reselling-car-server.vercel.app/allProducts?date=${date}`)
    //         .then(res => res.json())
    // });


    const { img, category_id, Category_name } = category.category;
    console.log(category_id);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={img} alt="Shoes" /></figure>



            <div className="card-body">
                <h2 className="card-title">{Category_name}</h2>
                <p></p>
                <div className="card-actions justify-end">
                    <Link to={`/allProducts/${category_id}`}><button className="btn btn-info">Show All Cars</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;
