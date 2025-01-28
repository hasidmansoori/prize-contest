import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const productData = {
    "1": {
      name: "Mobile Phone",
      description: "Latest smartphone with amazing features.",
      price: 5000,
    },
    "2": {
      name: "Tablet",
      description: "High-performance tablet for work and play.",
      price: 3000,
    },
    "3": {
      name: "Smart TV",
      description: "Ultra HD Smart TV with incredible sound.",
      price: 8000,
    },
  };

const Checkout = ({ language }) => {
  const { productId } = useParams();
  const history = useNavigate();
//   const [product, setProduct] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const product = productData[productId];

//   useEffect(() => {
//     // Fetch product details
//     axios.get(`http://localhost:5000/api/products/${productId}`)
//       .then((response) => {
//         setProduct(response.data);
//       })
//       .catch((error) => console.log(error));
//   }, [productId]);

//   const handlePayment = () => {
//     // Send payment and enroll user
//     axios.post("http://localhost:5000/api/purchase", {
//       productId,
//       paymentDetails,
//     }).then((response) => {
//       // On successful purchase, show confirmation
//       alert(language === "en" ? "Purchase successful!" : "تم الشراء بنجاح!");
//       history.push("/winners");
//     }).catch((error) => {
//       alert(language === "en" ? "Payment failed!" : "فشل الدفع!");
//     });
//   };

const handlePayment = () => {
    // Simulate payment processing and enroll user into contest
    alert(language === "en" ? "Purchase successful!" : "تم الشراء بنجاح!");
    history.push("/winners");
  };

  return product ? (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <input
        type="text"
        placeholder={language === "en" ? "Card Number" : "رقم البطاقة"}
        onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
      />
      <button onClick={handlePayment}>
        {language === "en" ? "Proceed to Payment" : "إتمام الدفع"}
      </button>
    </div>
  ) : null;
};

export default Checkout;
