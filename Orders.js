import { useEffect, useState } from "react";
import { PackageCheck } from "lucide-react";
import axios from "axios";

export default function Orders({ user }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ===============================
     FETCH USER ORDERS
  ================================ */
  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/orders/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        // 🔐 SAFETY: backend may return { orders: [] }
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.orders || [];

        setOrders(data);
      } catch (err) {
        console.error("❌ Failed to fetch orders", err);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  /* ===============================
     UI STATES
  ================================ */

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: 80 }}>
        <h2>Loading orders...</h2>
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div style={{ textAlign: "center", padding: 80 }}>
        <h2>No orders yet 🛒</h2>
        <p>Place your first order to see it here</p>
      </div>
    );
  }

  /* ===============================
     ORDERS UI
  ================================ */

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0f9ff, #fdf2f8)",
        padding: "60px 20px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: 40,
          fontWeight: 800,
          marginBottom: 40,
        }}
      >
        Your Orders
      </h1>

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "grid",
          gap: 24,
        }}
      >
        {orders.map((order) => (
          <div
            key={order.id || order.order_id}
            style={{
              background: "#fff",
              borderRadius: 18,
              padding: 24,
              boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <PackageCheck size={32} color="#10b981" />
              <div>
                <h3 style={{ margin: 0 }}>
                  Order #{order.id || order.order_id}
                </h3>
                <p style={{ margin: 0, color: "#6b7280" }}>
                  {order.created_at
                    ? new Date(order.created_at).toDateString()
                    : ""}
                </p>
              </div>
            </div>

            <hr style={{ margin: "20px 0" }} />

            <p>
              <strong>Status:</strong>{" "}
              <span style={{ color: "#10b981" }}>
                {order.status || "Placed"}
              </span>
            </p>

            <p>
              <strong>Total:</strong> ₹{order.total}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
