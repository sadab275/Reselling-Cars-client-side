import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleFromAll from './SingleFromAll';

const AllAvailableProdcuts = () => {


    const { data: datas = [] } = useQuery({
        queryKey: ['allProducts'],
        queryFn: () => fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
    });

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                datas.map(single =>
                    <SingleFromAll key={single._id}
                        single={single}></SingleFromAll>)
            }
        </div>
    );
};

export default AllAvailableProdcuts;