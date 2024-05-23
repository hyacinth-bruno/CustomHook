import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../customHook/useFetch';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: productDetail, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div>
      {productDetail && (
        <>
          <h3>{productDetail.title}</h3>
          <img src={productDetail.image} alt={productDetail.title} width="150" />
          <p>Price: ${productDetail.price}</p>
          <p>{productDetail.description}</p>
          <p>Category: {productDetail.category}</p>
          <p>Rating: {productDetail.rating.rate} ({productDetail.rating.count} reviews)</p>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
