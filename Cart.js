export default function Cart({ cart = [], removeFromCart, setPage }) {
  // ✅ Safe total calculation
  const total = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + item.price * item.qty, 0)
    : 0;

  return (
    <div style={{ padding: "40px 20px", maxWidth: 1000, margin: "auto" }}>
      <h2
        style={{
          marginBottom: 30,
          fontSize: 32,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        🛒 Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: 60,
            padding: 30,
            background: "#f9f9f9",
            borderRadius: 12,
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <h3 style={{ fontSize: 24, marginBottom: 10 }}>
            Your cart is empty
          </h3>
          <p style={{ fontSize: 16, color: "#555", marginBottom: 20 }}>
            Add items to your cart to see them here.
          </p>

          <button
            onClick={() => setPage("products")}
            style={{
              marginTop: 10,
              padding: "12px 32px",
              background: "#ff9f00",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 20,
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              }}
            >
              <div>
                <h4 style={{ fontSize: 20, fontWeight: 600 }}>
                  {item.name}
                </h4>
                <p style={{ fontSize: 16, color: "#555" }}>
                  ₹ {item.price} × {item.qty} = ₹{" "}
                  {item.price * item.qty}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: "#ff4d4f",
                  color: "#fff",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div
            style={{
              marginTop: 30,
              padding: 25,
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ fontSize: 22, fontWeight: 700 }}>
              Total
            </h3>
            <span
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#ff9f00",
              }}
            >
              ₹ {total}
            </span>
          </div>

          {/* ✅ FIXED CHECKOUT BUTTON */}
          <div style={{ textAlign: "right", marginTop: 20 }}>
            <button
              onClick={() => setPage("checkout")}   // ✅ FIX
              style={{
                padding: "12px 36px",
                background: "#52c41a",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
