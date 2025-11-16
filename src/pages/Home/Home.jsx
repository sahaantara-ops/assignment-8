import React from 'react';
import Banner from '../../components/Banner/Banner';

import { Link } from 'react-router';
import AppDetails from '../../components/AppDetails/AppDetails';
import useProducts from '../../components/Hooks/useProducts';


const Home = () => {
    
    const {products} = useProducts();
    console.log(products);
     const featuredData = products.slice(0, 6)
    console.log(featuredData)
    return (
        <div>
            <Banner></Banner>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {

                featuredData.map(featuredData =>(
                    <AppDetails key={featuredData.id} featuredData={featuredData}></AppDetails>
                ))
              }
            </section>
            <br/>
            <div>
            <Link  className='btn btn-outline items-center ml-120 bg-amber-500' to='/apps'>Show More</Link>
            </div>
            <br/>
            
        </div>
    );
};

export default Home;