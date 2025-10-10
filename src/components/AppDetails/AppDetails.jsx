
import React from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import { FaStar } from "react-icons/fa6";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { MdReviews } from "react-icons/md";
import { addToStoreDB } from '../Utilities/AddtoDB';




const AppDetails = () => {
    const {id} = useParams();
    const appId = parseInt(id);
    const data=useLoaderData();
      const singleAppData = data.find(app => app.appId === appId);
      console.log(singleAppData)
      
      
      const {appTitle ,appCompanyName,appImage ,appReviews,appRatingAvg,appDownloads}= singleAppData || {};
   
    const handleMarkasRead= id => {
      addToStoreDB(id)

    }

    return (
        <div className='flex w-[full] h-[350px] gap-20 mt-13'>   
            <div> 
            <img className='w=[500px] h-[300px]' src={appImage}></img>
            </div>
            <div className='mt-5'> 
                <div className=' h-[79px]'>
                <h5 className='text-2xl font-black bold'>{appTitle}</h5> 
                <p className='text-lg font-gray'><span className='text-gray-400  font-small'>Developed By:{appCompanyName}</span></p>
                </div>
                <div className='border-t-1 border-dashed w-full'></div>
                <div className='flex gap-4 justify-center mt-2'>
                <div> 
                    <p>{appDownloads}<PiDownloadSimpleLight /></p>
                    </div>
                    <div> 
                    <p>{appRatingAvg} <FaStar /></p> 
                    </div>
                    <div>  
                    <p>{appReviews} <MdReviews /></p> 
                    </div>
                    
                 </div>
                 <div>
                   <button onClick={()=>handleMarkasRead(id)}className="btn btn-primary mt-5 bg-emerald-600">Install Now</button>
                   </div>
            </div>
             
            </div>
            
            
            
    );
};

export default AppDetails;