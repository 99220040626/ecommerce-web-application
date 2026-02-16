import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products({ addToCart }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 40px",
        background: "linear-gradient(135deg, #f8fafc, #eef2ff)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Page Title */}
      <h1
        style={{
          textAlign: "center",
          fontSize: 42,
          fontWeight: 800,
          marginBottom: 10,
          background: "linear-gradient(90deg, #f97316, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Products
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#6b7280",
          fontSize: 16,
          marginBottom: 50,
        }}
      >
        Discover hand-picked items curated just for you
      </p>

      {/* Products Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 30,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
