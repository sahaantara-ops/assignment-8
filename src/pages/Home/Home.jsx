import React from 'react';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router';
import AppDetails from '../../components/AppDetails/AppDetails';
import useProducts from '../../components/Hooks/useProducts';


const Home = () => {
  const { products = [] } = useProducts();
  console.log(products);

  // ✅ Show 8 apps (requirement)
  const featuredData = products.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Banner />

      {/* Top Apps Section */}
      <h2 className="text-2xl font-bold text-center my-6">
        This All Our Top Apps
      </h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredData.map((item) => (
          <AppDetails key={item.id} featuredData={item} />
        ))}
      </section>

      {/* Show More Button */}
      
      <div className=" mt-10">
              <Link
          to="/apps"
          className="px-6 py-2 bg-amber-500 items-center ml-130 text-white rounded-lg hover:bg-amber-600 transition"
         >
        Show All
         </Link>
         
      </div>
 
          
        
     
        
     
    </div>
  );
};

export default Home;