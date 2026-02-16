import axios from "axios";
import { useState } from "react";

export default function Login({ setPage, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: email.toLowerCase(), // ✅ normalize email
          password,
        }
      );

      /* ===============================
         SAVE AUTH DATA
      ================================ */
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user.id);
      localStorage.setItem("userName", res.data.user.name);
      localStorage.setItem("userEmail", res.data.user.email);

      // ✅ MOST IMPORTANT FIX
      setUser(res.data.user);

      alert("✅ Login Successful");
      setPage("products");
    } catch (err) {
      console.error(err);
      alert("❌ Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fff7ed, #ffe4f0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Segoe UI, sans-serif",
        padding: 20,
      }}
    >
      <div
        style={{
          width: 360,
          background: "#fff",
          padding: "40px 30px",
          borderRadius: 18,
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: 34,
            fontWeight: 800,
            marginBottom: 10,
            background: "linear-gradient(90deg, orange, hotpink)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ShopHub
        </h1>

        <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 30 }}>
          Sign in to continue shopping
        </p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 15,
            borderRadius: 10,
            border: "1px solid #d1d5db",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 20,
            borderRadius: 10,
            border: "1px solid #d1d5db",
          }}
        />

        <button
          onClick={login}
          disabled={loading}
          style={{
            width: "100%",
            padding: 14,
            borderRadius: 30,
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: 16,
            background: "linear-gradient(90deg, orange, hotpink)",
            color: "#fff",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Signing in..." : "Login"}
        </button>

        <p style={{ textAlign: "center", marginTop: 20 }}>
          New to ShopHub?{" "}
          <span
            onClick={() => setPage("register")}
            style={{ color: "hotpink", fontWeight: "bold", cursor: "pointer" }}
          >
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
}
