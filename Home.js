export default function Home({ setPage }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fff7ed, #ffe4f0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Segoe UI, sans-serif",
        padding: 40
      }}
    >
      <div
        style={{
          maxWidth: 700,
          textAlign: "center",
          background: "#ffffff",
          padding: "60px 50px",
          borderRadius: 24,
          boxShadow: "0 30px 60px rgba(0,0,0,0.15)"
        }}
      >
        {/* Brand */}
        <h1
          style={{
            fontSize: 56,
            fontWeight: 800,
            marginBottom: 10,
            background: "linear-gradient(90deg, orange, hotpink)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          ShopHub
        </h1>

        {/* Tagline */}
        <h2
          style={{
            fontSize: 24,
            color: "#1f2937",
            marginBottom: 20
          }}
        >
          Your Smart Online Shopping Destination
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: 18,
            color: "#4b5563",
            lineHeight: 1.7,
            marginBottom: 40
          }}
        >
          Discover top-quality products, unbeatable prices, and a seamless
          shopping experience — all in one place.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          <button
            onClick={() => setPage("login")}
            style={{
              padding: "14px 36px",
              fontSize: 16,
              fontWeight: "bold",
              borderRadius: 30,
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(90deg, orange, hotpink)",
              color: "#fff",
              boxShadow: "0 15px 35px rgba(255,105,180,0.4)",
              transition: "transform 0.3s"
            }}
            onMouseOver={(e) => (e.target.style.transform = "translateY(-3px)")}
            onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
          >
            Login to Shop
          </button>

          <button
            onClick={() => setPage("products")}
            style={{
              padding: "14px 36px",
              fontSize: 16,
              fontWeight: "bold",
              borderRadius: 30,
              border: "2px solid hotpink",
              cursor: "pointer",
              background: "#fff",
              color: "hotpink",
              transition: "all 0.3s"
            }}
            onMouseOver={(e) => {
              e.target.style.background = "hotpink";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "#fff";
              e.target.style.color = "hotpink";
            }}
          >
            Browse Products
          </button>
        </div>

        {/* Footer text */}
        <p
          style={{
            marginTop: 40,
            fontSize: 14,
            color: "#9ca3af"
          }}
        >
          Secure payments • Fast delivery • Trusted by thousands
        </p>
      </div>
    </div>
  );
}
