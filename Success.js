export default function Success({ setPage }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f9fafb",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: 50,
          borderRadius: 20,
          textAlign: "center",
          maxWidth: 420,
          width: "100%",
          boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
        }}
      >
        <div style={{ fontSize: 60, marginBottom: 20 }}>✅</div>

        <h1 style={{ marginBottom: 10 }}>
          Order Placed Successfully
        </h1>

        <p style={{ color: "#6b7280", marginBottom: 30 }}>
          Thank you for your purchase. Your payment was successful.
        </p>

        <button
          onClick={() => setPage("orders")}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: 30,
            border: "none",
            background: "linear-gradient(90deg, #22c55e, #16a34a)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
            boxShadow: "0 10px 25px rgba(22,163,74,0.4)",
          }}
        >
          View Orders
        </button>

        <button
          onClick={() => setPage("products")}
          style={{
            marginTop: 14,
            background: "none",
            border: "none",
            color: "#6b7280",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
