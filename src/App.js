import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Checkout from "./pages/Checkout";
import Winners from "./pages/Winners";
import './App.css';

function App() {
  const [language, setLanguage] = useState("en"); // English by default

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <button onClick={() => handleLanguageChange("en")}>English</button>
          <button onClick={() => handleLanguageChange("ar")}>Arabic</button>
        </header>

        <Routes>
          <Route path="/" element={<ProductList language={language} />} />
          <Route path="/checkout/:productId" element={<Checkout language={language} />} />
          <Route path="/winners" element={<Winners language={language} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
