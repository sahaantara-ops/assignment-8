import React from "react";
import { ResponsiveContainer ,BarChart,CartesianGrid, XAxis,YAxis,Tooltip,Bar,} from "recharts";
const RatingChart = ({ ratingAvg }) => {
  if (!ratingAvg) {
    return <p>No ratings available</p>;
  }

  // Fake distribution based on average
  const data = [
    { name: "5★", value: Math.round(ratingAvg * 20) },
    { name: "4★", value: Math.round(ratingAvg * 15) },
    { name: "3★", value: Math.round(ratingAvg * 10) },
    { name: "2★", value: Math.round(ratingAvg * 5) },
    { name: "1★", value: Math.round(ratingAvg * 2) },
  ];

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h3 className="font-bold mb-4">Ratings Overview</h3>

      <div className="w-full h-72">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default RatingChart;