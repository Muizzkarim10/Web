import React from "react";

const ProductDetails = ({ product, onBack }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        maxWidth: "400px",
      }}
    >
      <h2>{product.name}</h2>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>{product.description}</p>

      <button
        onClick={onBack}
        style={{
          marginTop: "20px",
          padding: "8px 12px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "black",
          color: "white",
          cursor: "pointer",
        }}
      >
        Back
      </button>
    </div>
  );
};

export default ProductDetails;
