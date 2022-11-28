import React from 'react';
import error from '../../../src/assets/images/error.jfif'

const ErrorPage = () => {
    return (
        <div>
            <h2>This is an Error Route.</h2>
            <img className='w-full' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;