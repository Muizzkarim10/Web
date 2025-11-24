import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1200,
      description: "A powerful laptop for work and gaming.",
    },
    {
      id: 2,
      name: "Headphones",
      price: 150,
      description: "Noise-cancelling wireless headphones.",
    },
    {
      id: 3,
      name: "Smartphone",
      price: 899,
      description: "A flagship device with amazing battery life.",
    },
    {
      id: 4,
      name: "Camera",
      price: 500,
      description: "Capture stunning photos and videos.",
    },
    {
      id: 5,
      name: "Keyboard",
      price: 75,
      description: "Mechanical keyboard with RGB lighting.",
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ marginBottom: "20px" }}>Product Store</h1>

      {!selectedProduct && (
        <ProductList products={products} onProductClick={setSelectedProduct} />
      )}

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default App;
