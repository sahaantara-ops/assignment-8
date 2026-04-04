import React from "react";

const Description= ({ description }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h3 className="font-bold mb-4">Description</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Description;