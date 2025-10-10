import React, { use } from 'react';

const AllApps = ({AllAppsDataPromise}) => {
    const data =use(AllAppsDataPromise);
    console.log(data)
    return (
        <div>
            hello from all apps
        </div>
    );
};

export default AllApps;