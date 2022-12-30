import React from "react";
import { useProducts } from "../context/ProductContext";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const { state: { cart, loading, error } } = useProducts();


  let content;

  if (loading) {
    content = <p>Loading Cart</p>
  }
  if (error) {
    content = <p>Something went wrong</p>
  }
  if (!loading && !error) {
    content = cart.map(product => <CartProduct key={product.model} product={product} />)

  }
  if(!loading && !error && cart.length === 0) {
   content = <p>No Products to Show</p>
  }   


  return (
  <div className="grid grid-cols-3 gap-5" >
      {content}
  </div>
  );
};

export default Cart;
