import React from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const WishList = () => {
    const { state: { wishlist, loading, error } } = useProducts();


    let content;
  
    if (loading) {
      content = <p>Loading Content</p>
    }
    if (error) {
      content = <p>Something went wrong</p>
    }
    if (!loading && !error) {
      content =  wishlist.map(product => <ProductCard key={product.model} product={product} />)
  
    }
    if(!loading && !error &&  wishlist.length === 0) {
      content = <p>No Wishlist to Show</p>
    }   
  
  
    return (
    <div className="grid grid-cols-3 gap-5" >
        {content}
    </div>
    );
};

export default WishList;