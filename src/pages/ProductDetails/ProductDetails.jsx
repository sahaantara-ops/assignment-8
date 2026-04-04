import React, { useEffect, useState } from "react";
import HeaderSection from "../../components/Header Section/HeaderSection";
import RatingsChart from "../../components/RatingChart/RatingChart";
import Description from "../../components/Description/Description";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the JSON file from public folder
    fetch("/newAppData.JSON")
      .then((res) => res.json())
      .then((data) => {
        // Example: pick the first product
        setProduct(data[0]);
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <HeaderSection product={product} />
      <RatingsChart ratings={product.ratings} />
      <Description description={product.description} />
    </div>
  );
};

export default ProductDetail;