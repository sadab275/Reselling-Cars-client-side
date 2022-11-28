import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from '../BookModal/BookModal';
import SubCategory from './SubCategory';

const SubCategories = () => {
    const data = useLoaderData();
    const [modaldetails, setModalDetails] = useState(null);
    console.log("Eta brand name ", data);
    return (
        <div>
            {data.length}

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map(subCategory =>
                        <SubCategory
                            key={subCategory.Category_id}
                            subCategory={subCategory}
                            setModalDetails={setModalDetails}
                        ></SubCategory>)
                }
            </div>
            {modaldetails &&
                <BookModal
                    modaldetails={modaldetails}
                    setModalDetails={setModalDetails}
                ></BookModal>}
        </div>
    );
};

export default SubCategories;