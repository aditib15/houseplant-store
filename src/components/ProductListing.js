import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
const products = [
  { id: 1, name: 'Snake Plant', price: 15, thumbnail: `${process.env.PUBLIC_URL}/images/snakeplant.png` },
  { id: 2, name: 'Aloe Vera', price: 12, thumbnail: `${process.env.PUBLIC_URL}/images/aloevera.png` },
  { id: 3, name: 'Peace Lily', price: 18, thumbnail: `${process.env.PUBLIC_URL}/images/lily.png` },
];
const ProductListing = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    alert(`${product.name} has been added to the cart!`);  
  };

  return (
    <div className="products">
      {products.map((plant) => (
        <div key={plant.id} className="plant-card">
          <img src={plant.thumbnail} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
