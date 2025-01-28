import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "1",
    name: "Mobile Phone",
    description: "Latest smartphone with amazing features.",
    price: 5000,
    imageUrl: "https://locatify.com/wp-content/uploads/2020/09/IMG_3229_iphone6_spacegrey_portrait.png", // Static image URL
  },
  {
    id: "2",
    name: "Tablet",
    description: "High-performance tablet for work and play.",
    price: 3000,
    imageUrl: "https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg", // Static image URL
  },
  {
    id: "3",
    name: "Smart TV",
    description: "Ultra HD Smart TV with incredible sound.",
    price: 8000,
    imageUrl: "https://electronicparadise.in/cdn/shop/files/71D-2oAb5JL._SL1500.jpg?crop=center&height=1200&v=1707478816&width=1200", // Static image URL
  },
];

const ProductList = ({ language }) => {
  const navigate = useNavigate(); // Correctly using the 'navigate' function from useNavigate()

  const handlePurchase = (productId) => {
    // Use navigate() to redirect to the checkout page
    navigate(`/checkout/${productId}`);
  };

  return (
    <div>
      <h1>{language === "en" ? "Product List" : "قائمة المنتجات"}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              style={{ width: '200px', height: '200px' }} 
            />
            <p>{product.name}</p>
            <button onClick={() => handlePurchase(product.id)}>
              {language === "en" ? "Buy Now" : "اشترِ الآن"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
