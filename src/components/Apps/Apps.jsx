import React, { Suspense,   } from 'react';
import App from '../../pages/App/App';

const Apps = ({data}) => {
// const [Apps,setApps] = useState([]);
//      useEffect(() => {
//         fetch("appData.json")
//         .then(res => res.json())
//         .then(data =>{
//             setApps(data)
//         })
//      },[])

// const appsPromise =fetch('/public/appData.json').then(res => res.json())


    return (
        <div className='mt-10'>
            <h3 className='text-2xl font-black bold '>Trending Apps</h3>
            <p className='text-gray-400'>Explore all the Trending app developed by us</p>
            <Suspense fallback={<span className="loading loading-spinner text-neutral">Loading..</span>} >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                 {
                    data.map((singleApp)=><App key={singleApp.appId} singleApp={singleApp}></App>)
                  }
                <button className='text-white bg-purple-500 w-[145px] h-[48px] ml-120 rounded-2xl'>Show all</button>
            </div> 
             
            </Suspense>
        </div>
    );
};

export default Apps;