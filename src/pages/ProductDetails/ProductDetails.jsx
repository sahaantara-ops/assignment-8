import React, { useEffect, useState } from "react";
import HeaderSection from "../../components/Header Section/HeaderSection";
import RatingChart from "../../components/RatingChart/RatingChart";
import Description from "../../components/Description/Description";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
 
useEffect(() => {
  fetch("/newAppData.json")
    .then((res) => res.json())
    .then((data) => {
      const selectedProduct = data.find(
        (item) => item.id === parseInt(id)
      );
      setProduct(selectedProduct);
    })
    .catch((err) => console.error("Error loading JSON:", err));
}, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <HeaderSection product={product} />
      <RatingChart product={product} />
      <Description description={product.description} />
    </div>
  );
};

export default ProductDetail;