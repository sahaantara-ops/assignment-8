import React, { Suspense, useState } from 'react';

const AllAppsData = () => {
    const [AllApps] = useState([]);
 
    const AllAppsDataPromise =fetch('./appData2.json').then(res=>res.json())
    return (
        <div>
            <h2 className='text-1xl'>Books</h2>
            <Suspense fallback={<span>loading....</span>}>
             <AllAppsData AllAppsDataPromise={AllAppsDataPromise}></AllAppsData>
            </Suspense>
        </div>
    );
};

export default AllAppsData;