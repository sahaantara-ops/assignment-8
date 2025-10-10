import React from 'react';
import errorImage from '../../assets/error-404.png'
const ErrorPage = () => {
    return (
        
        <div className='w-[auto] max-w-[auto] '>
            <img  className= 'h-[500] w-[500] justify-center'src={errorImage}></img>
           <h2 className='text-2xl text-indigo-800'> Oops, Page not found</h2>
           <p className='text-gray-600'>The page you are looking not available</p>
          <button className="btn btn-primary bg-fuchsia-800">Go Back</button>
        </div>
    );
};

export default ErrorPage;