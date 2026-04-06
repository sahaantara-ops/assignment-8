import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSort = (sortType) => {
    let sortedApps = [...apps];
    
    switch (sortType) {
      case "rating":
        sortedApps.sort((a, b) => b.ratingAvg - a.ratingAvg);
        break;
      case "downloads":
        sortedApps.sort((a, b) => b.downloads - a.downloads);
        break;
      case "reviews":
        sortedApps.sort((a, b) => b.reviews - a.reviews);
        break;
      case "size":
        sortedApps.sort((a, b) => a.size - b.size);
        break;
      default:
        break;
    }
    
    setApps(sortedApps);
  };

  useEffect(() => {
    fetch("/newAppData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch apps:", err);
        setLoading(false);
      });
  }, []);

  



  if (loading) {
    return <div className="text-center mt-10">Loading apps...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">
       Our All Apps
      </h1>
      <h3 className="text-lg text-center text-gray-400 mb-8">
        Explore All Apps On The Market Developed By Us.We Code For Millions
      </h3>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
  
  {/* Total Apps */}
  <p className="text-gray-500">
    Total Apps: {apps.length}
  </p>

  {/* Sort Dropdown */}
  <select
    onChange={(e) => handleSort(e.target.value)}
    className="border rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none"
  >
    <option value="">Sort By</option>
    <option value="rating">Rating (High → Low)</option>
    <option value="downloads">Downloads (High → Low)</option>
    <option value="reviews">Reviews (High → Low)</option>
    <option value="size">Size (Low → High)</option>
  </select>

</div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
       {apps.map((app) => (
  <Link key={app.id} to={`/apps/${app.id}`}>
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 cursor-pointer">
      
      {/* Image */}
      <img
        src={app.image}
        alt={app.title}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />

      {/* Title */}
      <h2 className="text-lg font-semibold">{app.title}</h2>

      {/* Company */}
      <p className="text-sm text-gray-500 mb-2">
        {app.companyName}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
        {app.description}
      </p>

      {/* Info */}
      <div className="flex justify-between text-sm mt-2">
        <span>⭐ {app.ratingAvg}</span>
        <span>⬇ {app.downloads}</span>
      </div>

    </div>
  </Link>
))}

      </div>
    </div>
  );
};

export default Apps;