import React from 'react';
import { Star } from 'lucide-react';
import { Download } from 'lucide-react';

const AppDetails = ({featuredData}) => {
  const {image,title,companyName,description,ratingAvg,downloads} = featuredData;
  return (
    <div className="card bg-base-100 hover:scale-105 shadow-sm">
  <figure>
    <img
      src={image}
      alt="apps" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-gray-700"> {title}</h2>
    <h3 className='text-lg font-semibold'>{companyName}</h3>
     <p  className="text-accent ">{description}</p>  
      
    
    
    <div className="card-actions flex justify-between ">
      <div className="badge badge-outline text-amber-500"><Star />{ratingAvg}</div>
      <div className="badge badge-outline text-emerald-400">  <Download />{downloads}</div>
    </div>
  </div>
</div>
  );
};

export default AppDetails;