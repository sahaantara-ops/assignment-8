
import React from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';

const AppDetails = () => {
    const id = useParams();
    const appId = parseInt(id);
    const data=useLoaderData();
      const singleAppData = data.find(app => app.appId === appId);
      const {appName }= singleAppData
   
    return (
        <div className= 'mx-auto'>
        <div className='flex'>
        <div  className='w=[350px] h-[350px]'>
        <img  src='../../assets/demo-app (2).webp'></img>
        </div>
        <div>
        <h5>{appName}</h5>
        <p>Developed by <span >productive.io</span></p>
        </div>
        <div>
         <img src='../../assets/icon-downloads.png'></img>
         <p>Downloads</p>
         <h1>8M</h1>
         </div>
         <div>
        <img src='../../assets/icon-ratings.png'></img>
        <p>Average Ratings</p>
        <h1>4.9</h1>
        </div>
        <div>
            <img src='../../assets/icon-review.png'></img>
            <p>Total reviews</p>
            <h1>64k</h1>
        </div>
        </div>
        </div>
    );
};

export default AppDetails;