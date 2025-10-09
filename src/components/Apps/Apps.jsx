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
        <div>
            <h3 className='text-2xl font-black bold '>Trending Apps</h3>
            <Suspense fallback={<span className="loading loading-spinner text-neutral">Loading..</span>} >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                 {
                    data.map((singleApp)=><App key={singleApp.appId} singleApp={singleApp}></App>)
                  }
            </div> 
             
            </Suspense>
        </div>
    );
};

export default Apps;