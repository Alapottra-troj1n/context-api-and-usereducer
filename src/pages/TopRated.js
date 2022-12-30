import React from "react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

const TopRated = () => {
  const { state: { products, loading, error } } = useProducts();


  let content;

  if (loading) {
    content = <p>Loading Content</p>
  }
  if (error) {
    content = <p>Something went wrong</p>
  }
  if (!loading && !error) {
    content = products.filter(product=> product.rating >= 4).map(product => <ProductCard key={product.model} product={product} />)

  }
  if(!loading && !error && products.length === 0) {
    <p>No Products to Show</p>
  }   


  return (
  <div className="grid grid-cols-3 gap-5" >
      {content}
  </div>
  );
};

export default TopRated;
