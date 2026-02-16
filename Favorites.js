import { Heart, ShoppingCart } from "lucide-react";

export default function Favorites({ favorites = [], addToCart, setPage }) {
  return (
    <div style={{ padding: "40px", maxWidth: 1100, margin: "auto" }}>
      
      {/* Page Title */}
      <h1 style={{ 
        fontSize: 32, 
        marginBottom: 30, 
        display: "flex", 
        alignItems: "center",
        gap: 10
      }}>
        <Heart size={32} color="crimson" /> My Favorites
      </h1>

      {/* Empty Favorites */}
      {favorites.length === 0 && (
        <div style={{
          textAlign: "center",
          padding: 60,
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}>
          <Heart size={70} color="#ccc" />
          <h2 style={{ marginTop: 20 }}>No favorites yet</h2>
          <p style={{ color: "#666" }}>
            Tap the heart icon on products you love
          </p>
          <button
            onClick={() => setPage("products")}
            style={{
              marginTop: 20,
              padding: "12px 25px",
              background: "linear-gradient(90deg, orange, hotpink)",
              border: "none",
              color: "#fff",
              borderRadius: 8,
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Browse Products
          </button>
        </div>
      )}

      {/* Favorites Grid */}
      {favorites.length > 0 && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 25
        }}>
          {favorites.map((product) => (
            <div key={product.id} style={{
              background: "#fff",
              borderRadius: 14,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "transform .3s"
            }}>
              <img
                src={product.image}
                alt=""
                style={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: 15 }}>
                <h4 style={{ marginBottom: 6 }}>{product.name}</h4>
                <p style={{ fontWeight: "bold", color: "#e67e22" }}>
                  ₹{product.price}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  style={{
                    width: "100%",
                    marginTop: 10,
                    padding: 10,
                    background: "linear-gradient(90deg, orange, hotpink)",
                    border: "none",
                    color: "#fff",
                    borderRadius: 8,
                    fontWeight: "bold",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6
                  }}
                >
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
