
import { ResponsiveContainer ,BarChart,CartesianGrid, XAxis,YAxis,Tooltip,Bar,}
 from "recharts";

const RatingChart = ({ product }) => {
  if (!product || !product.ratingBreakdown) {
    return <p>No ratings available</p>;
  }

  const breakdown = product.ratingBreakdown;

  const data = [
    { name: "5★", value: breakdown["5"] },
    { name: "4★", value: breakdown["4"] },
    { name: "3★", value: breakdown["3"] },
    { name: "2★", value: breakdown["2"] },
    { name: "1★", value: breakdown["1"] },
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