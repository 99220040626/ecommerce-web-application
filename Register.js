import axios from "axios";
import { useState } from "react";

export default function Register({ setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const register = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      alert("🎉 Registration successful! Please login.");
      setPage("login");
    } catch (err) {
      alert("Registration failed. Email may already exist.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fdf2f8, #eff6ff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          width: 360,
          padding: 30,
          borderRadius: 16,
          background: "#fff",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: 800,
            marginBottom: 10,
            background: "linear-gradient(90deg, #f97316, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Create Account
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: 30,
          }}
        >
          Join ShopHub and start shopping today
        </p>

        <input
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={register}
          disabled={loading}
          style={{
            width: "100%",
            padding: 12,
            marginTop: 10,
            border: "none",
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            color: "#fff",
            background: loading
              ? "#9ca3af"
              : "linear-gradient(90deg, #f97316, #ec4899)",
          }}
        >
          {loading ? "Creating account..." : "Register"}
        </button>

        <p
          style={{
            marginTop: 20,
            textAlign: "center",
            fontSize: 14,
            color: "#374151",
          }}
        >
          Already have an account?{" "}
          <span
            onClick={() => setPage("login")}
            style={{
              color: "#2563eb",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

/* Reusable input style */
const inputStyle = {
  width: "100%",
  padding: 12,
  marginBottom: 15,
  borderRadius: 8,
  border: "1px solid #d1d5db",
  fontSize: 14,
};
