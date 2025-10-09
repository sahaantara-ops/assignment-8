import React  from 'react';
import { Link } from 'react-router'
 
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const App = ({singleApp}) => {
    // const data = use(appsPromise);
    console.log(singleApp)
const {appCompanyName , appImage,appDescription,appRatingAvg,appDownloads,appId}= singleApp


    return (
        <Link to={`/AppDetails/${appId}`}>
            <div className="card bg-base-100 w-[348px] h-[435px] mt-10 shadow-sm ">
  <figure>
    <img className='h-[360px]'
      src={appImage}
      />
  </figure>
  <div className="card-body ">
    <h2 className="text-xl font-semibold">{appCompanyName}</h2>

    <p className="text-black">{appDescription}</p>
    <div className="w-[250px] h-[31px] flex justify-between">
    <a className="w-[auto] h-[auto]">{appDownloads}<FaCloudDownloadAlt /></a>
    <p className="w-[auto] h-[auto]">{appRatingAvg}<FaRegStar/></p>
   
      
    </div>
  </div>
  
</div>
        </Link>
      

    );
};

export default App;