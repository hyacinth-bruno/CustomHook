// import React from "react";

// export default function Products() {
//   return <div>Products</div>;
// }



import React from 'react';
import useFetch from '../../customHook/useFetch';

const Products = () => {
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  // Display only 3 products for brevity
  const productsToShow = data.slice(0, 3);

  return (
    <div>
      <h2>Product List</h2>
      {productsToShow.map((product) => (
        <div key={product.id}>
          <h3>Name: {product.title}</h3>
          <p>Status: {product.category}</p>
          <p>Region: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
