import React from "react";

const HeaderSection = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded shadow mb-6 gap-6">
      <img src={product.image} alt={product.title} className="h-24 w-24 md:h-32 md:w-32" />
      <div className="flex-1">
        <h2 className="text-xl md:text-2xl font-bold">{product.title}</h2>
        <p className="text-sm text-gray-500">
          Developed by <span className="text-purple-500">{product.developer}</span>
        </p>
        <div className="flex gap-6 mt-2">
          <div className="text-center">
            <p className="font-bold">{product.downloads}</p>
            <span className="text-gray-500 text-sm">Downloads</span>
          </div>
          <div className="text-center">
            <p className="font-bold">{product.rating}</p>
            <span className="text-gray-500 text-sm">Average Ratings</span>
          </div>
          <div className="text-center">
            <p className="font-bold">{product.reviews}</p>
            <span className="text-gray-500 text-sm">Total Reviews</span>
          </div>
        </div>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
          Install Now ({product.size})
        </button>
      </div>
    </div>
  );
};

export default HeaderSection;