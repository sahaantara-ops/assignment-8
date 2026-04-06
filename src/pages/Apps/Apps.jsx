import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Make sure it's react-router-dom
import Loading from "../../components/Loading/Loading";
const Apps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  // Convert downloads string like "50K" -> number
  const parseDownloads = (downloads) => {
    if (!downloads) return 0;
    let num = parseFloat(downloads.replace(/,/g, ""));
    if (downloads.toUpperCase().includes("K")) num *= 1000;
    if (downloads.toUpperCase().includes("M")) num *= 1000000;
    return num;
  };

  const handleSort = (sortType) => {
    const sortedApps = [...apps];

    switch (sortType) {
      case "rating":
        sortedApps.sort((a, b) => b.ratingAvg - a.ratingAvg);
        break;
      case "downloads":
        sortedApps.sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
        break;
      case "reviews":
        sortedApps.sort((a, b) => b.reviews - a.reviews);
        break;
      case "size":
        sortedApps.sort((a, b) => a.size - b.size); // assuming size is numeric
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
    return <Loading />; // show loading animation
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Our All Apps</h1>
      <h3 className="text-lg text-center text-gray-400 mb-8">
        Explore All Apps On The Market Developed By Us. We Code For Millions
      </h3>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <p className="text-gray-500">Total Apps: {apps.length}</p>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {apps.map((app) => (
          <Link key={app.id} to={`/apps/${app.id}`}>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 cursor-pointer">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold">{app.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{app.companyName}</p>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{app.description}</p>
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