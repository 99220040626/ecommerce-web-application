import { useState } from "react";
import { QrCode } from "lucide-react";

export default function Payment({ total = 0, setPage, placeOrder }) {
  const [processing, setProcessing] = useState(false);

  const handlePay = () => {
    if (processing) return;

    setProcessing(true);

    // 🔁 DEMO PAYMENT (real gateway later)
    setTimeout(() => {
      if (typeof placeOrder === "function") {
        placeOrder(); // ✅ create order ONLY after payment
      }

      setProcessing(false);
      setPage("success"); // ✅ go to success page
    }, 2000);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>Complete Payment</h2>
        <p>Pay ₹{total} using UPI</p>

        <div style={styles.qr}>
          <QrCode size={80} />
        </div>

        <p style={{ fontWeight: 600 }}>UPI ID: shop@upi</p>

        <button
          onClick={handlePay}
          disabled={processing}
          style={{
            ...styles.payBtn,
            opacity: processing ? 0.6 : 1,
          }}
        >
          {processing ? "Processing..." : `Pay ₹${total}`}
        </button>

        <button
          onClick={() => setPage("checkout")}
          style={styles.cancelBtn}
          disabled={processing}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f9fafb",
  },
  card: {
    background: "#fff",
    padding: 40,
    borderRadius: 16,
    width: 380,
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  qr: {
    height: 180,
    width: 180,
    margin: "20px auto",
    border: "2px dashed #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  payBtn: {
    width: "100%",
    padding: 14,
    borderRadius: 10,
    border: "none",
    background: "#22c55e",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
  cancelBtn: {
    marginTop: 12,
    background: "none",
    border: "none",
    color: "#6b7280",
    cursor: "pointer",
  },
};
