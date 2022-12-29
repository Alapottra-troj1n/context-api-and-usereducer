import React from "react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";


const Home = () => {
  const { state: { products, loading} } = useProducts();


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {loading && 'loading...........'}
      {
        products.map(product => <ProductCard product={product}/> )
      }
    </div>
  );
};

export default Home;
