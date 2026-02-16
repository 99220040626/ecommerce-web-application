export default function Checkout({ cart, setPage }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handlePayment = () => {
    if (cart.length === 0) return;

    // ✅ GO TO PAYMENT PAGE (NO ORDER CREATION HERE)
    setPage("payment");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc, #eef2ff)",
        padding: "50px 20px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 700,
          margin: "auto",
          background: "#fff",
          borderRadius: 16,
          padding: 40,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            fontSize: 32,
            fontWeight: 800,
            textAlign: "center",
            marginBottom: 10,
            background: "linear-gradient(90deg, #22c55e, #16a34a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          💳 Secure Checkout
        </h2>

        <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 30 }}>
          Review your order before completing payment
        </p>

        {/* Order Items */}
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 0",
              borderBottom: "1px solid #e5e7eb",
              fontWeight: 600,
            }}
          >
            <span>
              {item.name} × {item.qty}
            </span>
            <span>₹ {item.price * item.qty}</span>
          </div>
        ))}

        {/* Total */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 20,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          <span>Total</span>
          <span style={{ color: "#16a34a" }}>₹ {total}</span>
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          style={{
            width: "100%",
            marginTop: 30,
            padding: "14px",
            background: "linear-gradient(90deg, #22c55e, #16a34a)",
            color: "#fff",
            border: "none",
            borderRadius: 12,
            fontSize: 18,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(22,163,74,0.4)",
          }}
        >
          Pay ₹ {total}
        </button>

        {/* Back */}
        <button
          onClick={() => setPage("cart")}
          style={{
            marginTop: 16,
            width: "100%",
            background: "none",
            border: "none",
            color: "#6b7280",
            cursor: "pointer",
          }}
        >
          ← Back to Cart
        </button>
      </div>
    </div>
  );
}
