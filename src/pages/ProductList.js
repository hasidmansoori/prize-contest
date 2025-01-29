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
      <ul style={{ 
  listStyle: 'none', 
  padding: 0, 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  gap: '20px' 
}}>
  {products.map((product) => (
    <li 
      key={product.id} 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        background: '#fff', 
        borderRadius: '15px', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
        padding: '15px',
        maxWidth: '800px', 
        width: '100%', 
        marginBottom: '20px' 
      }}
    >
      {/* Left Side: Image */}
      <div style={{ flex: '1' }}>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          style={{ width: '200px', height: '150px', borderRadius: '10px' }} 
        />
      </div>

      {/* Right Side: Content */}
      <div style={{ flex: '2', padding: '0 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '22px', margin: '0', color: '#000' }}>
          <span style={{ fontWeight: 'bold', color: 'red' }}>Win</span> 1 Kilogram of Gold
        </h2>
        <p style={{ fontSize: '12px', color: '#999' }}>
          Draw Date: 24 April, 2025 or earlier based on the time passed.
        </p>

        {/* Centered Price & Button Section */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '10px', 
          marginTop: '10px' 
        }}>
          <div 
            style={{ 
              background: '#FFD700', 
              padding: '10px 15px', 
              borderRadius: '20px', 
              fontWeight: 'bold', 
              fontSize: '14px'
            }}
          >
            Buy AED7
          </div>
          <button 
            onClick={() => handlePurchase(product.id)}
            style={{
              background: 'linear-gradient(to right, #6a11cb, #2575fc)',
              color: '#fff',
              padding: '10px 15px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  ))}
</ul>


    </div>
  );
};

export default ProductList;
