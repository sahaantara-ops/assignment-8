import React from "react";

const RatingsChart = ({ ratings }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h3 className="font-bold mb-4">Ratings</h3>
      {ratings.map((r, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          <span className="w-12">{r.stars} star</span>
          <div className="flex-1 h-4 bg-gray-200 rounded">
            <div
              className="h-4 bg-orange-500 rounded"
              style={{ width: `${r.count / r.maxCount * 100}%` }}
            ></div>
          </div>
          <span className="w-12 text-right">{r.count}</span>
        </div>
      ))}
    </div>
  );
};

export default RatingsChart;