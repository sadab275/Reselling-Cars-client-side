import React, { useEffect, useState } from 'react';
import Category from './Category';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';



const Categories = () => {



    const { data: categoriesall = [], isLoading } = useQuery({
        queryKey: ['allCategories'],
        queryFn: () => fetch('https://reselling-car-server.vercel.app/allCategories')
            .then(res => res.json())
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='my-6 text-center text-4xl text-success  font-bold'>
                All Categories: {categoriesall.length}
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categoriesall.map(category =>
                        <Category
                            key={category.Category_id}
                            category={category}
                        ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;