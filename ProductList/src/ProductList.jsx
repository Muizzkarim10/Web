import React from "react";

const ProductList = ({ products, onProductClick }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => onProductClick(product)}
          style={{
            cursor: "pointer",
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "10px",
            width: "220px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "0.2s",
            wordWrap: "break-word",
            background: "white",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>{product.name}</h3>
          <p style={{ marginBottom: "8px" }}>Price: ${product.price}</p>

          <button
            style={{
              marginTop: "10px",
              padding: "8px 12px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
              cursor: "pointer",
            }}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
