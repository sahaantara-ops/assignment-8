import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../Utilities/AddtoDB';
import App from '../../pages/App/App';

const Readlist = () => {
    const[Readlist,setReadList]=useState([])
     const [sort, setSort] = useState("");
    const data = useLoaderData();
    console.log(data)

    useEffect(() => {
        const storedAppdata = getStoredApp();
        const ConvertedstoredAppdata=storedAppdata.map(id=>parseInt(id))
        const myReadList=data.filter(app=>ConvertedstoredAppdata.includes(app.appId))
        setReadList(myReadList)
    },[])

   const handleSort = (type) => {
     setSort(type)
         if (type === "downloads") {
            const sortedByDownloads = [...Readlist].sort((a, b) => a.appDownloads - b.appDownloads);
            setReadList(sortedByDownloads)
            console.log(sortedByDownloads)
        }
        if (type === "ratings") {
            const sortedByrating = [...Readlist].sort((a, b) => a.appRatingAvg - b.appRatingAvg);
            setReadList(sortedByrating)
        }


   }


    return (
        <div>
            <h2 className='text-2xl font-black '>Your installed Apps</h2>
            <p className='text-gray-500 '>Explore All Trending Apps On the market developed by us</p>
             <div className='flex justify-between'>
            <h2>{Readlist.length}</h2>
            <details className="dropdown">
             <summary className="btn m-1">sort by : {sort?sort:""}</summary>
             <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a onClick={()=>handleSort("downloads")}>Downloads</a></li>
              <li><a a onClick={()=>handleSort("ratings")}>Ratings</a></li>
             </ul>
              </details>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
            {
                Readlist.map(a => <App key={a.appId} singleApp={a}></App>)
             }
             </div>
        
        </div>
    );
};

export default Readlist;